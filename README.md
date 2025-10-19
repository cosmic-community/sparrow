# Modern E-Commerce Storefront

![App Preview](https://imgix.cosmicjs.com/36c27670-acfe-11f0-90fb-8f36ba79c854-photo-1505740420928-5e560c06d30e-1760886825954.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, fully-responsive e-commerce storefront built with Next.js 15 and Cosmic CMS. Features a beautiful product catalog, detailed product pages, customer reviews with star ratings, and curated collections.

## ✨ Features

- 🛍️ **Product Catalog** - Browse all products with responsive grid layout
- 🔍 **Product Details** - Rich product pages with image galleries and full descriptions
- ⭐ **Customer Reviews** - Display verified customer reviews with star ratings
- 🏪 **Collections** - Curated product collections with beautiful imagery
- 📱 **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🚀 **Fast Performance** - Server-side rendering with Next.js 15
- 💾 **Dynamic Content** - Real-time updates from Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f4fae11aef143b4bede651&clone_repository=68f503511aef143b4bede66b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> Based on the content model I created for "Design a content model for an e-commerce store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for Cosmic API integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with collections
const response = await cosmic.objects
  .find({
    type: 'products',
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const products = response.objects
```

### Fetching Single Product

```typescript
// Get product by slug with full details
const response = await cosmic.objects.findOne({
  type: 'products',
  slug: 'wireless-headphones-pro',
})
.depth(1)

const product = response.object
```

### Fetching Reviews for Product

```typescript
// Get reviews for a specific product
const response = await cosmic.objects
  .find({
    type: 'reviews',
    'metadata.product': productId,
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const reviews = response.objects
```

### Fetching Collections

```typescript
// Get all collections
const response = await cosmic.objects
  .find({
    type: 'collections',
  })
  .props(['id', 'title', 'slug', 'metadata'])

const collections = response.objects
```

## 🎨 Cosmic CMS Integration

This application uses the following Cosmic object types:

### Products
- **Name** (text) - Product name
- **Description** (html-textarea) - Rich product description
- **Price** (number) - Product price
- **Product Images** (files) - Multiple product images
- **In Stock** (switch) - Stock availability
- **SKU** (text) - Product SKU
- **Collections** (objects) - Related collections

### Collections
- **Name** (text) - Collection name
- **Description** (textarea) - Collection description
- **Collection Image** (file) - Collection banner image

### Reviews
- **Customer Name** (text) - Reviewer name
- **Rating** (select-dropdown) - Star rating (1-5)
- **Review Text** (textarea) - Review content
- **Product** (object) - Related product
- **Verified Purchase** (switch) - Verification status

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the deploy button above
2. Connect your repository
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the deploy button above
2. Connect your repository
3. Add environment variables in Netlify dashboard
4. Deploy!

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<!-- README_END -->