import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

const SOCIALS = [
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/Harsh2126" },
  { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/harsh-gupta-652369343" },
  { name: "LeetCode", icon: SiLeetcode, link: "https://leetcode.com/u/harshgupta202/" },
];

const NAV = [
  { name: "About Me", link: "#about-me" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
];

export const Footer = () => {
  return (
    <footer className="relative w-full mt-20 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left — Branding */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            <span className="font-black text-xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
              Harsh Gupta
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full Stack Developer & AI Enthusiast. Building impactful web apps and intelligent tools.
            </p>
            <div className="flex gap-3 mt-1">
              {SOCIALS.map(({ name, icon: Icon, link }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/40 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Middle — Nav */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-1">Navigation</h4>
            {NAV.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-gray-500 text-sm hover:text-orange-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right — Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-1">Contact</h4>
            <Link
              href="mailto:harshgupta2026@gmail.com"
              className="flex items-center gap-2 text-gray-500 text-sm hover:text-orange-400 transition-colors duration-200"
            >
              <HiOutlineMail className="h-4 w-4 text-orange-400" />
              harshgupta2026@gmail.com
            </Link>
            <Link
              href="tel:+919506600706"
              className="flex items-center gap-2 text-gray-500 text-sm hover:text-orange-400 transition-colors duration-200"
            >
              <BsTelephone className="h-4 w-4 text-orange-400" />
              +91 9506600706
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Harsh Gupta. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
