#!/usr/bin/env python3
"""
Domain Scraper & Alert System - Banking Phishing Detection
Scans .com domains for potential banking phishing threats using dictionary permutations
"""

import requests
import whois
import time
import csv
import re
from datetime import datetime, timedelta
from typing import List, Dict, Set, Tuple
import concurrent.futures
from urllib.parse import urlparse
import json

class DomainScraper:
    def __init__(self):
        self.banking_keywords = [
            'bank', 'banco', 'banking', 'banca', 'caja', 'caixa', 'santander',
            'bbva', 'sabadell', 'bankia', 'caixabank', 'ing', 'popular', 'bankinter',
            'unicaja', 'kutxa', 'abanca', 'evo', 'openbank', 'n26', 'revolut',
            'paypal', 'transfer', 'wire', 'swift', 'iban', 'account', 'cuenta',
            'card', 'tarjeta', 'credit', 'debito', 'visa', 'mastercard', 'secure',
            'login', 'signin', 'access', 'auth', 'verify', 'verification', 'security'
        ]
        
        self.suspicious_tlds = ['.tk', '.ml', '.ga', '.cf', '.pw', '.top', '.click', '.link']
        self.risk_patterns = [
            r'bank.*\d+', r'banco.*\d+', r'.*secure.*login', r'.*verify.*account',
            r'.*phish', r'.*fake', r'.*scam', r'.*fraud'
        ]
        
        self.results = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })

    def generate_domain_variations(self, base_words: List[str]) -> List[str]:
        """Generate suspicious domain variations using banking keywords"""
        variations = []
        
        # Common phishing patterns
        patterns = [
            '{word}secure', '{word}login', '{word}verify', 'secure{word}', 'my{word}',
            '{word}online', '{word}digital', '{word}app', '{word}mobile', '{word}bank',
            '{word}security', '{word}alert', '{word}update', '{word}support',
            '{word}-security', '{word}-login', '{word}-verify', 'my-{word}',
            '{word}-online', '{word}-digital', '{word}-app', '{word}-mobile'
        ]
        
        for base in base_words:
            for pattern in patterns:
                domain = pattern.format(word=base.lower())
                variations.append(domain)
                
                # Add common variations with numbers
                for num in range(1, 100):
                    variations.append(f"{domain}{num}")
                    variations.append(f"{domain}-{num}")
        
        return list(set(variations))

    def check_domain_exists(self, domain: str) -> Dict:
        """Check if domain exists and analyze for phishing indicators"""
        result = {
            'domain': domain,
            'exists': False,
            'registered': False,
            'risk_score': 0,
            'indicators': [],
            'whois_data': None,
            'http_status': None,
            'content_analysis': {}
        }
        
        try:
            # Check WHOIS data
            whois_data = whois.whois(domain)
            if whois_data:
                result['registered'] = True
                result['whois_data'] = {
                    'registrar': whois_data.registrar,
                    'created_date': str(whois_data.creation_date) if whois_data.creation_date else None,
                    'expires_date': str(whois_data.expiration_date) if whois_data.expiration_date else None,
                    'country': whois_data.country
                }
                
                # Risk: Recently registered domains
                if whois_data.creation_date:
                    days_old = (datetime.now() - whois_data.creation_date[0]).days
                    if days_old < 30:
                        result['risk_score'] += 30
                        result['indicators'].append('Recently registered (< 30 days)')
                
                # Risk: Privacy protection
                if whois_data.registrar and any(privacy in whois_data.registrar.lower() 
                                               for privacy in ['privacy', 'proxy', 'whoisguard']):
                    result['risk_score'] += 20
                    result['indicators'].append('Privacy protection enabled')
        except:
            pass
        
        # Try HTTP request
        try:
            response = self.session.get(f"http://{domain}", timeout=10, allow_redirects=True)
            result['exists'] = True
            result['http_status'] = response.status_code
            
            # Analyze content for phishing indicators
            content = response.text.lower()
            
            # Check for banking-related content
            banking_forms = content.count('login') + content.count('signin') + content.count('password')
            if banking_forms > 2:
                result['risk_score'] += 25
                result['indicators'].append('Multiple login forms detected')
            
            # Check for SSL certificate issues
            if response.url.startswith('https://'):
                result['content_analysis']['ssl'] = True
            else:
                result['risk_score'] += 15
                result['indicators'].append('No SSL certificate')
                result['content_analysis']['ssl'] = False
            
            # Check for suspicious redirects
            if len(response.history) > 2:
                result['risk_score'] += 20
                result['indicators'].append('Multiple redirects')
            
            # Check for brand impersonation
            for brand in ['santander', 'bbva', 'caixabank', 'bankia', 'ing']:
                if brand in content and brand not in domain:
                    result['risk_score'] += 40
                    result['indicators'].append(f'Brand impersonation: {brand}')
                    break
                    
        except requests.exceptions.RequestException:
            # Domain exists but not accessible
            if result['registered']:
                result['risk_score'] += 10
                result['indicators'].append('Registered but not accessible')
        
        # Domain pattern analysis
        for pattern in self.risk_patterns:
            if re.match(pattern, domain, re.IGNORECASE):
                result['risk_score'] += 35
                result['indicators'].append(f'Suspicious pattern: {pattern}')
        
        # TLD analysis
        domain_tld = '.' + domain.split('.')[-1] if '.' in domain else ''
        if domain_tld in self.suspicious_tlds:
            result['risk_score'] += 25
            result['indicators'].append(f'Suspicious TLD: {domain_tld}')
        
        # Character analysis
        if domain.count('-') > 2:
            result['risk_score'] += 15
            result['indicators'].append('Excessive hyphens')
        
        if any(char.isdigit() for char in domain):
            result['risk_score'] += 10
            result['indicators'].append('Contains numbers')
        
        return result

    def scan_domains(self, domains: List[str], max_workers: int = 20) -> List[Dict]:
        """Scan multiple domains concurrently"""
        print(f"🔍 Scanning {len(domains)} domains for phishing threats...")
        
        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_domain = {executor.submit(self.check_domain_exists, domain): domain 
                              for domain in domains}
            
            for i, future in enumerate(concurrent.futures.as_completed(future_to_domain)):
                domain = future_to_domain[future]
                try:
                    result = future.result()
                    self.results.append(result)
                    
                    # Progress indicator
                    if (i + 1) % 10 == 0:
                        print(f"  Processed {i + 1}/{len(domains)} domains...")
                        
                except Exception as e:
                    print(f"  ❌ Error scanning {domain}: {e}")
                
                # Rate limiting
                time.sleep(0.1)
        
        return self.results

    def generate_alerts(self, results: List[Dict], risk_threshold: int = 50) -> List[Dict]:
        """Generate alerts for high-risk domains"""
        alerts = []
        
        for result in results:
            if result['risk_score'] >= risk_threshold:
                alert = {
                    'timestamp': datetime.now().isoformat(),
                    'domain': result['domain'],
                    'risk_score': result['risk_score'],
                    'risk_level': 'CRITICAL' if result['risk_score'] >= 80 else 'HIGH',
                    'indicators': result['indicators'],
                    'whois_info': result['whois_data'],
                    'recommendation': self._get_recommendation(result['risk_score'])
                }
                alerts.append(alert)
        
        return sorted(alerts, key=lambda x: x['risk_score'], reverse=True)

    def _get_recommendation(self, risk_score: int) -> str:
        """Get recommendation based on risk score"""
        if risk_score >= 80:
            return "IMMEDIATE ACTION: Block domain, report to authorities, investigate further"
        elif risk_score >= 60:
            return "HIGH PRIORITY: Monitor closely, prepare to block if suspicious activity confirmed"
        elif risk_score >= 40:
            return "MEDIUM PRIORITY: Add to watchlist, periodic monitoring recommended"
        else:
            return "LOW PRIORITY: Standard monitoring procedures"

    def export_to_csv(self, results: List[Dict], filename: str = 'domain_scan_results.csv'):
        """Export results to CSV file"""
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = [
                'domain', 'exists', 'registered', 'risk_score', 'indicators',
                'registrar', 'created_date', 'expires_date', 'country',
                'http_status', 'ssl_enabled', 'risk_level'
            ]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for result in results:
                row = {
                    'domain': result['domain'],
                    'exists': result['exists'],
                    'registered': result['registered'],
                    'risk_score': result['risk_score'],
                    'indicators': '; '.join(result['indicators']),
                    'registrar': result['whois_data']['registrar'] if result['whois_data'] else '',
                    'created_date': result['whois_data']['created_date'] if result['whois_data'] else '',
                    'expires_date': result['whois_data']['expires_date'] if result['whois_data'] else '',
                    'country': result['whois_data']['country'] if result['whois_data'] else '',
                    'http_status': result['http_status'],
                    'ssl_enabled': result['content_analysis'].get('ssl', False),
                    'risk_level': self._get_risk_level(result['risk_score'])
                }
                writer.writerow(row)
        
        print(f"📊 Results exported to {filename}")

    def _get_risk_level(self, risk_score: int) -> str:
        """Get risk level based on score"""
        if risk_score >= 80:
            return 'CRITICAL'
        elif risk_score >= 60:
            return 'HIGH'
        elif risk_score >= 40:
            return 'MEDIUM'
        else:
            return 'LOW'

    def generate_report(self, alerts: List[Dict]) -> str:
        """Generate summary report"""
        total_domains = len(self.results)
        high_risk = len([r for r in self.results if r['risk_score'] >= 60])
        critical = len([r for r in self.results if r['risk_score'] >= 80])
        
        report = f"""
🔒 DOMAIN PHISHING THREAT REPORT
{'='*50}
Scan Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Total Domains Scanned: {total_domains}
High Risk Domains: {high_risk}
Critical Threats: {critical}

🚨 CRITICAL ALERTS ({len([a for a in alerts if a['risk_level'] == 'CRITICAL'])})
"""
        
        for alert in alerts[:5]:  # Top 5 alerts
            if alert['risk_level'] == 'CRITICAL':
                report += f"""
Domain: {alert['domain']}
Risk Score: {alert['risk_score']}/100
Indicators: {', '.join(alert['indicators'][:3])}
Recommendation: {alert['recommendation']}
{'-'*30}
"""
        
        return report


