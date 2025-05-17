"use client";

import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="top-0 z-50 sticky bg-neutral/80 backdrop-blur text-neutral-content">
      <div className="px-4 md:px-8 navbar">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="What's The Rush Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-display text-lg md:text-xl tracking-wide">
              WHAT&#39;S THE RUSH?
            </span>
          </Link>
        </div>

        {/* Right: Menu */}
        <div className="flex-none">
          <div className="hidden md:flex gap-6">
            <a href="#manifesto" className="text-sm btn btn-ghost">
              Manifesto
            </a>
            <a href="#tools" className="text-sm btn btn-ghost">
              Tools
            </a>
            <a href="#join" className="text-sm btn btn-ghost">
              Join
            </a>
            <Link href="/about" className="text-sm btn btn-ghost">
              About
            </Link>
          </div>
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 text-base-content menu dropdown-content"
            >
              <li>
                <a href="#manifesto">Manifesto</a>
              </li>
              <li>
                <a href="#tools">Tools</a>
              </li>
              <li>
                <a href="#join">Join</a>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
