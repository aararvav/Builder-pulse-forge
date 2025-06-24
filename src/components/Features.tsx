import {
  Users,
  MessageCircle,
  FileText,
  BarChart3,
  Award,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "AI Panel Simulation",
    description:
      "Experience realistic interviews with AI that simulates tough, friendly, or distracted interviewers to prepare you for any scenario.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Coaching",
    description:
      "Get live feedback during your interview with tips like 'Pause more', 'Smile', or 'Maintain eye contact' to improve in real-time.",
  },
  {
    icon: FileText,
    title: "Resume-to-Questions",
    description:
      "Our AI generates custom interview questions based on your specific resume, skills, and experience for targeted practice.",
  },
  {
    icon: BarChart3,
    title: "Detailed Feedback",
    description:
      "Receive comprehensive analysis of your tone, facial expressions, pace, and content quality after each interview session.",
  },
  {
    icon: Award,
    title: "Blockchain Badges",
    description:
      "Earn verified skill NFTs and blockchain certificates when you demonstrate proficiency in specific competencies.",
  },
  {
    icon: Zap,
    title: "Performance Analytics",
    description:
      "Track your progress over time with detailed analytics on your interview performance and improvement areas.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cream-100 to-cream-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-roboto-condensed text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 font-roboto-condensed max-w-2xl mx-auto">
            Discover the powerful tools that make PitchPerfect your ultimate
            interview preparation companion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-cream-300"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold font-roboto-condensed text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 font-roboto-condensed leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
