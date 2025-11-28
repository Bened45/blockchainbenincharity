'use client';

import Image from 'next/image';

export interface TeamMember {
    name: string;
    role: string;
    category: string;
    image: string;
    bio?: string;
    linkedin?: string;
    twitter?: string;
}

interface AboutTeamProps {
    members: TeamMember[];
}

export default function AboutTeam({ members }: AboutTeamProps) {
    const leadership = members.filter(m => m.category === 'leadership');
    const coordinators = members.filter(m => m.category === 'coordinators');
    const volunteers = members.filter(m => m.category === 'volunteers');

    const TeamMemberCard = ({ member }: { member: TeamMember }) => (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-64 bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20" />
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-300">
                        <svg className="w-24 h-24 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{member.role}</p>
                <div className="flex gap-3">
                    {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-100 hover:bg-blue-500 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a>
                    )}
                    {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-20 lg:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 mb-6">
                        <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="text-sm font-semibold text-slate-700">LES PERSONNES DERRIÈRE BBC</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Notre Équipe</h2>
                </div>

                {/* Leadership Team */}
                {leadership.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-1 w-12 bg-yellow-400 rounded-full" />
                            <h3 className="text-2xl font-bold text-slate-900">Équipe de Direction</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {leadership.map((member, index) => (
                                <TeamMemberCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Project Coordinators */}
                {coordinators.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-1 w-12 bg-blue-500 rounded-full" />
                            <h3 className="text-2xl font-bold text-slate-900">Coordinateurs de Projets</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coordinators.map((member, index) => (
                                <TeamMemberCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Key Volunteers */}
                {volunteers.length > 0 && (
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-1 w-12 bg-blue-500 rounded-full" />
                            <h3 className="text-2xl font-bold text-slate-900">Bénévoles Clés</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {volunteers.map((member, index) => (
                                <TeamMemberCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
