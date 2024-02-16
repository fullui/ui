import type { CollectionEntry, ContentCollectionKey } from 'astro:content'

export default ({
  slug,
  collection,
}: CollectionEntry<ContentCollectionKey>): string | undefined => {
  if (collection === 'reviews') return
  const routes: any = {
    // categories: 'categorieen',
    // forms: 'formulieren',
    // policies: 'beleid',
    // posts: 'posts',
    // products: 'producten',
    // services: 'diensten',
    // persons: 'persoonen',
    categories: 'categories',
    forms: 'forms',
    policies: 'policies',
    posts: 'posts',
    products: 'products',
    services: 'services',
    persons: 'persons',
  }
  if (collection == 'pages' && slug === 'index') return '/'
  if (collection === 'pages') return slug
  else return `/${routes[collection]}/${slug}`
}
