'use client';

import { useState } from 'react';
import { PAYMENT_CONFIG } from '@/config/payment';

interface FedaPayButtonProps {
    amount: number; // Montant en FCFA
    email: string;
    firstName?: string;
    lastName?: string;
    onSuccess?: (transactionId: string) => void;
    onError?: (error: string) => void;
}

export default function FedaPayButton({
    amount,
    email,
    firstName = '',
    lastName = '',
    onSuccess,
    onError,
}: FedaPayButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);

        try {
            // Appel à l'API pour créer une transaction FedaPay
            const response = await fetch('/api/payment/fedapay', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount,
                    email,
                    firstName,
                    lastName,
                }),
            });

            const data = await response.json();

            if (data.success && data.checkoutUrl) {
                // Redirection vers la page de paiement FedaPay
                window.location.href = data.checkoutUrl;
            } else {
                throw new Error(data.error || 'Erreur lors de la création du paiement');
            }
        } catch (error) {
            console.error('FedaPay Error:', error);
            if (onError) {
                onError(error instanceof Error ? error.message : 'Erreur inconnue');
            }
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Chargement...
                </>
            ) : (
                <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Payer avec FedaPay
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </>
            )}
        </button>
    );
}
