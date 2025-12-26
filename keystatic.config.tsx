import { config, fields, collection } from '@keystatic/core';

export default config({
    storage:
        process.env.NODE_ENV === 'development'
            ? {
                kind: 'local',
            }
            : {
                kind: 'github',
                repo:
                    (process.env.NEXT_PUBLIC_GITHUB_REPO as `${string}/${string}`) ||
                    'bened45/blockchainbenincharity-website',
            },


    ui: {
        brand: {
            name: 'Blockchain Bénin Charity',
            mark: () => (
                <img src="/logo.png" height={24} alt="Blockchain Bénin Charity Logo" />
            ),
        },
        navigation: {
            'Gestion du Contenu': ['posts', 'projects', 'gallery', 'team', 'testimonials'],
            'Gestion des Dons': ['donations'],
        },
    },

    collections: {
        posts: collection({
            label: 'Articles',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                coverImage: fields.image({
                    label: 'Image de couverture',
                    directory: 'public/images/posts',
                    publicPath: '/images/posts/',
                }),
                publishedDate: fields.date({ label: 'Date de publication' }),
                author: fields.text({ label: 'Auteur' }),
                excerpt: fields.text({ label: 'Extrait', multiline: true }),
                content: fields.document({
                    label: 'Contenu',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/posts/content',
                        publicPath: '/images/posts/content/',
                    },
                }),
            },
        }),
        projects: collection({
            label: 'Projets',
            slugField: 'title',
            path: 'src/content/projects/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre du projet' } }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Éducation', value: 'Éducation' },
                        { label: 'Santé', value: 'Santé' },
                        { label: 'Inclusion numérique', value: 'Inclusion numérique' },
                        { label: 'Environnement', value: 'Environnement' },
                        { label: 'Aide alimentaire', value: 'Aide alimentaire' },
                    ],
                    defaultValue: 'Éducation',
                }),
                status: fields.select({
                    label: 'Statut',
                    options: [
                        { label: 'Urgent', value: 'Urgent' },
                        { label: 'Actif', value: 'Actif' },
                        { label: 'En cours', value: 'En cours' },
                        { label: 'Terminé', value: 'Terminé' },
                    ],
                    defaultValue: 'Actif',
                }),
                description: fields.text({ label: 'Description courte', multiline: true }),
                location: fields.text({ label: 'Localisation' }),
                image: fields.image({
                    label: 'Image du projet',
                    directory: 'public/images/projects',
                    publicPath: '/images/projects/',
                }),
                raised: fields.number({ label: 'Montant collecté (en Millions)', validation: { min: 0 } }),
                goal: fields.number({ label: 'Objectif (en Millions)', validation: { min: 0 } }),
                currency: fields.text({ label: 'Devise', defaultValue: 'M FCFA' }),
                donors: fields.integer({ label: 'Nombre de donateurs', validation: { min: 0 } }),
                beneficiaries: fields.integer({ label: 'Nombre de bénéficiaires', validation: { min: 0 } }),
                daysLeft: fields.integer({ label: 'Jours restants', validation: { min: 0 } }),
                problem: fields.text({ label: 'Le problème', multiline: true }),
                solution: fields.text({ label: 'La solution', multiline: true }),
                duration: fields.text({ label: 'Durée du projet' }),
                timeline: fields.array(
                    fields.object({
                        date: fields.text({ label: 'Date' }),
                        title: fields.text({ label: 'Titre' }),
                    }),
                    { label: 'Timeline du projet' }
                ),
                budget: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Poste de dépense' }),
                        amount: fields.text({ label: 'Montant (ex: 5.4M FCFA)' }),
                        percentage: fields.integer({ label: 'Pourcentage', validation: { min: 0, max: 100 } }),
                    }),
                    { label: 'Budget prévisionnel' }
                ),
            },
        }),
        team: collection({
            label: 'Équipe',
            slugField: 'name',
            path: 'src/content/team/*',
            schema: {
                name: fields.slug({ name: { label: 'Nom complet' } }),
                role: fields.text({ label: 'Rôle / Fonction' }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Direction', value: 'leadership' },
                        { label: 'Coordinateurs', value: 'coordinators' },
                        { label: 'Bénévoles', value: 'volunteers' },
                    ],
                    defaultValue: 'leadership',
                }),
                image: fields.image({
                    label: 'Photo',
                    directory: 'public/images/team',
                    publicPath: '/images/team/',
                }),
                bio: fields.text({ label: 'Biographie courte', multiline: true }),
                linkedin: fields.url({ label: 'LinkedIn (optionnel)' }),
                twitter: fields.url({ label: 'Twitter (optionnel)' }),
            },
        }),
        testimonials: collection({
            label: 'Témoignages',
            slugField: 'name',
            path: 'src/content/testimonials/*',
            schema: {
                name: fields.slug({ name: { label: 'Nom' } }),
                role: fields.text({ label: 'Rôle (ex: Bénéficiaire, Donateur)' }),
                location: fields.text({ label: 'Localisation' }),
                content: fields.text({ label: 'Message', multiline: true }),
                avatar: fields.image({
                    label: 'Avatar',
                    directory: 'public/images/testimonials',
                    publicPath: '/images/testimonials/',
                }),
                rating: fields.integer({
                    label: 'Note (1-5)',
                    validation: { min: 1, max: 5 },
                    defaultValue: 5,
                }),
            },
        }),
        donations: collection({
            label: 'Dons Reçus',
            slugField: 'donorName',
            path: 'src/content/donations/*',
            schema: {
                donorName: fields.slug({ name: { label: 'Nom du donateur' } }),
                email: fields.text({ label: 'Email' }),
                amount: fields.number({ label: 'Montant (FCFA)', validation: { min: 0 } }),
                paymentMethod: fields.select({
                    label: 'Méthode de paiement',
                    options: [
                        { label: 'Bitcoin (BTC)', value: 'BTC' },
                        { label: 'Ethereum (ETH)', value: 'ETH' },
                        { label: 'USDT', value: 'USDT' },
                        { label: 'FedaPay', value: 'fedapay' },
                        { label: 'FeexPay', value: 'feexpay' },
                        { label: 'Binance Pay', value: 'binance' },
                        { label: 'Carte bancaire', value: 'card' },
                        { label: 'Virement', value: 'wire' },
                    ],
                    defaultValue: 'BTC',
                }),
                transactionHash: fields.text({ label: 'Hash de transaction (Blockchain)', multiline: false }),
                status: fields.select({
                    label: 'Statut',
                    options: [
                        { label: 'En attente', value: 'pending' },
                        { label: 'Confirmé', value: 'confirmed' },
                        { label: 'Échoué', value: 'failed' },
                    ],
                    defaultValue: 'pending',
                }),
                donationDate: fields.date({ label: 'Date du don' }),
                message: fields.text({ label: 'Message du donateur', multiline: true }),
                country: fields.text({ label: 'Pays' }),
                isAnonymous: fields.checkbox({ label: 'Don anonyme' }),
                receiptSent: fields.checkbox({ label: 'Reçu envoyé' }),
            },
        }),
        gallery: collection({
            label: 'Galerie Photos',
            slugField: 'title',
            path: 'src/content/gallery/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre de l\'album' } }),
                coverImage: fields.image({
                    label: 'Image de couverture',
                    directory: 'public/images/gallery',
                    publicPath: '/images/gallery/',
                }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Événement', value: 'Événement' },
                        { label: 'Aide d\'urgence', value: 'Aide d\'urgence' },
                        { label: 'Santé', value: 'Santé' },
                        { label: 'Éducation', value: 'Éducation' },
                        { label: 'Formation', value: 'Formation' },
                    ],
                    defaultValue: 'Événement',
                }),
                description: fields.text({ label: 'Description', multiline: true }),
                date: fields.date({ label: 'Date de l\'événement' }),
                location: fields.text({ label: 'Lieu' }),
                beneficiaries: fields.integer({ label: 'Nombre de bénéficiaires', validation: { min: 0 }, defaultValue: 0 }),
                folderPath: fields.text({
                    label: 'Nom du dossier (Vrac)',
                    description: 'Nom du dossier dans public/images/gallery/content/ pour charger toutes les photos d\'un coup.'
                }),
                images: fields.array(
                    fields.object({
                        image: fields.image({
                            label: 'Photo',
                            directory: 'public/images/gallery/photos',
                            publicPath: '/images/gallery/photos/',
                        }),
                        caption: fields.text({ label: 'Légende' }),
                    }),
                    {
                        label: 'Photos spécifiques (avec légendes)',
                        itemLabel: (props) => props.fields.caption.value || 'Photo',
                    }
                ),
                videos: fields.array(
                    fields.object({
                        url: fields.url({ label: 'URL de la vidéo (YouTube/Vimeo)' }),
                        title: fields.text({ label: 'Titre de la vidéo' }),
                    }),
                    {
                        label: 'Vidéos de l\'album',
                        itemLabel: (props) => props.fields.title.value || 'Vidéo',
                    }
                ),
                photographer: fields.text({ label: 'Photographe (optionnel)' }),
            },
        }),
    },
});
