import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Catalog', path: '/catalog' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/generated/logo-icon.dim_128x128.png"
              alt="GlassHome Studio logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg md:text-xl text-foreground tracking-widest uppercase">
                GlassHome
              </span>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-gold border-b border-gold pb-0.5'
                    : 'text-warm-gray-600 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/catalog">
              <Button
                variant="outline"
                size="sm"
                className="font-body text-xs tracking-widest uppercase border-gold text-gold hover:bg-gold hover:text-white transition-all duration-200 rounded-none px-6"
              >
                Request a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-warm-gray-200 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-gold'
                  : 'text-warm-gray-600 hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/catalog" onClick={() => setMobileOpen(false)}>
            <Button
              variant="outline"
              size="sm"
              className="w-full font-body text-xs tracking-widest uppercase border-gold text-gold hover:bg-gold hover:text-white transition-all duration-200 rounded-none"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
