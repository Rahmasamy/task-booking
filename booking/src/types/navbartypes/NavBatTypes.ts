export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface RabighNavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavLink[];
  language?: 'SAR' | 'EN';
  onLanguageToggle?: () => void;
  onBookNowClick?: () => void;
}
