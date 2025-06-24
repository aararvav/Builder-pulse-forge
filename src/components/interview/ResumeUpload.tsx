import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle, FileText } from "lucide-react";

interface ResumeUploadProps {
  onUploadComplete: () => void;
}

const ResumeUpload = ({ onUploadComplete }: ResumeUploadProps) => {
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "success"
  >("idle");
  const [fileName, setFileName] = useState<string>("");

  const handleFileUpload = (file: File) => {
    setFileName(file.name);
    setUploadStatus("uploading");

    // Simulate upload delay
    setTimeout(() => {
      setUploadStatus("success");
      // Auto-redirect after success animation
      setTimeout(() => {
        onUploadComplete();
      }, 1500);
    }, 2000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-roboto-condensed text-gray-900 mb-4">
            Upload Your Resume
          </h1>
          <p className="text-gray-600 font-roboto-condensed">
            Let our AI analyze your resume to create personalized interview
            questions
          </p>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
            uploadStatus === "success"
              ? "border-green-400 bg-green-50"
              : uploadStatus === "uploading"
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50"
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {uploadStatus === "success" ? (
            <div className="animate-pulse">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-bold font-roboto-condensed text-green-700 mb-2">
                Upload Successful!
              </h3>
              <p className="text-green-600 font-roboto-condensed">{fileName}</p>
              <p className="text-sm text-green-500 font-roboto-condensed mt-2">
                Redirecting to interview...
              </p>
            </div>
          ) : uploadStatus === "uploading" ? (
            <div>
              <div className="animate-spin w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold font-roboto-condensed text-blue-700 mb-2">
                Uploading...
              </h3>
              <p className="text-blue-600 font-roboto-condensed">{fileName}</p>
            </div>
          ) : (
            <div>
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-roboto-condensed text-gray-700 mb-2">
                Drop your resume here
              </h3>
              <p className="text-gray-500 font-roboto-condensed mb-4">
                or click to browse files
              </p>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileInput}
                className="hidden"
                id="file-upload"
              />

              <Button
                onClick={() => document.getElementById("file-upload")?.click()}
                className="font-roboto-condensed bg-gray-800 hover:bg-gray-900"
              >
                <FileText className="w-4 h-4 mr-2" />
                Browse Files
              </Button>

              <p className="text-xs text-gray-400 font-roboto-condensed mt-4">
                Supports PDF, DOC, DOCX files
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
