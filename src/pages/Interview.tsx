import { useState } from "react";
import ResumeUpload from "@/components/interview/ResumeUpload";
import InterviewScreen from "@/components/interview/InterviewScreen";
import AnalyticsDashboard from "@/components/interview/AnalyticsDashboard";

type InterviewStep = "upload" | "interview" | "analytics";

const Interview = () => {
  const [currentStep, setCurrentStep] = useState<InterviewStep>("upload");

  const handleUploadComplete = () => {
    setCurrentStep("interview");
  };

  const handleInterviewComplete = () => {
    setCurrentStep("analytics");
  };

  const handleStartNewSession = () => {
    setCurrentStep("upload");
  };

  return (
    <div className="font-roboto-condensed">
      {currentStep === "upload" && (
        <ResumeUpload onUploadComplete={handleUploadComplete} />
      )}

      {currentStep === "interview" && (
        <InterviewScreen onInterviewComplete={handleInterviewComplete} />
      )}

      {currentStep === "analytics" && (
        <AnalyticsDashboard onStartNewSession={handleStartNewSession} />
      )}
    </div>
  );
};

export default Interview;
