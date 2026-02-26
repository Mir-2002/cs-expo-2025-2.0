import { Facebook, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full h-[50vh] p-5 font-space-mono bg-black border-t-2 border-gray-600 lg:flex-row">
      <div className="flex items-center h-1/4 p-10 lg:h-full lg:w-1/2 lg:flex-col lg:items-start lg:gap-10">
        <Image
          src="/logos/Logo.png"
          alt="CS Expo 2025 Logo"
          width={100}
          height={100}
        />
        <p className="font-racing-sans-one text-xs lg:text-base">
          Exploring the frontiers of computer science and technology. A
          celebration of innovation and discovery.
        </p>
      </div>
      <div className="flex items-center h-3/4 lg:h-full lg:w-1/2">
        <nav className="flex flex-col w-1/2 h-full items-start gap-5 p-5">
          <p className="text-light-blue">NAVIGATION</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-dark-blue transition-colors duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-dark-blue transition-colors duration-150"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/partnership"
                className="hover:text-dark-blue transition-colors duration-150"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-dark-blue transition-colors duration-150"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-dark-blue transition-colors duration-150"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col w-1/2 h-full items-start gap-5 p-5">
          <p className="text-light-blue">CONTACT US</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="mailto:fit.csexpo@gmail.com"
                className="flex items-center gap-2 hover:text-dark-blue transition-colors duration-150"
              >
                <Mail size={24} />
                fit.csexpo@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/FEUTechOfficial"
                className="flex items-center gap-2 hover:text-dark-blue transition-colors duration-150"
              >
                <Image
                  src="/logos/FEU TECH Seal.png"
                  alt="FEU Tech"
                  width={24}
                  height={24}
                />
                FEU Tech
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/csexpo20252.0"
                className="flex items-center gap-2 hover:text-dark-blue transition-colors duration-150"
              >
                <Facebook />
                CS Expo 2025 2.0
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
