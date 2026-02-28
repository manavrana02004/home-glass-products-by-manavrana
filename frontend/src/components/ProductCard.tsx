import { Link } from '@tanstack/react-router';
import type { Product } from '../backend';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.imagePath || '/assets/generated/product-mirror.dim_600x600.png';

  return (
    <Link
      to="/product/$id"
      params={{ id: product.id.toString() }}
      className="group block bg-card border border-warm-gray-200 overflow-hidden hover-lift shadow-glass"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-warm-gray-50">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className="font-body text-[10px] tracking-widest uppercase bg-cream/90 text-warm-gray-600 border-0 rounded-none px-2 py-1"
          >
            {product.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg text-foreground mb-2 leading-snug group-hover:text-gold transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-body text-sm text-warm-gray-500 leading-relaxed line-clamp-2 mb-4">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-1.5 text-gold font-body text-xs tracking-widest uppercase">
          <span>View Details</span>
          <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
