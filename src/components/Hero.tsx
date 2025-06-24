import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-cream-100 to-cream-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-roboto-condensed text-gray-700 mb-4 leading-tight">
            PitchPerfect
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-roboto-condensed text-black mb-8 leading-tight">
            Your Personal Interview & Pitch Assistant
          </h2>

          <p className="text-lg md:text-xl text-gray-600 font-roboto-condensed mb-8 max-w-3xl mx-auto leading-relaxed">
            An AI-powered platform that offers mock interviews and pitches with
            real-time coaching, panel simulation, resume analysis, and skill
            certification
          </p>

          <div className="flex justify-center">
            <Link to="/interview">
              <Button
                size="lg"
                className="font-roboto-condensed text-lg px-8 py-4 bg-gray-800 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Start Mock Interview
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
