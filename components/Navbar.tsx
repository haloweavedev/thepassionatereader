import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import Button from './Button';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'PowerSearch', href: '#search' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md py-3 border-white/20 shadow-sm' 
          : 'bg-white/30 backdrop-blur-sm py-6 border-transparent'
      }`}
    >
      <div className="w-full max-w-site mx-auto px-6 lg:px-16 flex items-center justify-between relative">
        
        {/* Left: Text Logo */}
        <div className="flex-shrink-0 z-20 w-[200px]">
          <a href="/" className="group block">
             <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-beige-900 group-hover:text-primary transition-colors duration-300">
               TPR<span className="text-primary">.</span>
             </span>
             <span className="sr-only">The Passionate Reader</span>
          </a>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-sans text-xs lg:text-sm font-semibold text-beige-900 hover:text-primary transition-colors duration-200 tracking-widest uppercase py-2 after:content-[''] after:absolute after:w-0 after:h-px after:bg-primary after:bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:flex items-center justify-end w-[200px] z-20">
          <Button variant="primary" size="sm" className="shadow-none hover:shadow-soft">
            Subscribe
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-beige-900 focus:outline-none p-2 ml-auto z-20 bg-white/40 rounded-full backdrop-blur-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-3'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-5 -rotate-45 -translate-y-2.5' : 'w-4'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-beige-50/95 backdrop-blur-xl z-10 pt-28 px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-beige-900 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-8 w-full max-w-xs">
             <Button variant="primary" fullWidth onClick={() => setMobileMenuOpen(false)}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;