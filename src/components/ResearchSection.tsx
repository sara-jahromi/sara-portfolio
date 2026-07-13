import React from "react";
import { Section } from "./Section";
import { Card } from "./ui/Card";

export const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      id: "communication-systems",
      title: "Communication Systems & Wireless Networks",
      details: "My research journey began with communication systems and wireless networks, where I studied visible light communications, resource allocation, and optimization techniques for next-generation communication systems. This work provided a strong mathematical foundation that continues to shape how I approach machine learning and AI research today.",
    },
    {
      id: "reliable-ai",
      title: "Reliable AI & Machine Learning",
      details: "During my Ph.D., my research expanded toward reliable AI and machine learning, with an emphasis on decentralized learning, robust computation, and learning under uncertainty. I developed algorithms that improve the reliability and resilience of AI systems operating in challenging environments.",
    },
    {
      id: "information-retrieval",
      title: "Information Retrieval & Semantic Communication",
      details: "My recent work focuses on information retrieval and semantic communication, developing optimization-based methods for embedding-aware retrieval, semantic search, and efficient information transmission under communication constraints.",
    },
    {
      id: "large-language-models",
      title: "Large Language Models & AI Engineering",
      details: "Building on my research background, I have recently been expanding into modern AI systems, including large language models, retrieval-augmented generation (RAG), AI agents, and AI engineering. I enjoy applying strong mathematical and machine learning foundations to rapidly learn emerging technologies and build practical AI applications.",
    },
  ];

  const currentInterests = [
    "Large Language Models (LLMs)",
    "AI Agents",
    "Retrieval-Augmented Generation (RAG)",
    "Reliable AI",
    "Information Retrieval",
    "Machine Learning",
  ];

  return (
    <Section id="research" title="Research Areas" subtitle="THEORETICAL FOUNDATIONS & IMPACT">
      <div className="space-y-10">
        <p className="text-base md:text-lg leading-relaxed text-stone-600">
          My research has evolved from communication systems and mathematical optimization to machine learning, reliable AI, information retrieval, and modern AI systems. Throughout this journey, I have been motivated by developing mathematically grounded methods for machine learning, information retrieval, and reliable AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area) => (
            <Card
              key={area.id}
              id={area.id}
              as="article"
              className="p-6 bg-white border border-stone-200 rounded-lg hover:border-brand-primary/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-stone-900 mb-3 font-sans">
                  {area.title}
                </h4>
                <p className="text-sm md:text-base text-stone-500 leading-relaxed">
                  {area.details}
                </p>
              </div>
              <div className="mt-4 text-xs text-stone-400 font-mono no-print">
                <a href={`#${area.id}`} className="hover:underline">
                  # {area.id}
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="pt-4 border-t border-stone-100">
          <h3 className="text-sm font-bold text-stone-800 mb-4 font-mono tracking-wider">
            CURRENT INTERESTS
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {currentInterests.map((interest, idx) => (
              <li
                key={idx}
                className="px-3 py-1 bg-stone-50 text-stone-600 rounded text-xs font-mono border border-stone-200"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
