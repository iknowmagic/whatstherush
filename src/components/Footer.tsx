"use client";

import React from "react";
import Link from "next/link";
import { FaTwitter, FaMastodon, FaLinkedin, FaCloud } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-neutral p-10 border-accent border-t text-neutral-content footer">
      <div className="mx-auto px-4 md:px-8 container">
        <div className="mx-auto max-w-6xl">
          {/* Quote */}
          <div className="mb-10">
            <div className="text-center">
              <div className="px-4 py-3 badge-outline badge badge-accent">
                The planet has been here for billions of years. What&apos;s the
                f*cking rush?
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="link link-hover">
              About
            </Link>
            <Link href="/blog" className="link link-hover">
              Blog
            </Link>
            <Link href="/apps" className="link link-hover">
              Apps
            </Link>
            <Link href="/contact" className="link link-hover">
              Contact
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-10 text-xl">
            <a
              href="https://bsky.app/profile/yourhandle.bsky.social"
              className="tooltip"
              data-tip="Bluesky"
            >
              <FaCloud className="hover:text-accent transition-colors" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              className="tooltip"
              data-tip="Twitter"
            >
              <FaTwitter className="hover:text-accent transition-colors" />
            </a>
            <a
              href="https://mastodon.social/@yourhandle"
              className="tooltip"
              data-tip="Mastodon"
            >
              <FaMastodon className="hover:text-accent transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              className="tooltip"
              data-tip="LinkedIn"
            >
              <FaLinkedin className="hover:text-accent transition-colors" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div className="mt-12 text-center">
            <button
              onClick={scrollToTop}
              className="btn-outline text-sm tracking-wide hover:scale-105 transition-transform btn btn-sm btn-accent"
            >
              <FaArrowUp className="inline-block mr-2" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
