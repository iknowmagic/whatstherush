import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral py-12 font-body text-neutral-content/80">
      <div className="mx-auto px-4 md:px-8 container">
        <div className="mx-auto max-w-6xl">
          {/* Quote */}
          <div className="mb-12 text-center">
            <p className="text-sm md:text-base italic">
              &ldquo;The planet has been here for billions of years. What&apos;s
              the f*cking rush?&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-8 md:space-x-12 mb-12">
            <Link
              href="/about"
              className="hover:text-neutral-content transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:text-neutral-content transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/apps"
              className="hover:text-neutral-content transition-colors"
            >
              Apps
            </Link>
            <Link
              href="/contact"
              className="hover:text-neutral-content transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
