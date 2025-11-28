'use client';

import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function CountUp({
    end,
    duration = 2000,
    decimals = 0,
    prefix = '',
    suffix = '',
    className = '',
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutExpo)
            const easeOutExpo = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const currentCount = easeOutExpo(percentage) * end;
            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    const formattedCount = count.toFixed(decimals);
    // Add thousand separators if needed (simple implementation)
    const displayCount = Number(formattedCount).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    return (
        <span ref={countRef} className={className}>
            {prefix}{displayCount}{suffix}
        </span>
    );
}
