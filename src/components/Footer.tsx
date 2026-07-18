import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 border-t border-stone-250 py-12 text-stone-500 text-sm mt-auto">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p>© {currentYear} Sara Ghasvarianjahromi. All rights reserved.</p>
          <p className="mt-1 text-xs text-stone-400">
            Designed for screen readers and keyboard navigation. Built with Next.js & Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="font-mono text-xs">Last updated: July 12, 2026</p>
          <div className="flex gap-4 mt-2 no-print">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors focus-visible:underline"
            >
              Resume
            </a>
            <a
              href="https://github.com/sara-jahromi"
              className="hover:text-stone-900 transition-colors focus-visible:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sara-ghasvarianjahromi-a5435a99/"
              className="hover:text-stone-900 transition-colors focus-visible:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=UzDOnVQAAAAJ&view_op=list_works&sortby=pubdate"
              className="hover:text-stone-900 transition-colors focus-visible:underline"
            >
              Scholar
            </a>
          </div>
        </div>
      </div>

      {/* Print-only footer for CV generation */}
      <div className="hidden print:block text-center mt-8 text-xs text-stone-400 border-t border-stone-200 pt-4">
        Document printed from Sara Ghasvarianjahromi&apos;s Academic Portfolio website.
      </div>
    </footer>
  );
};
