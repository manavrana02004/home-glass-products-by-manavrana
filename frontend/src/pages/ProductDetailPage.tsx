import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetProduct } from '../hooks/useQueries';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';

export function ProductDetailPage() {
  const { id } = useParams({ from: '/product/$id' });
  const productId = BigInt(id);
  const { data: product, isLoading, isError } = useGetProduct(productId);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <Skeleton className="h-4 w-32 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <p className="font-display text-3xl text-warm-gray-400 mb-4">Product Not Found</p>
        <p className="font-body text-sm text-warm-gray-400 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/catalog">
          <Button
            variant="outline"
            className="font-body text-xs tracking-widest uppercase border-gold text-gold hover:bg-gold hover:text-white rounded-none px-8 py-5"
          >
            Back to Catalog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 font-body text-sm text-warm-gray-500 hover:text-gold transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Catalog
        </Link>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden bg-warm-gray-50 border border-warm-gray-200">
              <img
                src={product.imagePath}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-gold/30 -z-10" />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {/* Category */}
            <Badge
              variant="outline"
              className="self-start font-body text-[10px] tracking-widest uppercase border-gold text-gold rounded-none px-3 py-1 mb-4"
            >
              {product.category}
            </Badge>

            {/* Name */}
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Short description */}
            <p className="font-body text-base text-warm-gray-500 leading-relaxed mb-6 border-l-2 border-gold pl-4">
              {product.shortDescription}
            </p>

            {/* Full description */}
            <p className="font-body text-sm text-warm-gray-600 leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-2 mb-8">
              {['Premium quality materials', 'Custom sizing available', 'Professional installation support'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-gold flex-shrink-0" />
                  <span className="font-body text-sm text-warm-gray-600">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                size="lg"
                className="font-body text-sm tracking-widest uppercase bg-gold hover:bg-gold-dark text-white border-0 rounded-none px-8 py-6 shadow-gold transition-all duration-300 flex-1"
              >
                <Phone size={16} className="mr-2" />
                Request a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-body text-sm tracking-widest uppercase border-warm-gray-300 text-warm-gray-600 hover:border-gold hover:text-gold rounded-none px-8 py-6 transition-all duration-300"
              >
                <Mail size={16} className="mr-2" />
                Contact Us
              </Button>
            </div>

            {/* Divider */}
            <div className="border-t border-warm-gray-200 pt-8">
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                Specifications
              </h3>
              {product.specs && product.specs.length > 0 ? (
                <Table>
                  <TableBody>
                    {product.specs.map(([key, value], i) => (
                      <TableRow key={i} className="border-warm-gray-100">
                        <TableCell className="font-body text-xs tracking-wide uppercase text-warm-gray-500 py-3 pl-0 w-1/3">
                          {key}
                        </TableCell>
                        <TableCell className="font-body text-sm text-foreground py-3 pr-0">
                          {value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="font-body text-sm text-warm-gray-400">
                  Contact us for detailed specifications.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
