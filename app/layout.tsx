import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/Button";

const font = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "100", "300", "700", "900"],
});

export const metadata: Metadata = {
  title: "Newzroom | #1 News worth to read.",
  description: "The hacker news application clone.",
};

const navlinks = [
  "Home",
  "Data Breaches",
  "Cyber Attacks",
  "Vulnerabilities",
  "Webinars",
  "Store",
  "Contact",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header className="bg-primary">
          <div className="flex justify-between items-center text-sm py-1 max-w-[1110px] px-5 mx-auto text-secondary-light">
            <h2>#1 News worth to read.</h2>
            <ul className="flex justify-between items-center gap-5">
              <li className="hidden">Followed by 4.50+ million</li>
              <li className="cursor-pointer">
                <Icon icon={faTwitter} className="w-3 h-3" />
              </li>
              <li className="cursor-pointer">
                <Icon icon={faLinkedinIn} className="w-3 h-3" />
              </li>
              <li className="cursor-pointer">
                <Icon icon={faFacebookF} className="w-3 h-3" />
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center px-5 bg-gradient-to-r from-primary via-primary-light to-primary py-2.5 max-w-[1110px] mx-auto">
            <Link
              href="/"
              className="text-white text-lg lg:text-5xl font-semibold tracking-widest cursor-pointer"
            >
              Newzroom
            </Link>
            <Button type="button" variant="tertiary" color="tertiary" className="hidden lg:flex">
              <Icon icon={faEnvelope} className="w-4 h-4" /> Get the Free
              Newsletter
            </Button>
            <Button type="button" variant="quarternary" color="none" className="lg:hidden text-white">
              <Icon icon={faBars} className="w-4 h-4" />
            </Button>
          </div>
        </header>
        <nav className="bg-white border-b-4 hidden lg:block">
          <div className="max-w-[1110px] mx-auto flex items-center justify-between text-sm font-semibold tracking-wide">
            <ul className="flex items-center justify-between gap-2.5">
              {navlinks.map((navlink) => (
                <li
                  key={navlink}
                  className="py-2 px-3 transition-all duration-50 border-y-4 border-transparent hover:border-b-primary-light cursor-pointer"
                >
                  {navlink}
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-between gap-5">
              <li className="py-2 px-3 cursor-default">
                <Icon icon={faSearch} className="w-5 h-5" />
              </li>
              <li className="py-2 px-3 cursor-pointer">
                <Icon icon={faBars} className="w-5 h-5" />
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex justify-center items-center p-5">
          <input
            type="image"
            src="/header-picture.png"
            className="rounded hover:scale-105 transition-all duration-500 w-full md:w-auto"
          />
        </div>
        <main className="bg-white border-b-4 py-5">{children}</main>
        <footer className="mt-auto">
          <div className="max-w-[1110px] mx-auto">
            <h3 className="font-bold text-quarternary text-center my-5">Connect with us!</h3>
            <div></div>
            <p className="text-[10px] border-t-2 py-2.5 tracking-wide">
              © Newzroom, 2023. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
