import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream-200/80 border-t border-cream-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold font-roboto-condensed text-gray-800 mb-4">
                PitchPerfect
              </h3>
              <p className="text-gray-600 font-roboto-condensed mb-4 max-w-md">
                Your AI-powered interview and pitch assistant. Practice,
                improve, and succeed with personalized coaching and real-time
                feedback.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/aararvav/Builder-pulse-forge"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold font-roboto-condensed text-gray-800 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold font-roboto-condensed text-gray-800 mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#docs"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-gray-600 hover:text-gray-800 font-roboto-condensed transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-cream-300 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 font-roboto-condensed text-sm mb-4 md:mb-0">
              © 2024 PitchPerfect. All rights reserved.
            </p>
            <div className="flex items-center text-gray-600 font-roboto-condensed text-sm">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Team
              CodeDiLassi
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
