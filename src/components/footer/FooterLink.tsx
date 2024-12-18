interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="block text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}