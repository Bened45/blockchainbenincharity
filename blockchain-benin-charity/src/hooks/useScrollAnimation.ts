import { useEffect, useState, useRef } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Hook personnalisé pour déclencher des animations au scroll
 * Utilise l'Intersection Observer API pour détecter quand un élément entre dans le viewport
 * 
 * @param options - Configuration de l'observer
 * @returns [ref, isVisible] - Référence à attacher à l'élément et état de visibilité
 * 
 * @example
 * const [ref, isVisible] = useScrollAnimation({ threshold: 0.2, triggerOnce: true });
 * <div ref={ref} className={isVisible ? 'animate-fadeInUp' : 'opacity-0'}>...</div>
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true,
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Si déjà déclenché et triggerOnce est activé, ne rien faire
        if (hasTriggered && triggerOnce) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;

                setIsVisible(isIntersecting);

                if (isIntersecting && triggerOnce) {
                    setHasTriggered(true);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce, hasTriggered]);

    return [ref, isVisible] as const;
}

/**
 * Hook pour animer plusieurs éléments avec un effet de décalage (stagger)
 * 
 * @param count - Nombre d'éléments à animer
 * @param options - Configuration de l'observer
 * @returns [ref, visibleItems] - Référence au conteneur et tableau des indices visibles
 * 
 * @example
 * const [ref, visibleItems] = useStaggerAnimation(5, { threshold: 0.2 });
 * <div ref={ref}>
 *   {items.map((item, i) => (
 *     <div key={i} className={visibleItems.includes(i) ? 'animate-fadeInUp' : 'opacity-0'}>
 *       {item}
 *     </div>
 *   ))}
 * </div>
 */
export function useStaggerAnimation(
    count: number,
    options: UseScrollAnimationOptions = {}
) {
    const [ref, isVisible] = useScrollAnimation(options);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    useEffect(() => {
        if (!isVisible) return;

        const timers: NodeJS.Timeout[] = [];

        for (let i = 0; i < count; i++) {
            const timer = setTimeout(() => {
                setVisibleItems((prev) => [...prev, i]);
            }, i * 100); // Délai de 100ms entre chaque élément

            timers.push(timer);
        }

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [isVisible, count]);

    return [ref, visibleItems] as const;
}
