import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata?.rating?.key || '0')
  const customerName = review.metadata?.customer_name || 'Anonymous'
  const reviewText = review.metadata?.review_text || ''
  const verifiedPurchase = review.metadata?.verified_purchase || false
  
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900">{customerName}</h4>
            {verifiedPurchase && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                Verified Purchase
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {renderStars()}
          </div>
        </div>
      </div>
      
      {reviewText && (
        <p className="text-gray-700 leading-relaxed">{reviewText}</p>
      )}
    </div>
  )
}