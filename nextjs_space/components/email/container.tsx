import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  width?: number;
  backgroundColor?: string;
  className?: string;
}

export function EmailContainer({ 
  children, 
  width = 680, 
  backgroundColor = '#fafafa',
  className = ''
}: ContainerProps) {
  return (
    <table 
      role="presentation" 
      cellPadding="0" 
      cellSpacing="0" 
      width="100%" 
      className={`email-container-wrapper ${className}`}
      style={{ backgroundColor }}
    >
      <tbody>
        <tr>
          <td align="center" style={{ padding: '40px 20px' }}>
            {/* Ghost table for Outlook */}
            <div dangerouslySetInnerHTML={{ __html: `<!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" width="${width}" align="center"><tr><td><![endif]-->` }} />
            <table 
              role="presentation" 
              cellPadding="0" 
              cellSpacing="0" 
              width={width}
              className="email-container email-bg"
              style={{ 
                maxWidth: `${width}px`, 
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <tbody>
                {children}
              </tbody>
            </table>
            <div dangerouslySetInnerHTML={{ __html: '<!--[if mso]></td></tr></table><![endif]-->' }} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
