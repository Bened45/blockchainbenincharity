import Header from "@/components/Header";
import Hero, { HeroStat } from "@/components/Hero";
import Mission from "@/components/Mission";
import Projects, { Project } from "@/components/Projects";
import Impact from "@/components/Impact";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import AboutCTA from "@/components/AboutCTA";
// import DonationCTA from "@/components/DonationCTA"; // Commented out as it might not exist or be named differently
// import FAQ from "@/components/FAQ"; // Commented out as it might not exist or be named differently

import { reader } from "@/utils/reader";

import { Testimonial } from "@/components/Testimonials";
import { Stat } from "@/components/Impact";

export default async function Home() {
  const cmsProjects = await reader.collections.projects.all();
  const cmsTestimonials = await reader.collections.testimonials.all();
  const cmsDonations = await reader.collections.donations.all();
  const cmsTeam = await reader.collections.team.all();

  const projects: Project[] = cmsProjects.map(p => ({
    id: p.slug,
    category: p.entry.category,
    categoryIcon: '',
    categoryColor: '',
    title: p.entry.title,
    description: p.entry.description,
    image: p.entry.image || '/project-default.jpg',
    raised: p.entry.raised || 0,
    goal: p.entry.goal || 0,
    currency: p.entry.currency || 'M FCFA',
    donors: p.entry.donors || 0,
    daysLeft: p.entry.daysLeft || 0,
  }));

  const testimonials: Testimonial[] = cmsTestimonials.map(t => ({
    id: t.slug,
    name: t.entry.name,
    role: t.entry.role,
    location: t.entry.location,
    content: t.entry.content,
    avatar: t.entry.avatar || '/images/testimonials/default.jpg',
    rating: t.entry.rating || 5,
  }));

  // Calculate Stats
  const totalRaised = cmsDonations.reduce((acc, d) => acc + (d.entry.amount || 0), 0);
  const totalBeneficiaries = cmsProjects.reduce((acc, p) => acc + (p.entry.beneficiaries || 0), 0);
  const completedProjectsCount = cmsProjects.filter(p => p.entry.status === 'Terminé').length;
  const activeVolunteersCount = cmsTeam.filter(t => t.entry.category === 'volunteers').length;

  const stats: Stat[] = [
    {
      id: 1,
      icon: '👥',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      value: totalBeneficiaries,
      label: 'Personnes aidées',
      accentColor: 'bg-yellow-400',
    },
    {
      id: 2,
      icon: '💰',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      value: totalRaised / 1000000, // Convert to Millions
      suffix: 'M',
      decimals: 1,
      label: 'Montant total collecté',
      accentColor: 'bg-green-400',
    },
    {
      id: 3,
      icon: '🎯',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      value: completedProjectsCount,
      label: 'Projets réalisés',
      accentColor: 'bg-blue-400',
    },
    {
      id: 4,
      icon: '🤝',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      value: activeVolunteersCount,
      label: 'Bénévoles actifs',
      accentColor: 'bg-orange-400',
    },
  ];

  const heroQuickStats: HeroStat[] = [
    { label: "Années d'expérience", value: 5, suffix: "+" },
    { label: "Projets complétés", value: completedProjectsCount },
    { label: "Partenaires mondiaux", value: 12 },
  ];

  const heroCardStats: HeroStat[] = [
    { label: "Total des dons", value: totalRaised / 1000000, decimals: 1, suffix: "M", unit: "FCFA" },
    { label: "Bénéficiaires", value: totalBeneficiaries, suffix: "+" },
    { label: "Projets actifs", value: cmsProjects.filter(p => p.entry.status === 'Actif' || p.entry.status === 'Urgent').length },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero quickStats={heroQuickStats} cardStats={heroCardStats} />
        <Mission />
        <Impact stats={stats} />
        <Projects projects={projects} />
        <AboutCTA />
        <Partners />
        <Events />
        <Testimonials testimonials={testimonials} />
        {/* <DonationCTA /> */}
        {/* <FAQ /> */}
      </main>
      <Footer />
    </div>
  );
}

