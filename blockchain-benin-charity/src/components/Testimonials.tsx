'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    location: string;
    content: string;
    avatar: string;
    rating: number;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    if (!testimonials.length) return null;

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <AnimateOnScroll animationName="animate-fade-in-down">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200 mb-4">
                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-purple-800">Témoignages</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Ce que les gens disent de nous
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Découvrez les retours de nos bénéficiaires, donateurs et partenaires
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Testimonials carousel */}
                <AnimateOnScroll animationName="animate-zoom-in" delay={200}>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Main testimonial card */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                            {/* Quote decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="text-purple-600">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">
                                    "{currentTestimonial.content}"
                                </p>

                                {/* Author info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {currentTestimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{currentTestimonial.name}</h4>
                                        <p className="text-sm text-slate-600">{currentTestimonial.role}</p>
                                        <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {currentTestimonial.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white hover:bg-purple-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Témoignage précédent"
                            >
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Dots indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-purple-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                                            }`}
                                        aria-label={`Aller au témoignage ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white hover:bg-purple-50 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                                aria-label="Témoignage suivant"
                            >
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={testimonial.id}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${index === currentIndex
                                        ? 'border-purple-600 bg-purple-50 shadow-lg'
                                        : 'border-slate-200 bg-white hover:border-purple-300 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${index === currentIndex ? 'bg-purple-600' : 'bg-slate-400'
                                            }`}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="text-left flex-1 min-w-0">
                                            <p className={`text-sm font-semibold truncate ${index === currentIndex ? 'text-purple-900' : 'text-slate-900'
                                                }`}>
                                                {testimonial.name}
                                            </p>
                                            <p className="text-xs text-slate-500 truncate">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
