import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const image = collection.metadata?.collection_image
  
  return (
    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
      {image && (
        <img
          src={`${image.imgix_url}?w=1200&h=640&fit=crop&auto=format,compress`}
          alt={collection.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <div className="p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
          {collection.metadata?.description && (
            <p className="text-gray-200">{collection.metadata.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}