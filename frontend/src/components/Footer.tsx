import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'glasshome-studio');

  return (
    <footer className="bg-warm-gray-900 text-warm-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/logo-icon.dim_128x128.png"
                alt="GlassHome Studio"
                className="w-8 h-8 object-contain opacity-80"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg text-warm-gray-100 tracking-widest uppercase">
                  GlassHome
                </span>
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold">
                  Studio
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-warm-gray-400 leading-relaxed max-w-xs">
              Crafting light, space, and beauty through exceptional glass products for the modern home.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-body text-sm text-warm-gray-400 hover:text-warm-gray-100 transition-colors">
                Home
              </Link>
              <Link to="/catalog" className="font-body text-sm text-warm-gray-400 hover:text-warm-gray-100 transition-colors">
                Product Catalog
              </Link>
              <Link to="/catalog" className="font-body text-sm text-warm-gray-400 hover:text-warm-gray-100 transition-colors">
                Request a Quote
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold">
              Categories
            </h4>
            <nav className="flex flex-col gap-3">
              {['Mirrors', 'Windows', 'Slider Doors', 'Glass Doors', 'Glass Ornaments', 'Partition Walls'].map((cat) => (
                <Link
                  key={cat}
                  to="/catalog"
                  className="font-body text-sm text-warm-gray-400 hover:text-warm-gray-100 transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-gray-500 tracking-wide">
            © {year} GlassHome Studio. All rights reserved.
          </p>
          <p className="font-body text-xs text-warm-gray-500 flex items-center gap-1.5">
            Built with{' '}
            <Heart size={12} className="text-gold fill-gold" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
