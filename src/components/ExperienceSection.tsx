import React from "react";
import { Section } from "./Section";

interface Job {
  role: string;
  organization: string;
  location: string;
  duration: string;
  description: string[];
}

const experiences: Job[] = [
  {
    role: "Graduate Research Assistant",
    organization: "University of Technology",
    location: "Metro City, US",
    duration: "Sep 2022 - Present",
    description: [
      "Investigate systematic generalization limits in decoder-only Transformer models.",
      "Design synthetic datasets to test compositional inference logic in multi-step chains.",
      "Co-authored research published in ACL 2025 and NeurIPS 2024.",
    ],
  },
  {
    role: "Deep Learning Research Intern",
    organization: "AI Labs Research",
    location: "Silicon Valley, CA",
    duration: "May 2024 - Aug 2024",
    description: [
      "Audited commercial LLM APIs for consistency and logical drift under the reasoning division.",
      "Proposed a scaling-law framework for self-consistency voting paths, reducing api overhead by 15%.",
      "Developed internal tooling for visualization of semantic clustering across reasoning chains.",
    ],
  },
  {
    role: "Graduate Teaching Assistant",
    organization: "University of Technology",
    location: "Metro City, US",
    duration: "Sep 2023 - Dec 2024 (Seasonal)",
    description: [
      "Graduate Teaching Assistant for CS-8803: Advanced Natural Language Processing (Fall 2024).",
      "Graduate Teaching Assistant for CS-7641: Machine Learning (Fall 2023).",
      "Led weekly recitation sections of 40+ students and graded midterms/programming assignments.",
    ],
  },
  {
    role: "Junior Research Assistant",
    organization: "Robotics Research Lab",
    location: "Metro City, US",
    duration: "Jan 2020 - May 2022",
    description: [
      "Developed computer vision pipelines for localizing robotic manipulators.",
      "Maintained laboratory cluster hardware and scheduled batch model training configurations.",
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="PROFESSIONAL & ACADEMIC ROLES">
      <div className="relative border-l border-stone-200 ml-4 pl-6 md:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-stone-300 bg-brand-bg group-hover:border-brand-primary group-hover:bg-brand-primary transition-colors duration-200" />

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg font-bold text-stone-900 leading-tight">
                  {exp.role}
                </h3>
                <span className="text-xs md:text-sm font-mono text-brand-primary font-bold">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm font-semibold text-stone-600 font-mono">
                {exp.organization} · <span className="text-stone-400 font-normal">{exp.location}</span>
              </p>

              <ul className="mt-3 space-y-1.5 list-disc list-outside ml-4 text-sm text-stone-500 leading-relaxed">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="pl-0.5">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
