export interface EmailComponentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface EmailTemplate {
  id: string;
  name: { de: string; en: string };
  description: { de: string; en: string };
  component: React.ComponentType;
  htmlCode: string;
}

export interface AccessibilityCheck {
  id: string;
  name: string;
  status: 'passed' | 'failed' | 'warning';
  message: string;
}

export interface RenderingClient {
  id: string;
  name: string;
  lightModeSupport: boolean;
  darkModeSupport: boolean;
  notes: string;
}
