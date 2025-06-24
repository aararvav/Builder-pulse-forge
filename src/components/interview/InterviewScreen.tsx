import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Clock, User, Bot, Mic, MicOff, Video, VideoOff } from "lucide-react";

interface InterviewScreenProps {
  onInterviewComplete: () => void;
}

const mockQuestions = [
  "I see you worked on machine learning. Can you explain your latest project in layman's terms?",
  "Tell me about a time when you had to work with a difficult team member.",
  "How do you stay updated with the latest technologies in your field?",
  "Describe a challenging problem you solved and your approach to it.",
  "Where do you see yourself in 5 years?",
];

const mockFeedback = [
  { text: "Great eye contact!", type: "positive" },
  { text: "Slow down a bit", type: "warning" },
  { text: "Smile more", type: "neutral" },
  { text: "Good posture!", type: "positive" },
  { text: "Speak louder", type: "warning" },
];

const InterviewScreen = ({ onInterviewComplete }: InterviewScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [activeFeedback, setActiveFeedback] = useState<typeof mockFeedback>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Initialize webcam
  useEffect(() => {
    const initWebcam = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.log("Webcam access denied or not available");
        setIsVideoOn(false);
      }
    };

    initWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    // Timer
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    // Question progression
    const questionTimer = setInterval(() => {
      setCurrentQuestion((prev) => {
        if (prev >= mockQuestions.length - 1) {
          clearInterval(questionTimer);
          setTimeout(() => onInterviewComplete(), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 20000);

    // Random feedback
    const feedbackTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomFeedback =
          mockFeedback[Math.floor(Math.random() * mockFeedback.length)];
        setActiveFeedback((prev) => [
          ...prev,
          { ...randomFeedback, id: Date.now() },
        ]);

        // Remove feedback after 3 seconds
        setTimeout(() => {
          setActiveFeedback((prev) => prev.slice(1));
        }, 3000);
      }
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(questionTimer);
      clearInterval(feedbackTimer);
    };
  }, [onInterviewComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoOn(videoTrack.enabled);
      }
    }
  };

  const progress = ((currentQuestion + 1) / mockQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Header with progress and timer */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5" />
            <span className="font-roboto-condensed font-bold">
              {formatTime(timeElapsed)}
            </span>
          </div>

          <div className="flex-1 mx-8">
            <div className="bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-center mt-1 font-roboto-condensed">
              Question {currentQuestion + 1} of {mockQuestions.length}
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onInterviewComplete()}
            className="font-roboto-condensed text-black border-white/30 hover:bg-white/10"
          >
            End Interview
          </Button>
        </div>
      </div>

      {/* Main interview area */}
      <div className="flex h-screen pt-20">
        {/* Left panel - User webcam */}
        <div className="flex-1 p-6">
          <div className="bg-gray-800 rounded-lg h-full relative overflow-hidden border-2 border-gray-600">
            {isVideoOn && stream ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-300 font-roboto-condensed">
                    Camera Off
                  </p>
                  <p className="text-sm text-gray-500 font-roboto-condensed mt-2">
                    Click to enable camera
                  </p>
                </div>
              </div>
            )}

            {/* Camera controls */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <Button
                size="sm"
                variant={isMuted ? "destructive" : "secondary"}
                onClick={() => setIsMuted(!isMuted)}
                className="font-roboto-condensed"
              >
                {isMuted ? (
                  <MicOff className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </Button>
              <Button
                size="sm"
                variant={isVideoOn ? "secondary" : "destructive"}
                onClick={toggleVideo}
                className="font-roboto-condensed"
              >
                {isVideoOn ? (
                  <Video className="w-4 h-4" />
                ) : (
                  <VideoOff className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Right panel - AI Interviewer */}
        <div className="flex-1 p-6">
          <div className="bg-gray-800 rounded-lg h-full relative overflow-hidden border-2 border-gray-600">
            {/* AI Avatar */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  {/* AI Avatar with animation */}
                  <div className="w-40 h-40 relative">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-green-400 rounded-full animate-pulse flex items-center justify-center relative overflow-hidden">
                      {/* Animated AI face */}
                      <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          {/* Eyes */}
                          <div className="flex justify-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div
                              className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                              style={{ animationDelay: "0.5s" }}
                            ></div>
                          </div>
                          {/* Mouth */}
                          <div
                            className="w-6 h-1 bg-cyan-400 rounded-full animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      </div>
                      {/* Scanning lines effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></div>
                    </div>
                    {/* Floating AI indicators */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  {/* AI Name */}
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold font-roboto-condensed text-white mb-1">
                      ARIA
                    </h3>
                    <p className="text-sm text-cyan-400 font-roboto-condensed">
                      AI Interview Assistant
                    </p>
                  </div>
                </div>
              </div>

              {/* Current question */}
              <div className="p-6 bg-black/30 backdrop-blur-sm">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-lg font-roboto-condensed leading-relaxed">
                    "{mockQuestions[currentQuestion]}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating feedback badges */}
      <div className="absolute top-20 right-4 pointer-events-none space-y-2">
        {activeFeedback.map((feedback, index) => (
          <div
            key={index}
            className={`
              animate-slide-in-right transform transition-all duration-500
              ${
                feedback.type === "positive"
                  ? "bg-green-500"
                  : feedback.type === "warning"
                    ? "bg-yellow-500"
                    : "bg-blue-500"
              }
              text-white px-6 py-3 rounded-full shadow-lg font-roboto-condensed text-sm
              min-w-32 text-center
            `}
            style={{
              animationDelay: `${index * 200}ms`,
            }}
          >
            {feedback.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewScreen;
