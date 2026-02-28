import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Sparkles, Shield, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { ProductSkeleton } from '../components/ProductSkeleton';
import { useGetAllProducts } from '../hooks/useQueries';
import { useAddProduct } from '../hooks/useQueries';
import { SEED_PRODUCTS } from '../lib/seedData';

function useSeedProducts() {
  const { data: products, isLoading } = useGetAllProducts();
  const addProduct = useAddProduct();

  useEffect(() => {
    if (!isLoading && products && products.length === 0) {
      // Seed products one by one
      const seedAll = async () => {
        for (const product of SEED_PRODUCTS) {
          try {
            await addProduct.mutateAsync(product);
          } catch {
            // Already exists or error, continue
          }
        }
      };
      seedAll();
    }
  }, [isLoading, products]);
}

export function HomePage() {
  useSeedProducts();
  const { data: products, isLoading } = useGetAllProducts();

  const featuredProducts = products?.slice(0, 6) ?? [];

  const features = [
    {
      icon: <Sparkles size={20} className="text-gold" />,
      title: 'Artisan Craftsmanship',
      description: 'Every piece is crafted with meticulous attention to detail, blending traditional techniques with modern precision.',
    },
    {
      icon: <Shield size={20} className="text-gold" />,
      title: 'Premium Materials',
      description: 'We source only the finest glass, metals, and hardware to ensure lasting beauty and structural integrity.',
    },
    {
      icon: <Ruler size={20} className="text-gold" />,
      title: 'Custom Dimensions',
      description: 'All products are available in custom sizes to perfectly fit your unique space and architectural vision.',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1400x600.png"
            alt="Elegant modern interior with glass elements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-gray-900/80 via-warm-gray-900/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 animate-fade-in">
              Premium Home Glass Products
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in">
              Where Light
              <br />
              <em className="text-gold-light not-italic">Meets Design</em>
            </h1>
            <p className="font-body text-base md:text-lg text-warm-gray-200 leading-relaxed mb-10 max-w-lg animate-fade-in">
              Discover our curated collection of mirrors, windows, glass doors, and decorative glass pieces — each crafted to transform your living spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/catalog">
                <Button
                  size="lg"
                  className="font-body text-sm tracking-widest uppercase bg-gold hover:bg-gold-dark text-white border-0 rounded-none px-8 py-6 shadow-gold transition-all duration-300"
                >
                  Explore Collection
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/catalog">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-body text-sm tracking-widest uppercase border-white/60 text-white hover:bg-white/10 rounded-none px-8 py-6 transition-all duration-300"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-warm-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold/30">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display text-base text-warm-gray-100 mb-1">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-warm-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
                Our Collection
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Featured Products
              </h2>
            </div>
            <Link
              to="/catalog"
              className="flex items-center gap-2 font-body text-sm tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
            >
              View All Products
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
              : featuredProducts.map((product) => (
                  <ProductCard key={product.id.toString()} product={product} />
                ))}
          </div>

          {!isLoading && featuredProducts.length === 0 && (
            <div className="text-center py-16 text-warm-gray-400 font-body">
              Loading products...
            </div>
          )}
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-20 md:py-28 bg-warm-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
                About GlassHome Studio
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Transforming Spaces
                <br />
                <em className="text-gold not-italic">Through Glass</em>
              </h2>
              <p className="font-body text-base text-warm-gray-500 leading-relaxed mb-5">
                At GlassHome Studio, we believe that glass is more than a material — it's a medium for light, space, and beauty. Our curated collection spans decorative mirrors, architectural windows, elegant glass doors, and artisan ornaments.
              </p>
              <p className="font-body text-base text-warm-gray-500 leading-relaxed mb-8">
                Each product is selected for its quality, craftsmanship, and ability to elevate the spaces we call home. Whether you're renovating, building, or simply refreshing a room, we have the perfect glass solution for you.
              </p>
              <Link to="/catalog">
                <Button
                  variant="outline"
                  className="font-body text-xs tracking-widest uppercase border-gold text-gold hover:bg-gold hover:text-white rounded-none px-8 py-5 transition-all duration-300"
                >
                  Explore Our Catalog
                  <ArrowRight size={14} className="ml-2" />
                </Button>
              </Link>
            </div>

            {/* Stats / Visual */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '6+', label: 'Product Categories' },
                { number: '12+', label: 'Premium Products' },
                { number: '100%', label: 'Custom Sizing' },
                { number: '∞', label: 'Design Possibilities' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-card border border-warm-gray-200 p-8 flex flex-col items-center justify-center text-center shadow-glass"
                >
                  <span className="font-display text-4xl text-gold mb-2">{stat.number}</span>
                  <span className="font-body text-xs tracking-widest uppercase text-warm-gray-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-warm-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/hero-banner.dim_1400x600.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Get Started Today
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="font-body text-base text-warm-gray-300 leading-relaxed mb-10">
            Browse our full collection and request a personalized quote for your project. Our team is ready to help you find the perfect glass solution.
          </p>
          <Link to="/catalog">
            <Button
              size="lg"
              className="font-body text-sm tracking-widest uppercase bg-gold hover:bg-gold-dark text-white border-0 rounded-none px-10 py-6 shadow-gold transition-all duration-300"
            >
              Browse Full Catalog
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
