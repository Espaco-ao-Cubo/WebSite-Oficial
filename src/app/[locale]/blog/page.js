import { getAllPosts, getAllCategories } from '@/utils/mdToBlog'
import BlogList from './BlogList'

export default async function BlogPage({ params }) {
  const { locale } = await params
  
  const posts = getAllPosts(locale)
  const categories = getAllCategories(locale)

  return (
    <BlogList 
      posts={posts} 
      categories={categories}
    />
  )
}