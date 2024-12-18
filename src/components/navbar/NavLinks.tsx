import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinksProps {
  isMobile?: boolean;
}

interface NavItem {
  label: string;
  to?: string;
  href?: string;
  children?: { label: string; to: string }[];
  hideOnRoutes?: string[]; 
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    to: '/',
    href: '/', 
  },
  {
    label: 'About',
    href: '#about',
    hideOnRoutes: ['/services', '/products', '/contact-us','/news','/news/:id','/vision-mission-value'],
    children: [
      { label: 'Mission & Vision', to: '#mission' },
      { label: 'Area of Expertise', to: '#expertise' },
      { label: 'Awards and Recognition', to: '#awards' },
      { label: 'Partners & Accreditation', to: '#partners' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    hideOnRoutes: ['/services', '/products', '/contact-us','/news','/news/:id','/vision-mission-value'],
    children: [
      { label: 'Automation of Processes', to: '#services' },
      { label: 'Capacity Building Training', to: '#services' },
      { label: 'Software Development', to: '#services' },
      { label: 'See more...', to: '/services' },
    ],
  },
  {
    label: 'Products',
    href: '#products',
    hideOnRoutes: ['/services', '/products', '/contact-us','/news','/news/:id','/vision-mission-value'],
    children: [
      { label: 'E-GovConnect', to: '#products' },
      { label: 'Result Delivery System (RDS)', to: '#products' },
      { label: 'SME Portal', to: '#products' },
      { label: 'Visitors Management System (VMS)', to: '#products' },
      { label: 'See more...', to: '/products' },
    ],
  },
  {
    label: 'News & Updates',
    href: '#news',
    hideOnRoutes: ['/services', '/products', '/contact-us','/news','/news/:id','/vision-mission-value'],
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
    href: '#contact',
    hideOnRoutes: ['/services', '/products', '/contact-us','/news','/news/:id','/vision-mission-value'],
  },
];

export function NavLinks({ isMobile = false }: NavLinksProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleDropdownClick = (label: string) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  const handleNavigation = (item: NavItem) => {
    // If on homepage and href is provided, scroll to section
    if (location.pathname === '/' && item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Improved route matching function
  const isRouteHidden = (hideOnRoutes: string[] | undefined): boolean => {
    if (!hideOnRoutes) return false;

    return hideOnRoutes.some(route => {
      // Handle dynamic routes with :id
      if (route.includes(':')) {
        const routeRegex = new RegExp(`^${route.replace(/:[^/]+/g, '[^/]+')}$`);
        return routeRegex.test(location.pathname);
      }
      
      // Exact match for non-dynamic routes
      return route === location.pathname;
    });
  };

  // Determine which items should be shown based on current route
  const visibleItems = navItems.filter(item => {
    // Always show Home and Contact Us
    if (item.label === 'Home' || item.label === 'Contact Us') return true;
    
    // On contact page, only show Home and Contact Us
    if (location.pathname === '/contact-us') return false;

    // On contact page, only show Home and Contact Us
    if (location.pathname === '/news') return false;
    
    // Hide items that are specifically marked to be hidden on current route
    return !isRouteHidden(item.hideOnRoutes);
  });

  return (
    <nav
      className={`
        ${
          isMobile 
            ? 'flex flex-col space-y-4 p-4' 
            : 'hidden md:flex items-center gap-8 px-8 py-4'
        }
      `}
    >
      {visibleItems.map((item) => (
        <div
          key={item.label}
          className={`
            relative 
            ${isMobile ? 'w-full' : 'group'}
          `}
        >
          {item.children ? (
            <>
              <button
                onClick={() => {
                  handleDropdownClick(item.label);
                  handleNavigation(item);
                }}
                className={`
                  flex items-center gap-1 
                  text-sky-700 font-semibold 
                  hover:text-sky-900 
                  transition-all duration-300
                  relative
                  group/button
                  ${isMobile ? 'w-full justify-between py-2' : 'py-2'}
                `}
                aria-expanded={
                  isMobile ? activeDropdown === item.label : undefined
                }
              >
                {item.label}
                <ChevronDown
                  className={`
                    w-4 h-4 
                    text-sky-500 
                    transition-all duration-200 
                    ${
                      isMobile && activeDropdown === item.label
                        ? 'rotate-180'
                        : ''
                    }
                    ${!isMobile ? 'group-hover:rotate-180' : ''}
                  `}
                />
                <span 
                  className="
                    absolute bottom-0 left-0 
                    w-0 group-hover/button:w-full 
                    h-0.5 bg-sky-500 
                    transition-all duration-300
                  "
                ></span>
              </button>

              <div
                className={`
                  ${
                    isMobile
                      ? `${
                          activeDropdown === item.label
                            ? 'max-h-96'
                            : 'max-h-0'
                        } overflow-hidden transition-all duration-300`
                      : 'absolute left-0 top-full w-56 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-sky-100'
                  }
                `}
              >
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.to}
                    onClick={() => {
                      if (location.pathname === '/' && child.to.startsWith('#')) {
                        const element = document.querySelector(child.to);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`
                      block text-sky-700 
                      hover:text-sky-900 hover:bg-sky-50 
                      transition-colors 
                      relative 
                      group/child
                      ${isMobile ? 'py-2 px-4' : 'px-4 py-2 text-sm'}
                    `}
                  >
                    {child.label}
                    <span 
                      className="
                        absolute bottom-0 left-0 
                        w-0 group-hover/child:w-full 
                        h-0.5 bg-sky-500 
                        transition-all duration-300
                      "
                    ></span>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link
              to={item.to || item.href || '#'}
              onClick={() => handleNavigation(item)}
              className ={`
                block text-sky-700 font-semibold 
                hover:text-sky-900 
                transition-colors 
                relative 
                group/link
                ${isMobile ? 'w-full py-2' : 'py-2'}
              `}
            >
              {item.label}
              <span 
                className="
                  absolute bottom-0 left-0 
                  w-0 group-hover/link:w-full 
                  h-0.5 bg-sky-500 
                  transition-all duration-300
                "
              ></span>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}