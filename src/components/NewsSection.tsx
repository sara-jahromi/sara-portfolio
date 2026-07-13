import React from "react";
import { Section } from "./Section";

interface NewsItem {
  date: string;
  title: string;
  description: React.ReactNode;
}

const newsData: NewsItem[] = [
  {
    date: "May 2026",
    title: "Received my Ph.D.",
    description: (
      <span>
        Received my Ph.D. in Electrical Engineering from the New Jersey Institute of Technology.
      </span>
    ),
  },
  {
    date: "February 2026",
    title: "ITA Workshop",
    description: (
      <span>
        Our work, &ldquo;Context-Aware Search and Retrieval Under Token Erasure,&rdquo; was presented at the{" "}
        <a
          href="https://ita.ucsd.edu/workshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-900 underline font-semibold hover:text-brand-primary transition-colors focus-visible:outline-2"
        >
          2026 Information Theory and Applications Workshop
        </a>{" "}
        in San Diego, California.
      </span>
    ),
  },
  {
    date: "August 2024",
    title: "Futurewei Research Internship",
    description: (
      <span>
        Completed a research internship at Futurewei Technologies, where I worked on machine learning and optimization methods for energy-efficient resource allocation in next-generation communication networks.
      </span>
    ),
  },
];

export const NewsSection: React.FC = () => {
  return (
    <Section id="news" title="Recent News" subtitle="LATEST UPDATES">
      <div className="space-y-6">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-6 last:pb-0 last:border-b-0 border-b border-stone-150"
          >
            <div className="sm:w-36 shrink-0 flex items-start">
              <span className="text-xs font-mono font-bold text-brand-primary bg-stone-100/60 border border-stone-200/50 px-2.5 py-1 rounded">
                {item.date}
              </span>
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="text-base font-bold text-stone-900 font-sans">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
