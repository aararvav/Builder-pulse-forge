import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-cream-100 to-cream-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-roboto-condensed text-gray-900 mb-6 leading-tight">
            Your Personal Interview &
            <span className="block text-gray-700">Pitch Assistant</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-roboto-condensed mb-8 max-w-3xl mx-auto leading-relaxed">
            An AI-powered platform that offers mock interviews and pitches with
            real-time coaching, panel simulation, resume analysis, and skill
            certification
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-roboto-condensed text-lg px-8 py-4 bg-gray-800 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Start Mock Interview
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-roboto-condensed text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
