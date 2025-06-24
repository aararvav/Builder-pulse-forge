import { FileText, Users, Award } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Upload Resume",
    description:
      "Upload your resume and let our AI analyze your skills, experience, and career goals to create personalized interview scenarios.",
  },
  {
    icon: Users,
    title: "AI Panel Interview",
    description:
      "Experience realistic mock interviews with our AI panel that simulates different interviewer personalities - tough, friendly, or distracted.",
  },
  {
    icon: Award,
    title: "Get Instant Feedback + Skill Badge",
    description:
      "Receive detailed feedback on your performance and earn blockchain-verified skill badges when you excel in specific areas.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-roboto-condensed text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-3xl font-bold font-roboto-condensed text-gray-400">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold font-roboto-condensed text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 font-roboto-condensed leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
