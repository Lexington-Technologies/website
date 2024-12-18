interface DropdownItemProps {
  label: string;
  href: string;
}

export function DropdownItem({ label, href }: DropdownItemProps) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
    >
      {label}
    </a>
  );
}