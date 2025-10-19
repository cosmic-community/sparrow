'use client'

import { useState } from 'react'
import { Product } from '@/types'

interface ProductGalleryProps {
  product: Product
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.metadata?.product_images || []
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  if (images.length === 0) {
    return (
      <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    )
  }
  
  const selectedImage = images[selectedIndex]
  
  // Changed: Add safety check for selectedImage to handle potential undefined case
  if (!selectedImage) {
    return (
      <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
        <p className="text-gray-400">Image not found</p>
      </div>
    )
  }
  
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={`${selectedImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
          alt={product.title}
          className="w-full h-96 object-cover"
        />
      </div>
      
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-blue-600'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                alt={`${product.title} ${index + 1}`}
                className="w-full h-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}