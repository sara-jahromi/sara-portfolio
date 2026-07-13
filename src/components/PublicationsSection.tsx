"use client";

import React from "react";
import { Section } from "./Section";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  tags: string[];
  link: string;
}

const publicationsData: Publication[] = [
  {
    id: "pub-1",
    title: "Context-Aware Search and Retrieval Under Token Erasure",
    authors: "S Ghasvarianjahromi, J Barr, Y Yakimenka, J Kliewer",
    venue: "arXiv preprint arXiv:2604.18424",
    year: 2026,
    tags: ["Preprint"],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:KxtntwgDAa4C",
  },
  {
    id: "pub-2",
    title: "AI/ML Based QoS Recommendations for Energy Optimization in 6G Networks",
    authors: "S Ghasvarianjahromi, A Kiani, A Xiang, J Kaippallimalil, T Saboorian, ...",
    venue: "IEEE Networking Letters",
    year: 2026,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:nb7KW1ujOQ8C",
  },
  {
    id: "pub-3",
    title: "Context-Aware Search and Retrieval Over Erasure Channels",
    authors: "S Ghasvarianjahromi, Y Yakimenka, J Kliewer",
    venue: "2025 IEEE Information Theory Workshop (ITW), 821-826",
    year: 2025,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:CHSYGLWDkRkC",
  },
  {
    id: "pub-4",
    title: "Decentralized sparse matrix multiplication under Byzantine attacks",
    authors: "S Ghasvarianjahromi, Y Yakimenka, J Kliewer",
    venue: "IEEE Transactions on Information Forensics and Security",
    year: 2025,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:_xSYboBqXhAC",
  },
  {
    id: "pub-5",
    title: "VALID: A validated algorithm for learning in decentralized networks with possible adversarial presence",
    authors: "M Bakshi, S Ghasvarianjahromi, Y Yakimenka, A Beemer, O Kosut, ...",
    venue: "2024 IEEE International Symposium on Information Theory (ISIT), 2502-2507",
    year: 2024,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:EUQCXRtRnyEC",
  },
  {
    id: "pub-6",
    title: "Decentralized Sparse Matrix Multiplication Under Byzantine Attacks",
    authors: "S Ghasvarianjahromi, Y Yakimenka, J Kliewer",
    venue: "GLOBECOM 2023 - 2023 IEEE Global Communications Conference",
    year: 2024,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:NhqRSupF_l8C",
  },
  {
    id: "pub-7",
    title: "SLIPT for underwater visible light communications: Performance analysis and optimization",
    authors: "M Uysal, S Ghasvarianjahromi, M Karbalayghareh, PD Diamantoulakis, ...",
    venue: "IEEE Transactions on Wireless Communications 20 (10), 6715-6728",
    year: 2021,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:pyW8ca7W8N0C",
  },
  {
    id: "pub-8",
    title: "Simultaneous lightwave information and power transfer in underwater visible light communications",
    authors: "S Ghasvarianjahromi, M Karbalayghareh, PD Diamantoulakis, ...",
    venue: "2019 IEEE 30th annual international symposium on personal, indoor and mobile",
    year: 2019,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:u-x6o8ySG0sC",
  },
  {
    id: "pub-9",
    title: "Energy efficient relay selection and routing in diffusion-based molecular communication",
    authors: "S Ghasvarian, J Abouei, M Azadi, A Anpalagan",
    venue: "2019 27th Iranian Conference on Electrical Engineering (ICEE), 1321-1326",
    year: 2019,
    tags: [],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=UzDOnVQAAAAJ&sortby=pubdate&citation_for_view=UzDOnVQAAAAJ:u5HHmVD_uO8C",
  },
];

export const PublicationsSection: React.FC = () => {
  return (
    <Section id="publications" title="Publications" subtitle="PEER-REVIEWED PAPERS">
      <div className="space-y-6">
        {publicationsData.map((pub) => {
          return (
            <Card key={pub.id} as="article" className="flex flex-col gap-4">
              <div>
                {/* Year and Status Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-stone-100 text-stone-600 border border-stone-200">
                    {pub.year}
                  </span>
                  {pub.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-teal-50/50 text-teal-700 border border-teal-100/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-stone-900 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-sm text-stone-600 mt-1 font-sans">
                  {pub.authors.split(", ").map((author, index) => {
                    const isMe = author.includes("Ghasvarian");
                    return (
                      <React.Fragment key={index}>
                        {index > 0 && ", "}
                        <span className={isMe ? "underline font-semibold text-stone-850" : ""}>
                          {author}
                        </span>
                      </React.Fragment>
                    );
                  })}
                </p>

                <p className="text-xs md:text-sm text-stone-400 italic mt-1 font-mono">
                  {pub.venue}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2.5 items-center mt-1 no-print">
                <Button href={pub.link} variant="outline" size="sm" external>
                  Google Scholar
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
