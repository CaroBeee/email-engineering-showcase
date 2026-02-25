import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  padding?: string;
  backgroundColor?: string;
  className?: string;
}

export function EmailSection({ 
  children, 
  padding = '24px 32px', 
  backgroundColor = 'transparent',
  className = ''
}: SectionProps) {
  return (
    <tr>
      <td 
        className={`email-section ${className}`}
        style={{ 
          padding,
          backgroundColor
        }}
      >
        {children}
      </td>
    </tr>
  );
}

