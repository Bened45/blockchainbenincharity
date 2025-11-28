import Header from "@/components/Header";
import ProjectDetailHero from "@/components/ProjectDetailHero";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import ProjectJournal from "@/components/ProjectJournal";
import Footer from "@/components/Footer";

import { reader } from "@/utils/reader";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
    const project = await reader.collections.projects.read(params.id);

    if (!project) {
        notFound();
    }

    const projectData = {
        title: project.title,
        category: project.category,
        status: project.status,
        location: project.location || 'Bénin',
        daysRemaining: project.daysLeft || 0,
        contributors: project.donors || 0,
        image: project.image || '/images/projects/default.jpg',
    };

    const colors = ["bg-blue-600", "bg-green-500", "bg-yellow-400", "bg-red-500", "bg-purple-500"];

    const contentData = {
        raised: project.raised || 0,
        goal: project.goal || 0,
        donors: project.donors || 0,
        daysRemaining: project.daysLeft || 0,
        problem: project.problem || "Description du problème à venir.",
        solution: project.solution || "Description de la solution à venir.",
        beneficiaries: project.beneficiaries ? `${project.beneficiaries} bénéficiaires` : "À définir",
        duration: project.duration || "À définir",
        timeline: project.timeline?.map(t => ({
            date: t.date || '',
            title: t.title || ''
        })) || [],
        budget: project.budget?.map((b, index) => ({
            label: b.label || '',
            amount: b.amount || '',
            percentage: b.percentage || 0,
            color: colors[index % colors.length]
        })) || [],
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <ProjectDetailHero {...projectData} />
            <ProjectDetailContent {...contentData} />
            <ProjectJournal />
            <Footer />
        </div>
    );
}
