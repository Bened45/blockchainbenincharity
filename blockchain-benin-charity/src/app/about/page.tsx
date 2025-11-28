import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutServices from "@/components/AboutServices";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

import { reader } from "@/utils/reader";
import { TeamMember } from "@/components/AboutTeam";

export default async function AboutPage() {
    const cmsTeam = await reader.collections.team.all();

    const teamMembers: TeamMember[] = cmsTeam.map(m => ({
        name: m.entry.name,
        role: m.entry.role,
        category: m.entry.category,
        image: m.entry.image || '/images/team/default.jpg',
        bio: m.entry.bio,
        linkedin: m.entry.linkedin || undefined,
        twitter: m.entry.twitter || undefined,
    }));

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <AboutHero />
            <AboutStory />
            <AboutServices />
            <AboutMissionVision />
            <AboutValues />
            <AboutTeam members={teamMembers} />
            <AboutCTA />
            <Footer />
        </div>
    );
}
