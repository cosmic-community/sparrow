import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.metadata?.product_images?.[0]
  const price = product.metadata?.price ?? 0
  const inStock = product.metadata?.in_stock ?? false
  
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        {firstImage && (
          <div className="relative h-64 overflow-hidden bg-gray-100">
            <img
              src={`${firstImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {product.title}
          </h3>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold text-blue-600">
              ${price.toFixed(2)}
            </span>
            {inStock ? (
              <span className="text-green-600 text-sm font-semibold">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 text-sm font-semibold">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}