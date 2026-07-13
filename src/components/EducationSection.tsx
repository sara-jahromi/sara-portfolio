import React from "react";
import { Section } from "./Section";

interface Degree {
  degree: string;
  major: string;
  institution: string;
  year: string;
  notes?: string;
}

interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

const educationData: Degree[] = [
  {
    degree: "Doctor of Philosophy",
    major: "Electrical Engineering",
    institution: "New Jersey Institute of Technology, Newark, NJ",
    year: "2026",
    notes: "Dissertation: 'Computing and Retrieval under Uncertainty: Reliable Decentralized Computation and Importance-Aware Semantic Communication'.\nAdvised by Prof. Joerg Kliewer.",
  },
  {
    degree: "Master of Science",
    major: "Electrical Engineering",
    institution: "Ozyegin University, Istanbul, Turkey",
    year: "2021",
    notes: "Thesis: 'Simultaneous Lightwave Information and Power Transfer in Underwater Visible Light Communications'.\nAdvised by Prof. Murat Uysal.",
  },
  {
    degree: "Master of Science",
    major: "Electrical Engineering",
    institution: "Yazd University, Yazd, Iran",
    year: "2018",
    notes: "Thesis: 'Improvement of Routing Algorithms in Diffusion-based Molecular Communication'.\nAdvised by Dr. Jamshid Abouei.",
  },
];

const awardsData: Award[] = [
  {
    title: "Research Assistantship (Full Tuition and Stipend)",
    issuer: "New Jersey Institute of Technology, Newark, NJ, USA",
    year: "2022–2026",
    description: "Fully funded Ph.D. research assistantship covering tuition and stipend in the Department of Electrical and Computer Engineering.",
  },
  {
    title: "TÜBİTAK Graduate Scholarship",
    issuer: "The Scientific and Technological Research Council of Turkey (TÜBİTAK)",
    year: "2018–2021",
    description: "Competitive graduate scholarship supporting M.Sc. studies and research in Electrical and Electronics Engineering.",
  },
  {
    title: "M.Sc. Full Scholarship",
    issuer: "Özyeğin University, Istanbul, Türkiye",
    year: "2018–2021",
    description: "Merit-based full scholarship awarded for graduate studies in Electrical and Electronics Engineering.",
  },
];

export const EducationSection: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="ACADEMIC DEGREES">
      <div className="space-y-12">
        {/* Degrees */}
        <div className="space-y-8">
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="border-l-2 border-stone-200 pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-base md:text-lg font-bold text-stone-900 leading-tight">
                    {edu.degree} in {edu.major}
                  </h4>
                  <span className="text-xs font-mono text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm font-semibold text-stone-600 font-mono">
                  {edu.institution}
                </p>
                {edu.notes && (
                  <p className="text-xs md:text-sm text-stone-500 leading-relaxed mt-1.5 font-sans whitespace-pre-line">
                    {edu.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Funding */}
        <div>
          <h3 className="text-lg font-bold text-stone-850 mb-4 font-mono">
            HONORS & FUNDING
          </h3>
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden divide-y divide-stone-200">
            {awardsData.map((award, index) => (
              <div key={index} className="p-4 flex gap-4 justify-between items-start text-sm">
                <div className="space-y-1.5">
                  <h4 className="font-semibold text-stone-850">
                    {award.title}
                  </h4>
                  <p className="text-xs text-stone-700 font-mono font-bold">
                    {award.issuer}
                  </p>
                  <p className="text-xs md:text-sm text-stone-500 leading-relaxed font-sans">
                    {award.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-stone-400 font-bold shrink-0">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
