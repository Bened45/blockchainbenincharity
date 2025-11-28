export interface Event {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    categoryColor: string;
    date: string;
    location: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: 'Noël en Or 2024',
        description: 'Distribution de cadeaux et matériel festif pour 500 enfants',
        image: '/event-noel.jpg',
        category: 'Réalisé',
        categoryColor: 'bg-green-500',
        date: 'Décembre 2024',
        location: 'Cotonou, Bénin',
    },
    {
        id: 2,
        title: 'Urgence Santé',
        description: 'Consultation médicale gratuite et distribution de médicaments',
        image: '/event-health.jpg',
        category: 'Réalisé',
        categoryColor: 'bg-green-500',
        date: 'Janvier 2025',
        location: 'Porto-Novo',
    },
    {
        id: 3,
        title: 'Inclusion Numérique',
        description: 'Formation informatique pour 100 jeunes défavorisés',
        image: '/event-digital.jpg',
        category: 'Formation',
        categoryColor: 'bg-yellow-500',
        date: 'Mars 2025',
        location: 'Parakou',
    },
];
