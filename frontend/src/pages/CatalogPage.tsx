import { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductSkeleton } from '../components/ProductSkeleton';
import { useGetAllProducts } from '../hooks/useQueries';
import { CATEGORIES, type Category } from '../lib/seedData';
import type { Product } from '../backend';

export function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const { data: products, isLoading } = useGetAllProducts();

  const categoryCounts = useMemo(() => {
    if (!products) return {};
    return CATEGORIES.reduce((acc, cat) => {
      if (cat === 'All') return acc;
      acc[cat] = products.filter((p: Product) => p.category === cat).length;
      return acc;
    }, {} as Record<string, number>);
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (selectedCategory === 'All') return products;
    return products.filter((p: Product) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-warm-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Our Collection
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white">
            Product Catalog
          </h1>
          <p className="font-body text-base text-warm-gray-300 mt-4 max-w-xl leading-relaxed">
            Explore our complete range of premium glass products for every room and style.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-10">
            <CategoryFilter
              selected={selectedCategory}
              onChange={setSelectedCategory}
              counts={categoryCounts}
            />
          </div>

          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="font-body text-sm text-warm-gray-500">
              {isLoading ? (
                'Loading products...'
              ) : (
                <>
                  <span className="text-foreground font-medium">{filteredProducts.length}</span>
                  {' '}product{filteredProducts.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && (
                    <> in <span className="text-gold">{selectedCategory}</span></>
                  )}
                </>
              )}
            </p>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="font-body text-xs tracking-widest uppercase text-warm-gray-400 hover:text-gold transition-colors"
              >
                Clear Filter ×
              </button>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
              : filteredProducts.map((product: Product) => (
                  <ProductCard key={product.id.toString()} product={product} />
                ))}
          </div>

          {!isLoading && filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-warm-gray-400 mb-3">
                No products found
              </p>
              <p className="font-body text-sm text-warm-gray-400 mb-6">
                No products in the "{selectedCategory}" category yet.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="font-body text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors border border-gold px-6 py-3"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
