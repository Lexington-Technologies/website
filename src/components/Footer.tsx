import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <Link
      to={to}
      className="block text-gray-300 hover:text-sky-300 transition-colors"
    >
      {children}
    </Link>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-400 mb-4">{title}</h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#121212] text-sky-300 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-5">
              <img 
                src="/white lexington logo.png" 
                alt="Lexington Technologies Logo" 
                className="max-h-16 mb-6"
              />
              <p className="text-gray-300 text-lg mb-6">
                Driving digital transformation through innovative technologies and comprehensive solutions.
              </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn title="ABOUT">
              <FooterLink to="/about"> About Us</FooterLink>
              <FooterLink to="#"> Mission & Vision</FooterLink>
              <FooterLink to="#"> Area of Expertise</FooterLink>
              <FooterLink to="#"> Awards and Recognition</FooterLink>
              <FooterLink to="#"> Partners & Accreditation</FooterLink>
            </FooterColumn>

            <FooterColumn title="SERVICES">
              <FooterLink to="#"> Automation of Processes</FooterLink>
              <FooterLink to="#"> Capacity Building Training</FooterLink>
              <FooterLink to="#"> Software Development</FooterLink>
              <FooterLink to="/services"> see more...</FooterLink>
            </FooterColumn>

            <FooterColumn title="PRODUCTS">
              <FooterLink to=""> E-GovConnect</FooterLink>
              <FooterLink to=""> Result Delivery System (RDS)</FooterLink>
              <FooterLink to="#"> SME Portal</FooterLink>
              <FooterLink to="#"> Visitors Management System (VMS)</FooterLink>
              <FooterLink to="/products"> see more...</FooterLink>
            </FooterColumn>

            <FooterColumn title="QUICK LINKS">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/contact-us">Contact Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/products">Products</FooterLink>
            </FooterColumn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 Lexington Technologies</p>
          <Link to="/privacy" className="text-gray-400 hover:text-sky-300">
            Privacy Policy
          </Link>
          <div className="flex gap-6">
            <a href="https://ng.linkedin.com/company/lexington-technologies-limited" className="text-gray-400 hover:text-sky-300" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-sky-300" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/Lextech_Ltd" className="text-gray-400 hover:text-sky-300" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/lexington_technologies" className="text-gray-400 hover:text-sky-300" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}