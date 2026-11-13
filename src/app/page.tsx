import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import QuickLinks from "@/components/home/QuickLinks";
import Education from "@/components/home/Education";
import News from "@/components/home/News";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <Education />
        <News />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
