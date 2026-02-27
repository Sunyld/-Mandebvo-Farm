import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false
}) => {
  return (
    <div
      className={`bg-white rounded-[var(--radius-2xl)] p-6 sm:p-8 shadow-card border border-stroke ${
        hover ? 'transition-transform duration-300 hover:scale-105' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
