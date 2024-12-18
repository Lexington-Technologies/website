import { NavLinks } from './navbar/NavLinks';
import { MobileMenu } from './navbar/MobileMenu';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img className="w-56 justify-center items-center mb-5" src="/logo.png"/>
        </Link>
        </div>        
        <NavLinks />
        <MobileMenu />
        
        <div
          className=" md:block w-12 h-12 cursor-default overflow-hidden rounded-full border border-gray-200 relative"
          aria-label="Language Selector"
        >
        <img 
          src="/flag.jpg" 
          alt="Flag" 
          className="absolute inset-0 w-full h-full opacity-50 object-cover" 
        />
        <span className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold">
          NG
        </span>
      </div>
        </div>
    </header>
  );
}