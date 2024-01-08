import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSearch,
  faBars,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Button from "@/components/Button";
import { RESOURCES_POSTS } from "@/consts/posts";
import PostCard from "@/components/PostCard";

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
              <li className="hidden lg:list-item">Followed by 4.50+ million</li>
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
            <Button
              type="button"
              variant="tertiary"
              color="tertiary"
              className="hidden lg:flex"
            >
              <Icon icon={faEnvelope} className="w-4 h-4" /> Get the Free
              Newsletter
            </Button>
            <Button
              type="button"
              variant="quarternary"
              color="none"
              className="lg:hidden text-white"
            >
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
        <main className="bg-white">{children}</main>
        <div className="border-b-4 bg-white flex flex-col gap-5 pb-10">
          <section className="flex flex-col max-w-[1110px] mx-auto gap-5 p-5">
            <h3 className="relative py-2 tracking-wide text-lg text-quarternary font-semibold before:absolute before:w-5 before:h-[5px] before:bottom-0 after:w-24 after:h-[1px] after:left-0 after:bottom-0.5 after:absolute before:bg-quarternary after:bg-quarternary">
              Cybersecurity Resources
            </h3>
            <ul className="grid grid-cols-4 gap-5">
              {RESOURCES_POSTS.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  variant="tertiary"
                  className="col-span-4 sm:col-span-2 lg:col-span-1 rounded-lg border-b-4 py-5 sm:py-0 sm:border-none"
                />
              ))}
            </ul>
          </section>
          <section className="max-w-[1110px] w-full text-white flex flex-col items-center justify-center gap-5 rounded rounded-bl-xl rounded-tr-xl border-b-8 border-tertiary mx-auto p-10 bg-primary-light">
            <h3 className="font-medium text-xl text-center">Join 120,000+ Professionals</h3>
            <p className="text-center">Sign up for free and start receiving your daily dose of cybersecurity<br />news, insights and tips.</p>
            <form className="relative w-96">
              <input type="email" placeholder="Your e-mail address" className="px-5 py-2.5 text-quarternary outline-none w-full rounded" />
              <Button type="submit" variant="secondary" color="secondary" className="absolute rounded-sm px-5 right-2 top-1/2 -translate-y-1/2">
                <Icon icon={faChevronRight} className="w-5 h-5" />
              </Button>
            </form>
          </section>
        </div>
        <footer className="mt-auto">
          <div className="max-w-[1110px] mx-auto">
            <h3 className="font-bold text-quarternary text-center my-5">
              Connect with us!
            </h3>
            <p className="text-[10px] border-t-2 py-2.5 tracking-wide">
              © Newzroom, 2023. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
