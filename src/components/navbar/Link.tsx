interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a 
      href={href}
      className="text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
    </a>
  );
}