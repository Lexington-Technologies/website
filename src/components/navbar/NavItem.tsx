import { ReactNode } from 'react';

interface NavItemProps {
  label: string;
  href?: string;
  children?: ReactNode;
}

export function NavItem({ label, href, children }: NavItemProps) {
  return (
    <div className="relative group">
      <a 
        href={href} 
        className="text-gray-600 hover:text-gray-900 transition-colors py-2 inline-block"
      >
        {label}
      </a>
      
      {children && (
        <div className="absolute left-0 top-full w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          {children}
        </div>
      )}
    </div>
  );
}