import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

export const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="py-20 md:py-32 flex flex-col justify-center border-b border-stone-200 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Picture Box */}
        <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-2xl border-2 border-stone-200 overflow-hidden shadow-md shrink-0">
          <Image
            src="/sara-profile.jpg"
            alt="Sara Ghasvarianjahromi"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 rounded-2xl border-4 border-white/50 pointer-events-none"></div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Status Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-mono bg-teal-50 text-teal-700 border border-teal-200/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Open to Research & Industry Opportunities
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Sara Ghasvarianjahromi, Ph.D.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-mono text-stone-500">
            AI/ML Researcher & Engineer
          </p>

          <p className="mt-6 text-base md:text-lg text-stone-500 leading-relaxed max-w-xl">
            I&rsquo;m happiest when learning something completely new and turning it into a working system.
          </p>

          {/* Social buttons/Actions */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 no-print">
            <Button href="/resume.pdf" variant="primary" external>
              Resume
            </Button>
            <Button href="mailto:s.ghasvarian@gmail.com" variant="ghost" className="p-2.5">
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="sr-only">Email</span>
            </Button>
            <Button href="https://www.linkedin.com/in/sara-ghasvarianjahromi-phd-a5435a99/" variant="ghost" external className="p-2.5">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button href="https://scholar.google.com/citations?hl=en&user=UzDOnVQAAAAJ&view_op=list_works&sortby=pubdate" variant="ghost" external className="p-2.5">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L1 8l11 6 9-4.91v7.66h2V8L12 2zM4.68 11.53L12 15.53l7.32-4V16L12 20l-7.32-4v-4.47z" />
              </svg>
              <span className="sr-only">Google Scholar</span>
            </Button>
            <Button href="https://github.com/sara-jahromi" variant="ghost" external className="p-2.5">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
