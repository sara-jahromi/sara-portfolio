import React from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  noHeaderBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  noHeaderBorder = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-b border-stone-200 scroll-mt-16 md:scroll-mt-20 last:border-b-0 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <header className={`mb-10 ${noHeaderBorder ? "" : "border-l-4 border-brand-primary pl-4"}`}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 font-sans">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm md:text-base text-stone-500 font-mono">
              {subtitle}
            </p>
          )}
        </header>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
};
