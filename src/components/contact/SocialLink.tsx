import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export function SocialLinks() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Connect With Us</h3>
      <div className="space-y-3">
        <SocialLink
          href="https://twitter.com/Lextech_Ltd"
          icon={<Twitter className="h-5 w-5" />}
          label="@Lextech_Ltd"
        />
        <SocialLink
          href="https://www.instagram.com/lexington_technologies/"
          icon={<Instagram className="h-5 w-5" />}
          label="@lexington_technologies"
        />
        <SocialLink
          href="https://ng.linkedin.com/company/lexington-technologies-limited"
          icon={<Linkedin className="h-5 w-5" />}
          label="Lexington Technologies Limited"
        />
        <SocialLink
          href="https://facebook.com/LexingtonTechnologies"
          icon={<Facebook className="h-5 w-5" />}
          label="Lexington Technologies"
        />
      </div>
    </div>
  );
}