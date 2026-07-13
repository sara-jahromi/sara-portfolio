import React from "react";
import { Section } from "./Section";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  huggingfaceUrl?: string;
  demoUrl?: string;
  year: string;
}

const projectsData: Project[] = [
  {
    title: "Parameter-Efficient Fine-Tuning with LoRA/PEFT",
    description: "• Fine-tuned a DistilBERT model for sentiment classification on the SST-2 dataset using Low-Rank Adaptation (LoRA) and the PEFT framework, reducing the number of trainable parameters to approximately 0.8% of the original model.\n• Built an end-to-end fine-tuning pipeline using the Hugging Face ecosystem (Transformers, PEFT, Datasets, and Evaluate), including data preprocessing, model training, evaluation, checkpointing, and reproducible experimentation.\n• Published the fine-tuned model and accompanying model card to the Hugging Face Hub, demonstrating reproducible model sharing and deployment.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT", "LoRA", "Datasets", "Evaluate"],
    githubUrl: "https://github.com/sara-jahromi/efficient-nlp-finetuning",
    huggingfaceUrl: "https://huggingface.co/Sara-1990/distilbert-lora-sst2",
    year: "2026",
  },
  {
    title: "AI Job Scout Agent",
    description: "• Built a local-first, multi-agent job search assistant that plans targeted searches, retrieves postings from multiple sources, ranks candidate-job fit, and generates tailored application materials.\n• Designed a modular pipeline using Google’s Agent Development Kit (ADK), with specialized agents for search planning, multi-source retrieval, match scoring, job-fit analysis, resume alignment, application drafting, and notifications.\n• Implemented configurable YAML-based profiles, weighted job-matching heuristics, URL-based deduplication, SQLite persistence, CLI controls, and optional Gemini-powered reasoning with deterministic offline fallbacks.",
    technologies: ["Python", "Google ADK", "Gemini", "Multi-Agent Systems", "SQLite", "PyYAML", "Pytest", "REST APIs"],
    githubUrl: "https://github.com/sara-jahromi/ai-job-scout-agent",
    year: "2026",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="Projects" subtitle="SOFTWARE & DATASETS">
      <div className="grid grid-cols-1 gap-6">
        {projectsData.map((project, index) => (
          <Card key={index} as="li" className="list-none flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-stone-900 font-sans">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-stone-400 bg-stone-50 border border-stone-200 px-2 py-0.5 rounded">
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-4 whitespace-pre-line">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto">
              {/* Tech tag list */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono text-stone-500 bg-stone-100 border border-stone-200/50 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5 items-center no-print">
                {project.githubUrl && (
                  <Button href={project.githubUrl} variant="outline" size="sm" external>
                    GitHub
                  </Button>
                )}
                {project.huggingfaceUrl && (
                  <Button href={project.huggingfaceUrl} variant="outline" size="sm" external>
                    Hugging Face
                  </Button>
                )}
                {project.demoUrl && (
                  <Button href={project.demoUrl} variant="ghost" size="sm" external>
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
