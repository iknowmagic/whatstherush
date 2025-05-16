import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#172625] py-12 font-['Inter'] text-[#F2DCB3]/80">
      <div className="mx-auto px-4 md:px-8 container">
        <div className="mx-auto max-w-6xl">
          {/* Quote */}
          <div className="mb-12 text-center">
            <p className="text-sm md:text-base italic">
              "The planet has been here for billions of years. What's the
              f*cking rush?"
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-8 md:space-x-12 mb-12">
            <Link
              href="/about"
              className="hover:text-[#F2DCB3] transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#F2DCB3] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/apps"
              className="hover:text-[#F2DCB3] transition-colors"
            >
              Apps
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#F2DCB3] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex md:flex-row flex-col justify-between items-center pt-8 border-[#F2DCB3]/20 border-t text-[#F2DCB3]/50 text-xs">
            <div>
              &copy; {currentYear} What's The Rush. All rights reserved.
            </div>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-[#F2DCB3] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#F2DCB3] transition-colors"
              >
                Terms
              </Link>
              <a
                href="https://github.com/whatstherush"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2DCB3] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
