'use client';

import { useState, useEffect } from 'react';

export default function DonationForm() {
    const [step, setStep] = useState<number>(1);
    const [amount, setAmount] = useState<number>(25000);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [donationType, setDonationType] = useState<string>('unique');
    const [projectType, setProjectType] = useState<string>('general');
    const [paymentMethod, setPaymentMethod] = useState<string>('crypto');
    const [cryptoType, setCryptoType] = useState<string>('BTC');
    const [showConfetti, setShowConfetti] = useState<boolean>(false);

    const predefinedAmounts = [5000, 10000, 25000, 50000, 100000];

    const handleAmountSelect = (val: number) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setCustomAmount(val);
        if (val) {
            setAmount(parseInt(val, 10));
        } else {
            setAmount(0);
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    // Exchange rates (mock)
    const rates = {
        USD: 0.0016,
        EUR: 0.0015,
        BTC: 0.000000012,
    };

    const getImpact = (val: number) => {
        if (val >= 250000) return { icon: '🏫', text: "Rénovation d'une salle de classe" };
        if (val >= 100000) return { icon: '💻', text: "Ordinateur pour cyber-espace" };
        if (val >= 50000) return { icon: '💊', text: "Soins médicaux pour 20 personnes" };
        if (val >= 25000) return { icon: '👨‍👩‍👧‍👦', text: "1 mois de repas pour 10 familles" };
        if (val >= 10000) return { icon: '🍲', text: "50 repas chauds pour des familles" };
        if (val >= 5000) return { icon: '📚', text: "Kit scolaire complet pour 1 enfant" };
        return { icon: '✨', text: "Soutien général aux actions de l'ONG" };
    };

    const impact = getImpact(amount);

    // Manage confetti animation when reaching success step
    useEffect(() => {
        if (step === 5) {
            setShowConfetti(true);
            const timer = setTimeout(() => setShowConfetti(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const renderStep1 = () => (
        <>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Indiquez votre montant</h2>
                <p className="text-slate-500">Choisissez le montant de votre contribution</p>
            </div>

            {/* Contribution Type */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-blue-900 mb-4">Type de contribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => setDonationType('unique')}
                        className={`p-4 rounded-xl border-2 text-left transition-all flex items-start gap-4 ${donationType === 'unique'
                            ? 'border-green-500 bg-green-50'
                            : 'border-slate-100 hover:border-green-200'
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${donationType === 'unique' ? 'bg-green-200 text-green-700' : 'bg-slate-100 text-slate-500'
                            }`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-bold text-slate-900 text-sm">Don unique</div>
                            <div className="text-xs text-slate-500 mt-1">Un geste simple et immédiat</div>
                        </div>
                    </button>

                    <button
                        onClick={() => setDonationType('monthly')}
                        className={`p-4 rounded-xl border-2 text-left transition-all flex items-start gap-4 ${donationType === 'monthly'
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-slate-100 hover:border-blue-200'
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${donationType === 'monthly' ? 'bg-blue-200 text-blue-700' : 'bg-slate-100 text-slate-500'
                            }`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-bold text-slate-900 text-sm">Don mensuel récurrent</div>
                            <div className="text-xs text-slate-500 mt-1">Un soutien continu qui fait la différence</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Suggested Amounts */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-blue-900 mb-4">Montants suggérés</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {predefinedAmounts.map((val) => (
                        <button
                            key={val}
                            onClick={() => handleAmountSelect(val)}
                            className={`py-3 px-2 rounded-lg border font-bold text-sm transition-all ${amount === val && !customAmount
                                ? 'bg-green-500 text-white border-green-500 shadow-md'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-green-400 hover:text-green-600'
                                }`}
                        >
                            {val >= 1000 ? `${val / 1000}K` : val}
                        </button>
                    ))}
                </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-blue-900 mb-4">Ou entrez votre montant personnalisé</h3>
                <div className="relative">
                    <input
                        type="number"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder={amount.toString()}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 px-6 text-2xl font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-lg">FCFA</span>
                </div>
            </div>

            {/* Equivalents */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                <div className="flex items-center gap-2 mb-4 text-slate-500 text-xs font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Équivalent approximatif :
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-bold mb-1">🇺🇸 USD</div>
                        <div className="font-mono text-slate-700 font-medium">${(amount * rates.USD).toFixed(2)}</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-bold mb-1">🇪🇺 EUR</div>
                        <div className="font-mono text-slate-700 font-medium">€{(amount * rates.EUR).toFixed(2)}</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-bold mb-1">₿ BTC</div>
                        <div className="font-mono text-slate-700 font-medium">{(amount * rates.BTC).toFixed(6)}</div>
                    </div>
                </div>
            </div>

            {/* Impact Preview */}
            <div className="bg-green-50 rounded-xl p-6 mb-8 border border-green-100">
                <div className="flex items-center gap-2 mb-4 text-green-700 text-sm font-bold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Votre impact :
                </div>
                <div className="flex items-start gap-4">
                    <div className="text-4xl">{impact.icon}</div>
                    <div>
                        <div className="font-bold text-slate-800 text-lg">{impact.text}</div>
                        <div className="text-xs text-slate-500 mt-1">Avec {amount.toLocaleString()} FCFA</div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                onClick={nextStep}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 group"
            >
                Continuer vers le paiement
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </>
    );

    const renderStep2 = () => (
        <>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Choisissez votre mode de paiement</h2>
                <p className="text-slate-500">Sélectionnez la méthode qui vous convient</p>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                {[
                    { id: 'crypto', label: 'Crypto', icon: '₿' },
                    { id: 'fedapay', label: 'FedaPay', icon: '📱' },
                    { id: 'feexpay', label: 'FeexPay', icon: '📱' },
                    { id: 'card', label: 'Carte', icon: '💳' },
                    { id: 'binance', label: 'Binance', icon: '💱' },
                    { id: 'wire', label: 'Virement', icon: '🏦' },
                ].map((method) => (
                    <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === method.id
                            ? 'bg-yellow-400 border-yellow-500 text-slate-900 shadow-md'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-yellow-300 hover:bg-yellow-50'
                            }`}
                    >
                        <span className="text-xl mb-1">{method.icon}</span>
                        <span className="text-[10px] font-bold">{method.label}</span>
                    </button>
                ))}
            </div>

            {paymentMethod === 'crypto' && (
                <>
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-8 flex items-start gap-3">
                        <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">Recommandé</span>
                        <p className="text-xs text-slate-700 leading-relaxed">
                            <span className="font-bold">Paiement instantané</span>, frais minimes, <span className="font-bold">100% tracé</span> sur la blockchain. La solution la plus transparente !
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-blue-900 mb-4">Choisissez votre cryptomonnaie</h3>
                        <div className="relative">
                            <select
                                value={cryptoType}
                                onChange={(e) => setCryptoType(e.target.value)}
                                className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-10 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="BTC">Bitcoin (BTC)</option>
                                <option value="ETH">Ethereum (ETH)</option>
                                <option value="USDT">Tether (USDT)</option>
                            </select>
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 font-bold">₿</span>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{(amount * rates.BTC).toFixed(6)} BTC</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="border-2 border-blue-900 rounded-xl p-6 relative">
                            <div className="flex items-center gap-2 mb-4 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                Adresse du wallet BBC
                            </div>
                            <div className="bg-slate-50 rounded-lg p-3 font-mono text-xs text-slate-600 break-all mb-4 border border-slate-200">
                                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                Copier l'adresse
                            </button>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-6 flex flex-col items-center justify-center border border-slate-200">
                            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                                {/* QR Code Placeholder */}
                                <div className="w-32 h-32 bg-slate-900 flex items-center justify-center text-white">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                                        <path d="M7 7h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 15h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 text-center">
                                Scannez pour payer<br />
                                <span className="font-bold text-slate-700">{(amount * rates.BTC).toFixed(6)} BTC</span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 mb-8">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-xs text-slate-600 leading-relaxed">
                            <span className="font-bold text-blue-900 block mb-1">Transaction automatiquement détectée</span>
                            Après le paiement, la transaction sera automatiquement confirmée sur la blockchain. Vous recevrez un email de confirmation dans les minutes qui suivent.
                        </div>
                    </div>
                </>
            )}

            {paymentMethod === 'fedapay' && (
                <div className="bg-slate-50 rounded-2xl p-12 border border-slate-200 flex flex-col items-center text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-sm">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Mobile Money avec FedaPay</h3>
                    <p className="text-slate-500 mb-8 max-w-md">
                        Payez facilement avec <span className="font-bold text-slate-700">MTN Mobile Money</span> ou <span className="font-bold text-slate-700">Moov Money</span>
                    </p>

                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center gap-2 hover:-translate-y-0.5">
                        Continuer avec FedaPay
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            )}

            {paymentMethod === 'feexpay' && (
                <div className="bg-slate-50 rounded-2xl p-12 border border-slate-200 flex flex-col items-center text-center mb-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 shadow-sm">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Tous opérateurs avec FeexPay</h3>
                    <p className="text-slate-500 mb-8 max-w-md">
                        Compatible avec <span className="font-bold text-slate-700">MTN, Moov, Celtiis</span> et tous les opérateurs béninois
                    </p>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center gap-2 hover:-translate-y-0.5">
                        Continuer avec FeexPay
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            )}

            {paymentMethod === 'card' && (
                <div className="bg-slate-50 rounded-2xl p-12 border border-slate-200 flex flex-col items-center text-center mb-8">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600 shadow-sm">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Carte bancaire</h3>
                    <p className="text-slate-500 mb-8 max-w-md">
                        Paiement sécurisé par <span className="font-bold text-slate-700">Visa</span> ou <span className="font-bold text-slate-700">Mastercard</span>
                    </p>

                    <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center gap-2 hover:-translate-y-0.5">
                        Paiement sécurisé
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </button>
                </div>
            )}

            {paymentMethod === 'binance' && (
                <div className="bg-yellow-50 rounded-2xl p-12 border border-yellow-100 flex flex-col items-center text-center mb-8">
                    <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-6 text-yellow-700 shadow-sm">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Binance Pay</h3>
                    <p className="text-slate-500 mb-8 max-w-md">
                        Paiement <span className="font-bold text-slate-700">instantané</span> depuis votre compte <span className="font-bold text-slate-700">Binance</span>
                    </p>

                    <button className="bg-[#FCD535] hover:bg-[#F0CB30] text-slate-900 font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-yellow-200 flex items-center gap-2 hover:-translate-y-0.5">
                        Continuer avec Binance
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            )}

            {paymentMethod === 'wire' && (
                <div className="border-2 border-blue-900 rounded-2xl p-8 mb-8 text-left">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl">
                            $
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">Coordonnées bancaires</h3>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Banque</div>
                                <div className="font-bold text-slate-700">Orabank Bénin</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Titulaire</div>
                                <div className="font-bold text-slate-700">Blockchain BENIN Charity</div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="text-xs text-slate-500 mb-1">N° de compte</div>
                            <div className="flex items-center gap-2 font-mono font-bold text-slate-700">
                                BJ066 01234 56789 01234567890 12
                                <button className="text-blue-600 hover:text-blue-700 transition-colors" title="Copier">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-slate-500 mb-1">Code SWIFT</div>
                            <div className="flex items-center gap-2 font-mono font-bold text-slate-700">
                                ORABBJBJ
                                <button className="text-blue-600 hover:text-blue-700 transition-colors" title="Copier">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-xs text-slate-600">
                            Merci d'indiquer votre <span className="font-bold">email</span> dans le libellé du virement pour recevoir automatiquement votre reçu.
                        </p>
                    </div>
                </div>
            )}

            <div className="flex gap-4">
                <button
                    onClick={prevStep}
                    className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    ← Retour
                </button>
                <button
                    onClick={nextStep}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2"
                >
                    Continuer
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </>
    );

    const renderStep3 = () => (
        <>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Vos informations</h2>
                <p className="text-slate-500">Pour vous envoyer votre reçu et rester en contact</p>
            </div>

            <div className="mb-8">
                <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="checkbox" className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                    <span className="text-slate-700 font-medium">Faire un don anonyme (votre nom ne sera pas publié)</span>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Prénom *</label>
                    <input type="text" placeholder="Jean" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Nom</label>
                    <input type="text" placeholder="Dupont" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-blue-900 mb-2">Email * (pour recevoir le reçu)</label>
                <input type="email" placeholder="jean.dupont@email.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Téléphone</label>
                    <input type="tel" placeholder="+229 XX XX XX XX" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Pays</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                        <option>🇧🇯 Bénin</option>
                        <option>🇫🇷 France</option>
                        <option>🇺🇸 États-Unis</option>
                        <option>🇨🇦 Canada</option>
                        <option>🇸🇳 Sénégal</option>
                        <option>🇨🇮 Côte d'Ivoire</option>
                        <option>🇹🇬 Togo</option>
                    </select>
                </div>
            </div>

            <div className="mb-8">
                <label className="block text-sm font-bold text-blue-900 mb-2">Message de soutien (optionnel)</label>
                <textarea
                    rows={3}
                    placeholder="Partagez votre message d'encouragement avec notre équipe et les bénéficiaires..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Votre message peut être publié sur notre site (avec votre accord)
                </p>
            </div>

            <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Préférences</h4>

                <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                    <div>
                        <div className="text-slate-800 font-bold text-sm">Recevoir les newsletters et les actualités de BBC</div>
                        <div className="text-xs text-slate-500 mt-0.5">Restez informé de nos actions et de l'impact de votre don</div>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                    <div>
                        <div className="text-slate-800 font-bold text-sm">Apparaître dans la liste des donateurs</div>
                        <div className="text-xs text-slate-500 mt-0.5">Votre nom sera affiché sur notre mur des donateurs</div>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                    <div>
                        <div className="text-slate-800 font-bold text-sm">Recevoir un reçu fiscal</div>
                        <div className="text-xs text-slate-500 mt-0.5">Résidents béninois uniquement - déductible des impôts</div>
                    </div>
                </label>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={prevStep}
                    className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    ← Retour
                </button>
                <button
                    onClick={nextStep}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2"
                >
                    Continuer
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </>
    );

    const renderStep4 = () => (
        <>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Récapitulatif de votre don</h2>
                <p className="text-slate-500">Vérifiez vos informations avant de finaliser</p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="text-xs text-slate-500 mb-1">Montant de votre don</div>
                        <div className="text-3xl font-bold text-green-600">
                            {amount.toLocaleString()} FCFA
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                            ≈ ${(amount / 655).toFixed(2)} USD • €{(amount / 655.957).toFixed(2)} EUR
                        </div>
                    </div>
                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                        Don unique
                    </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                        🏫
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 mb-0.5">Votre impact concret :</div>
                        <div className="font-bold text-slate-700">Rénovation d'une salle de classe</div>
                        <div className="text-xs text-slate-500">Grâce à votre don de {amount.toLocaleString()} FCFA</div>
                    </div>
                </div>
            </div>

            <div className="border border-slate-100 rounded-2xl p-6 mb-6">
                <h3 className="flex items-center gap-2 font-bold text-slate-700 mb-6">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Informations
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 mb-6">
                    <div>
                        <div className="text-xs text-slate-400 mb-1">Nom complet</div>
                        <div className="font-medium text-slate-700">Finafa Houngbédji</div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 mb-1">Email</div>
                        <div className="font-medium text-slate-700 break-all">houngbedjimaxfructueux@gmail.com</div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 mb-1">Pays</div>
                        <div className="font-medium text-slate-700">Bénin</div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 mb-1">Méthode de paiement</div>
                        <div className="font-medium text-slate-700 capitalize">
                            {paymentMethod === 'wire' ? 'Virement Bancaire' :
                                paymentMethod === 'card' ? 'Carte Bancaire' :
                                    paymentMethod === 'fedapay' ? 'Mobile Money (FedaPay)' :
                                        paymentMethod === 'feexpay' ? 'Mobile Money (FeexPay)' :
                                            paymentMethod === 'binance' ? 'Binance Pay' : 'Crypto'}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">Votre message</div>
                    <div className="text-sm text-slate-600 italic">"GOOD "</div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex gap-4 items-start">
                <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div>
                    <h4 className="font-bold text-blue-900 text-sm mb-1">Paiement 100% sécurisé</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Vos données sont protégées par <span className="font-bold">cryptage SSL</span>. Votre don sera tracé sur la <span className="font-bold">blockchain</span> pour une transparence totale.
                        Vous recevrez un <span className="font-bold">hash de transaction unique</span> comme preuve.
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-300" />
                    <div className="text-xs text-slate-600 leading-relaxed">
                        J'accepte les <a href="#" className="text-blue-600 hover:underline">conditions générales d'utilisation</a> et la <a href="#" className="text-blue-600 hover:underline">politique de confidentialité</a> de Blockchain BENIN Charity. Je comprends que mon don sera utilisé conformément aux objectifs de l'organisation.
                    </div>
                </label>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={prevStep}
                    className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    ← Retour
                </button>
                <button
                    onClick={() => setStep(5)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Finaliser le don
                </button>
            </div>
        </>
    );

    const renderSuccess = () => (
        <div className="text-center animate-fadeIn relative">
            {/* Confetti Animation */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                    {[...Array(50)].map((_, i) => {
                        const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        const randomX = Math.random() * 100;
                        const randomDelay = Math.random() * 0.5;
                        const randomDuration = 2 + Math.random() * 2;

                        return (
                            <div
                                key={i}
                                className="absolute animate-confetti"
                                style={{
                                    left: `${randomX}%`,
                                    top: '-10px',
                                    width: '10px',
                                    height: '10px',
                                    backgroundColor: randomColor,
                                    borderRadius: Math.random() > 0.5 ? '50%' : '0',
                                    animationDelay: `${randomDelay}s`,
                                    animationDuration: `${randomDuration}s`,
                                    transform: `rotate(${Math.random() * 360}deg)`,
                                }}
                            />
                        );
                    })}
                </div>
            )}

            <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-200 mx-auto">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-2">Merci pour votre générosité ! 🙏</h2>
            <p className="text-slate-600 text-lg mb-8">
                Votre don de <span className="font-bold text-green-600">{amount.toLocaleString()} FCFA</span> va changer des vies au Bénin.
            </p>

            {/* Hero Image */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8 shadow-lg group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                    src="/images/education.jpg"
                    alt="Enfants bénéficiaires"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Summary Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-lg mb-8 text-left">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm">Email de confirmation envoyé</h4>
                            <p className="text-xs text-slate-500">houngbedjimaxfructueux@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 text-sm mb-2">Reçu fiscal généré</h4>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Télécharger le reçu (PDF)
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 text-yellow-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-slate-800 text-sm mb-1">Transaction enregistrée sur la blockchain</h4>
                            <div className="bg-slate-50 border border-slate-100 rounded p-2 font-mono text-[10px] text-slate-500 break-all">
                                0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-4 text-yellow-600 text-xs font-bold uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        Votre impact concret :
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-4">
                        <div className="text-3xl">{impact.icon}</div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm">{impact.text}</div>
                            <div className="text-xs text-slate-500">Grâce à votre don de {amount.toLocaleString()} FCFA</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 justify-center mb-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Partager sur les réseaux
                </button>
                <button
                    onClick={() => window.location.href = '/'}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-3 px-6 rounded-xl transition-all text-sm"
                >
                    Retour à l'accueil
                </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Envie d'aller plus loin ?</h3>
                <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
                    Rejoignez notre communauté de bénévoles et participez directement à nos actions sur le terrain.
                </p>
                <button className="bg-[#FCD535] hover:bg-[#F0CB30] text-slate-900 font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-yellow-200">
                    Devenir bénévole
                </button>
            </div>
        </div>
    );

    return (
        <section className="py-12 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Stepper - Hide on Success Step */}
                {step < 5 && (
                    <div className="flex justify-between items-center mb-12 px-4 md:px-12">
                        <div className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-all ${step >= 1 ? 'bg-green-500 text-white shadow-green-200' : 'bg-white border-2 border-slate-200 text-slate-400'
                                }`}>
                                {step > 1 ? '✓' : '$'}
                            </div>
                            <span className={`text-xs font-medium ${step >= 1 ? 'text-green-600' : 'text-slate-500'}`}>Montant</span>
                        </div>
                        <div className={`h-0.5 flex-1 mx-4 transition-colors ${step >= 2 ? 'bg-green-500' : 'bg-slate-200'}`} />

                        <div className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-all ${step >= 2 ? 'bg-green-500 text-white shadow-green-200' : 'bg-white border-2 border-slate-200 text-slate-400'
                                }`}>
                                {step > 2 ? '✓' : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
                            </div>
                            <span className={`text-xs font-medium ${step >= 2 ? 'text-green-600' : 'text-slate-500'}`}>Paiement</span>
                        </div>
                        <div className={`h-0.5 flex-1 mx-4 transition-colors ${step >= 3 ? 'bg-green-500' : 'bg-slate-200'}`} />

                        <div className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-all ${step >= 3 ? 'bg-green-500 text-white shadow-green-200' : 'bg-white border-2 border-slate-200 text-slate-400'
                                }`}>
                                {step > 3 ? '✓' : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                            </div>
                            <span className={`text-xs font-medium ${step >= 3 ? 'text-green-600' : 'text-slate-500'}`}>Vos infos</span>
                        </div>
                        <div className={`h-0.5 flex-1 mx-4 transition-colors ${step >= 4 ? 'bg-green-500' : 'bg-slate-200'}`} />

                        <div className="flex flex-col items-center gap-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-all ${step >= 4 ? 'bg-green-500 text-white shadow-green-200' : 'bg-white border-2 border-slate-200 text-slate-400'
                                }`}>
                                {step > 4 ? '✓' : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className={`text-xs font-medium ${step >= 4 ? 'text-green-600' : 'text-slate-500'}`}>Confirmation</span>
                        </div>
                    </div>
                )}

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                    {step === 5 && renderSuccess()}
                </div>
            </div>
        </section>
    );

}
