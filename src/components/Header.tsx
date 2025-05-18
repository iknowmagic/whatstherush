"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <div className="z-50 drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header className="bg-neutral/80 backdrop-blur px-4 md:px-8 navbar">
          <div className="flex-1">
            <label htmlFor="nav-drawer" className="md:hidden btn btn-ghost">
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
          <div className="hidden md:flex gap-4">
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
            <ThemeToggle />
          </div>
        </header>
      </div>
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="bg-base-100 p-4 w-80 min-h-full text-base-content menu">
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
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
