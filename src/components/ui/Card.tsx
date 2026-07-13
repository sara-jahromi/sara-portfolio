import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  as: Component = "div",
  id,
  ...props
}) => {
  return (
    <Component
      id={id}
      className={`bg-brand-card border border-brand-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
