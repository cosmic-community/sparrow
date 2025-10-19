// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getProduct, getProductReviews } from '@/lib/cosmic'
import ProductGallery from '@/components/ProductGallery'
import ReviewsList from '@/components/ReviewsList'

export const revalidate = 60

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProduct(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }
  
  return {
    title: product.title,
    description: product.metadata?.description?.substring(0, 160) || '',
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const [product, reviews] = await Promise.all([
    getProduct(slug),
    getProductReviews(slug),
  ])
  
  if (!product) {
    notFound()
  }
  
  const inStock = product.metadata?.in_stock ?? false
  const price = product.metadata?.price ?? 0
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div>
          <ProductGallery product={product} />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-blue-600">
              ${price.toFixed(2)}
            </span>
            {inStock ? (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                In Stock
              </span>
            ) : (
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            )}
          </div>
          
          {product.metadata?.sku && (
            <p className="text-gray-600 mb-6">
              SKU: {product.metadata.sku}
            </p>
          )}
          
          {product.metadata?.description && (
            <div 
              className="prose max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: product.metadata.description }}
            />
          )}
          
          <button
            disabled={!inStock}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
              inStock
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
      
      {/* Reviews Section */}
      {reviews.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Customer Reviews
          </h2>
          <ReviewsList reviews={reviews} />
        </div>
      )}
    </div>
  )
}