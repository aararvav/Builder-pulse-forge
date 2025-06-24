import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100 to-cream-200 font-roboto-condensed">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        {/* Section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream-400 to-transparent opacity-30"></div>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Section separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-cream-400 to-transparent opacity-30"></div>

        <section id="features">
          <Features />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
