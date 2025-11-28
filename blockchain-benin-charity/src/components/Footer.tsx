'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-700">
                    {/* Brand section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/logo.png"
                                    alt="Blockchain Bénin Charity Logo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <span className="text-xl font-semibold">Blockchain Bénin Charity</span>
                        </Link>
                        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                            L'innovation blockchain au service de la solidarité africaine. Nous transformons la vie des communautés béninoises avec transparence, impact mesurable et dignité humaine au cœur de chaque action.
                        </p>
                        <div className="space-y-2">
                            <a href="tel:+22900000000" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                +229 XX XX XX XX
                            </a>
                            <a href="mailto:contact@blockchain-benincharity.com" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                contact@blockchain-benincharity.com
                            </a>
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                Cotonou, Bénin
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <circle cx="10" cy="10" r="8" />
                                </svg>
                                100% Transparent
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Sécurisé
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm text-slate-300 hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="/apropos" className="text-sm text-slate-300 hover:text-white transition-colors">À propos</Link></li>
                            <li><Link href="/projets" className="text-sm text-slate-300 hover:text-white transition-colors">Projets</Link></li>
                            <li><Link href="/galerie" className="text-sm text-slate-300 hover:text-white transition-colors">Galerie</Link></li>
                            <li><Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/transparence" className="text-sm text-slate-300 hover:text-white transition-colors">Transparence</Link></li>
                            <li><Link href="/contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Nos programmes */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Nos programmes</h3>
                        <ul className="space-y-2">
                            <li><Link href="/programmes/actions-caritatives" className="text-sm text-slate-300 hover:text-white transition-colors">Actions caritatives</Link></li>
                            <li><Link href="/programmes/inclusion-numerique" className="text-sm text-slate-300 hover:text-white transition-colors">Inclusion numérique</Link></li>
                            <li><Link href="/programmes/bourses-etude" className="text-sm text-slate-300 hover:text-white transition-colors">Bourses d'étude</Link></li>
                            <li><Link href="/programmes/activites-jeunesse" className="text-sm text-slate-300 hover:text-white transition-colors">Activités jeunesse</Link></li>
                            <li><Link href="/programmes/projets-agricoles" className="text-sm text-slate-300 hover:text-white transition-colors">Projets agricoles</Link></li>
                            <li><Link href="/don" className="text-sm text-slate-300 hover:text-white transition-colors">Faire un don</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Newsletter</h3>
                        <p className="text-sm text-slate-300 mb-4">
                            Recevez nos actualités et histoires d'impact.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:border-yellow-400 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 p-2 rounded-lg transition-colors"
                                aria-label="S'abonner"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                        <div className="mt-6 space-y-2">
                            <Link href="/initiatives-blockchain-benin" className="block text-sm text-slate-300 hover:text-white transition-colors">
                                Initiatives Blockchain BENIN
                            </Link>
                            <a href="https://blockchain-benin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
                                Blockchain BENIN
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            <a href="https://benin-blockchain-week.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
                                BENIN BLOCKCHAIN Week
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social media & Payment methods */}
                <div className="py-6 border-b border-slate-700">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social media */}
                        <div>
                            <p className="text-sm text-slate-400 mb-3">Suivez-nous</p>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center justify-center transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Payment methods */}
                        <div>
                            <p className="text-sm text-slate-400 mb-3">Moyens de paiement</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">Bitcoin</span>
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">Ethereum</span>
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">USDT</span>
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">Binance Pay</span>
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">FedaPay</span>
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">FeexPay</span>
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">Visa</span>
                                <span className="px-3 py-1.5 bg-slate-700 rounded text-xs font-medium">Mastercard</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-400">
                            Copyright 2025 Blockchain BENIN Charity. Tous droits réservés
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                            <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
                            <Link href="/cgu" className="hover:text-white transition-colors">CGU Dons</Link>
                            <Link href="/remboursement" className="hover:text-white transition-colors">Politique de remboursement</Link>
                            <Link href="/charte-ethique" className="hover:text-white transition-colors">Charte éthique</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
