import { Button } from "@/components/ui/button";
import {
  Download,
  RotateCcw,
  Star,
  Clock,
  Volume2,
  Eye,
  Award,
  Smile,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

interface AnalyticsDashboardProps {
  onStartNewSession: () => void;
}

const AnalyticsDashboard = ({ onStartNewSession }: AnalyticsDashboardProps) => {
  // Mock data
  const metrics = {
    toneConsistency: 85,
    wordsPerMinute: 145,
    eyeContact: 4,
    fillerWords: 12,
    overallScore: 78,
  };

  const ProgressBar = ({
    value,
    max = 100,
    color = "blue",
  }: {
    value: number;
    max?: number;
    color?: string;
  }) => (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className={`h-3 rounded-full transition-all duration-1000 bg-${color}-500`}
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100 to-cream-200 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-roboto-condensed text-gray-900 mb-4">
            Your Interview Summary
          </h1>
          <p className="text-lg text-gray-600 font-roboto-condensed">
            Here's how you performed in your mock interview
          </p>
        </div>

        {/* Overall Score Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-cream-300">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
              <span className="text-3xl font-bold text-white font-roboto-condensed">
                {metrics.overallScore}
              </span>
            </div>
            <h2 className="text-2xl font-bold font-roboto-condensed text-gray-900 mb-2">
              Overall Performance
            </h2>
            <p className="text-gray-600 font-roboto-condensed">
              Great job! You're showing strong interview skills.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Tone Consistency */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-cream-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Volume2 className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-bold font-roboto-condensed text-gray-900">
                Tone Consistency
              </h3>
            </div>
            <div className="mb-3">
              <ProgressBar value={metrics.toneConsistency} color="blue" />
            </div>
            <p className="text-2xl font-bold font-roboto-condensed text-blue-600">
              {metrics.toneConsistency}%
            </p>
            <p className="text-sm text-gray-500 font-roboto-condensed mt-1">
              Excellent vocal stability
            </p>
          </div>

          {/* Speaking Speed */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-cream-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-lg font-bold font-roboto-condensed text-gray-900">
                Speaking Speed
              </h3>
            </div>
            <div className="mb-3">
              <ProgressBar
                value={metrics.wordsPerMinute}
                max={200}
                color="green"
              />
            </div>
            <p className="text-2xl font-bold font-roboto-condensed text-green-600">
              {metrics.wordsPerMinute} WPM
            </p>
            <p className="text-sm text-gray-500 font-roboto-condensed mt-1">
              Perfect pace
            </p>
          </div>

          {/* Eye Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-cream-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-lg font-bold font-roboto-condensed text-gray-900">
                Eye Contact
              </h3>
            </div>
            <div className="mb-3">
              <StarRating rating={metrics.eyeContact} />
            </div>
            <p className="text-2xl font-bold font-roboto-condensed text-purple-600">
              {metrics.eyeContact}/5 Stars
            </p>
            <p className="text-sm text-gray-500 font-roboto-condensed mt-1">
              Strong connection
            </p>
          </div>

          {/* Filler Words */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-cream-300 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Smile className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-lg font-bold font-roboto-condensed text-gray-900">
                Filler Words
              </h3>
            </div>
            <div className="mb-3">
              <ProgressBar
                value={100 - metrics.fillerWords * 2}
                color="orange"
              />
            </div>
            <p className="text-2xl font-bold font-roboto-condensed text-orange-600">
              {metrics.fillerWords} Count
            </p>
            <p className="text-sm text-gray-500 font-roboto-condensed mt-1">
              Room for improvement
            </p>
          </div>
        </div>

        {/* Fun Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-cream-300">
          <h3 className="text-2xl font-bold font-roboto-condensed text-gray-900 mb-4 text-center">
            Interview Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <Smile className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold font-roboto-condensed text-gray-900 mb-2">
                Humor Level
              </h4>
              <p className="text-gray-600 font-roboto-condensed">
                Were your jokes funny? Probably not. 😄
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <Award className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h4 className="font-bold font-roboto-condensed text-gray-900 mb-2">
                Confidence Boost
              </h4>
              <p className="text-gray-600 font-roboto-condensed">
                You maintained great composure throughout!
              </p>
            </div>
          </div>
        </div>

        {/* Blockchain Badge */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-roboto-condensed mb-2">
              Skill Certified!
            </h3>
            <p className="font-roboto-condensed mb-4">
              🏆 AI Communication v1 Badge Earned
            </p>
            <div className="inline-block bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm border border-white/30">
              <p className="text-sm font-roboto-condensed">
                Blockchain verified skill NFT ready to mint
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="font-roboto-condensed text-lg px-8 py-4 bg-gray-800 hover:bg-gray-900 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Report
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onStartNewSession}
            className="font-roboto-condensed text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Start New Session
          </Button>
          <Link to="/">
            <Button
              size="lg"
              variant="outline"
              className="font-roboto-condensed text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Home Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
