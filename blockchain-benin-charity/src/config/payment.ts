// Configuration des systèmes de paiement
export const PAYMENT_CONFIG = {
    // Adresses crypto (DEMO - À remplacer par vos vraies adresses)
    crypto: {
        bitcoin: {
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
            network: 'mainnet', // ou 'testnet'
        },
        ethereum: {
            address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
            network: 'mainnet', // ou 'sepolia' pour testnet
        },
        usdt: {
            address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', // Même adresse ETH pour USDT (ERC-20)
            network: 'mainnet',
            contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT sur Ethereum
        },
    },

    // Taux de change (mis à jour manuellement ou via API)
    exchangeRates: {
        FCFA_TO_USD: 0.0016,
        FCFA_TO_EUR: 0.0015,
        FCFA_TO_BTC: 0.000000012,
        FCFA_TO_ETH: 0.00000045,
    },

    // FedaPay (DEMO - À remplacer par vos vraies clés)
    fedapay: {
        publicKey: process.env.NEXT_PUBLIC_FEDAPAY_PUBLIC_KEY || 'pk_sandbox_demo',
        secretKey: process.env.FEDAPAY_SECRET_KEY || 'sk_sandbox_demo',
        mode: process.env.FEDAPAY_MODE || 'sandbox', // 'sandbox' ou 'live'
        callbackUrl: process.env.NEXT_PUBLIC_APP_URL + '/api/payment/fedapay/callback',
    },

    // FeexPay (DEMO - À remplacer par vos vraies clés)
    feexpay: {
        apiKey: process.env.FEEXPAY_API_KEY || 'demo_api_key',
        merchantId: process.env.FEEXPAY_MERCHANT_ID || 'demo_merchant',
        mode: process.env.FEEXPAY_MODE || 'test', // 'test' ou 'production'
        callbackUrl: process.env.NEXT_PUBLIC_APP_URL + '/api/payment/feexpay/callback',
    },

    // Binance Pay
    binancePay: {
        merchantId: process.env.BINANCE_PAY_MERCHANT_ID || '',
        qrCodeUrl: 'https://pay.binance.com/qr/', // URL de base pour QR codes
    },

    // Informations bancaires
    bankTransfer: {
        bankName: 'Orabank Bénin',
        accountHolder: 'Blockchain BENIN Charity',
        accountNumber: 'BJ066 01234 56789 01234567890 12',
        swiftCode: 'ORABBJBJ',
        iban: 'BJ066 01234 56789 01234567890 12',
    },
};

// Fonction utilitaire pour convertir FCFA en crypto
export function convertFCFAToCrypto(amountFCFA: number, crypto: 'BTC' | 'ETH' | 'USDT'): number {
    const rates = PAYMENT_CONFIG.exchangeRates;

    switch (crypto) {
        case 'BTC':
            return amountFCFA * rates.FCFA_TO_BTC;
        case 'ETH':
            return amountFCFA * rates.FCFA_TO_ETH;
        case 'USDT':
            // USDT ≈ USD
            return amountFCFA * rates.FCFA_TO_USD;
        default:
            return 0;
    }
}

// Génération d'URI de paiement Bitcoin
export function generateBitcoinURI(address: string, amount?: number, label?: string): string {
    let uri = `bitcoin:${address}`;
    const params: string[] = [];

    if (amount) params.push(`amount=${amount}`);
    if (label) params.push(`label=${encodeURIComponent(label)}`);

    if (params.length > 0) {
        uri += '?' + params.join('&');
    }

    return uri;
}

// Génération d'URI de paiement Ethereum
export function generateEthereumURI(address: string, amount?: number): string {
    let uri = `ethereum:${address}`;

    if (amount) {
        // Convertir en Wei (1 ETH = 10^18 Wei)
        const amountWei = (amount * 1e18).toString();
        uri += `?value=${amountWei}`;
    }

    return uri;
}
