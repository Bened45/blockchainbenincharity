'use client';

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animationName?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animationName = 'animate-fade-in-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
}: AnimateOnScrollProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animationName : 'opacity-0'}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
