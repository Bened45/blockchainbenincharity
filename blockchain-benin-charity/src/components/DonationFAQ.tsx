'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
}

export default function DonationFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "Comment puis-je être sûr que mon don arrive à destination ?",
            answer: "Grâce à notre technologie blockchain, chaque don est enregistré de manière immuable. Vous pouvez suivre le parcours de votre contribution depuis votre paiement jusqu'à son utilisation finale sur le terrain via notre explorateur de transparence."
        },
        {
            question: "Puis-je rester anonyme ?",
            answer: "Oui, tout à fait. Lors du processus de don, vous pouvez choisir de ne pas afficher votre nom publiquement. Cependant, nous avons besoin de vos informations pour le traitement du paiement et l'envoi du reçu fiscal."
        },
        {
            question: "Quels moyens de paiement acceptez-vous ?",
            answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), les paiements mobiles (Mobile Money, Orange Money, MTN Money) ainsi que les crypto-monnaies (Bitcoin, Ethereum, USDT)."
        },
        {
            question: "Puis-je obtenir un reçu fiscal ?",
            answer: "Oui, un reçu fiscal est automatiquement généré et envoyé à votre adresse email une fois le don confirmé. Ce reçu vous permet de bénéficier d'une déduction fiscale selon la législation de votre pays de résidence."
        },
        {
            question: "Que se passe-t-il si je fais un don mensuel ?",
            answer: "Un don mensuel est prélevé automatiquement chaque mois à la date anniversaire de votre premier don. Vous pouvez modifier le montant ou annuler votre engagement à tout moment depuis votre espace donateur ou en contactant notre support."
        },
        {
            question: "Puis-je choisir le projet que je veux soutenir ?",
            answer: "Absolument. Dans le formulaire de don, vous pouvez sélectionner l'option 'Don pour un projet spécifique' et choisir parmi nos campagnes en cours. Si vous choisissez 'Don général', nous allouerons les fonds là où les besoins sont les plus urgents."
        }
    ];

    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-slate-600 text-sm font-medium mb-6 border border-yellow-100">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Questions fréquentes
                    </div>
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">
                        FAQ Dons
                    </h2>
                    <p className="text-2xl font-bold text-slate-900">
                        Trouvez rapidement les réponses à vos questions
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-red-500 font-bold text-xl">?</span>
                                    <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-700'}`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <svg
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16">
                    <p className="text-slate-500 mb-6">Vous avez d'autres questions ?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contactez notre support
                    </Link>
                </div>
            </div>
        </section>
    );
}