def main():
    """Main execution function"""
    print("🚀 Domain Scraper & Alert System - Banking Phishing Detection")
    print("="*60)
    
    scraper = DomainScraper()
    
    # Generate target domains
    base_banks = ['santander', 'bbva', 'caixabank', 'bankia', 'ing', 'popular']
    suspicious_domains = scraper.generate_domain_variations(base_banks)
    
    # Add some known suspicious patterns
    additional_domains = [
        'santander-secure-login.com',
        'bbva-verify-account.com',
        'caixabank-security-update.com',
        'bankia-online-banking.com',
        'ing-direct-support.com',
        'my-santander-account.com',
        'secure-bbva-login.com',
        'verify-caixabank.com',
        'bankia-digital.com',
        'ing-banking-secure.com'
    ]
    
    all_domains = suspicious_domains[:50] + additional_domains  # Limit for demo
    
    # Scan domains
    results = scraper.scan_domains(all_domains)
    
    # Generate alerts
    alerts = scraper.generate_alerts(results, risk_threshold=40)
    
    # Export results
    scraper.export_to_csv(results)
    
    # Export alerts
    with open('security_alerts.json', 'w') as f:
        json.dump(alerts, f, indent=2)
    
    # Generate report
    report = scraper.generate_report(alerts)
    print(report)
    
    # Save report
    with open('security_report.txt', 'w') as f:
        f.write(report)
    
    print(f"\n✅ Scan completed!")
    print(f"📁 Files generated:")
    print(f"   - domain_scan_results.csv (All results)")
    print(f"   - security_alerts.json (High-risk alerts)")
    print(f"   - security_report.txt (Summary report)")


if __name__ == "__main__":
    main()