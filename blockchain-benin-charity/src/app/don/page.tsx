import Header from "@/components/Header";
import DonationHero from "@/components/DonationHero";
import DonationImpact from "@/components/DonationImpact";
import DonationForm from "@/components/DonationForm";
import DonationSecurity from "@/components/DonationSecurity";
import DonationFAQ from "@/components/DonationFAQ";
import Footer from "@/components/Footer";

export default function DonationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <DonationHero />
            <DonationImpact />
            <DonationForm />
            <DonationSecurity />
            <DonationFAQ />
            <Footer />
        </div>
    );
}
