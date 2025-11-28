import Header from "@/components/Header";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

import { reader } from "@/utils/reader";
import { Project } from "@/components/ProjectsGrid";

export default async function ProjectsPage() {
    const cmsProjects = await reader.collections.projects.all();

    const projects: Project[] = cmsProjects.map(p => {
        const raised = p.entry.raised || 0;
        const goal = p.entry.goal || 1; // Avoid division by zero
        const progress = Math.min(Math.round((raised / goal) * 100), 100);

        return {
            id: p.slug,
            title: p.entry.title,
            description: p.entry.description,
            location: p.entry.location || 'Bénin',
            category: p.entry.category,
            status: p.entry.status,
            raised: raised,
            goal: p.entry.goal || 0,
            donors: p.entry.donors || 0,
            beneficiaries: p.entry.beneficiaries || undefined,
            progress: progress,
            image: p.entry.image || '/images/projects/default.jpg',
        };
    });

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <ProjectsHero />
            <ProjectsGrid projects={projects} />
            <Footer />
        </div>
    );
}
