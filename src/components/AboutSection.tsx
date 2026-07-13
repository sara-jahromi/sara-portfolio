import React from "react";
import { Section } from "./Section";

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About" subtitle="BIOGRAPHY & RESEARCH FOCUS">
      <div className="space-y-6">
        <div className="prose prose-stone max-w-none text-stone-600 space-y-4">
          <p className="leading-relaxed">
            I received my Ph.D. in Electrical Engineering from the{" "}
            <a
              href="https://www.njit.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline font-bold hover:text-brand-primary transition-colors focus-visible:outline-2"
            >
              New Jersey Institute of Technology (2026)
            </a>{" "}
            under the supervision of{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=8KFdOo4AAAAJ&view_op=list_works&sortby=pubdate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline font-bold hover:text-brand-primary transition-colors focus-visible:outline-2"
            >
              Prof. Joerg Kliewer
            </a>
            . My research focused on reliable AI, machine learning, information retrieval, and optimization under uncertainty, with an emphasis on robust algorithms for decentralized learning, semantic retrieval, and distributed computation.
          </p>

          <p className="leading-relaxed">
            During my Ph.D., I completed a research internship at{" "}
            <a
              href="https://www.futurewei.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline font-bold hover:text-brand-primary transition-colors focus-visible:outline-2"
            >
              Futurewei Technologies
            </a>
            , where I developed machine learning and optimization methods for energy-efficient resource allocation in next-generation communication networks.
          </p>

          <p className="leading-relaxed">
            Prior to that, I received my M.Sc. in Electrical and Electronics Engineering from{" "}
            <a
              href="https://www.ozyegin.edu.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline font-bold hover:text-brand-primary transition-colors focus-visible:outline-2"
            >
              Özyeğin University (2021)
            </a>{" "}
            under the supervision of{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=NXdHPhQAAAAJ&view_op=list_works&sortby=pubdate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 underline font-bold hover:text-brand-primary transition-colors focus-visible:outline-2"
            >
              Prof. Murat Uysal
            </a>
            . My master&apos;s research focused on wireless communication systems, information theory, and visible light communications.
          </p>

          <p className="leading-relaxed">
            I have authored publications in leading IEEE journals and conferences and serve as a reviewer for{" "}
            <strong className="text-stone-900 font-semibold">IEEE Transactions on Communications</strong>,{" "}
            <strong className="text-stone-900 font-semibold">IEEE Transactions on Wireless Communications</strong>,{" "}
            <strong className="text-stone-900 font-semibold">IEEE Transactions on Mobile Computing</strong>,{" "}
            <strong className="text-stone-900 font-semibold">IEEE Transactions on Information Forensics and Security</strong>, and{" "}
            <strong className="text-stone-900 font-semibold">IEEE Wireless Communications Letters</strong>. My current interests include large language models, retrieval-augmented generation (RAG), AI agents, and reliable machine learning systems.
          </p>
        </div>
      </div>
    </Section>
  );
};
