import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the FeatureCard component.
 */
export interface FeatureCardProps {
  /** Icon/graphic to show in the gold-tinted pill at the top */
  icon: React.ReactNode;
  /** Primary heading */
  title: string;
  /** Supporting copy */
  description: string;
  /** Optional extra Tailwind classes */
  className?: string;
}

/**
 * A responsive, theme-adaptive card that highlights a single feature or stat.
 * Follows shadcn/ui design-token conventions so it adapts to light/dark themes.
 */
export const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        // layout
        'bg-card text-card-foreground p-8 rounded-xl border border-border flex flex-col items-center text-center',
        // interaction
        'transition-all duration-300 ease-in-out',
        'hover:shadow-[0_8px_40px_rgba(201,169,110,0.15)] hover:-translate-y-2 hover:border-gold/30',
        className
      )}
    >
      {/* Icon container — gold-tinted pill */}
      <div className="mb-6 bg-secondary p-4 rounded-full ring-1 ring-gold/20">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 tracking-tight text-card-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
