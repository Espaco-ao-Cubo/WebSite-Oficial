import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import 'server-only'

// Caminho correto para os posts do blog
const postsDirectory = path.join(process.cwd(), 'src/data/blog_posts')

/**
 * Obtém todos os posts para um determinado locale
 */
export function getAllPosts(locale = 'pt') {
  const localePath = path.join(postsDirectory, locale)
  
  // Verifica se o diretório existe
  if (!fs.existsSync(localePath)) {
    console.warn(`Directory not found: ${localePath}`)
    return []
  }

  const fileNames = fs.readdirSync(localePath)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" do nome do arquivo para obter o slug
      const slug = fileName.replace(/\.md$/, '')

      // Lê o arquivo markdown
      const fullPath = path.join(localePath, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Usa gray-matter para extrair os metadados
      const matterResult = matter(fileContents)

      // Combina os dados com o slug
      return {
        slug,
        ...matterResult.data,
      }
    })

  // Ordena os posts por data (mais recentes primeiro)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Obtém os dados de um post específico
 */
export async function getPostData(slug, locale = 'pt') {
  const fullPath = path.join(postsDirectory, locale, `${slug}.md`)
  
  // Verifica se o arquivo existe
  if (!fs.existsSync(fullPath)) {
    console.warn(`Post not found: ${fullPath}`)
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Usa gray-matter para extrair os metadados e conteúdo
  const matterResult = matter(fileContents)

  // Converte markdown para HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combina os dados com o slug e HTML
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  }
}

/**
 * Obtém todos os slugs dos posts
 */
export function getAllPostSlugs(locale = 'pt') {
  const localePath = path.join(postsDirectory, locale)
  
  if (!fs.existsSync(localePath)) {
    return []
  }

  const fileNames = fs.readdirSync(localePath)
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      }
    })
}

/**
 * Obtém posts por categoria
 */
export function getPostsByCategory(category, locale = 'pt') {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => post.category === category)
}

/**
 * Obtém posts por tag
 */
export function getPostsByTag(tag, locale = 'pt') {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => post.tags && post.tags.includes(tag))
}

/**
 * Obtém posts por autor
 */
export function getPostsByAuthor(author, locale = 'pt') {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => post.author === author)
}

/**
 * Obtém todas as categorias únicas
 */
export function getAllCategories(locale = 'pt') {
  const allPosts = getAllPosts(locale)
  const categories = new Set()
  allPosts.forEach(post => {
    if (post.category) {
      categories.add(post.category)
    }
  })
  return Array.from(categories)
}

/**
 * Obtém todas as tags únicas
 */
export function getAllTags(locale = 'pt') {
  const allPosts = getAllPosts(locale)
  const tags = new Set()
  allPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags)
}

/**
 * Obtém posts relacionados baseado em tags
 */
export function getRelatedPosts(currentSlug, locale = 'pt', limit = 3) {
  const allPosts = getAllPosts(locale)
  const currentPost = allPosts.find(post => post.slug === currentSlug)
  
  if (!currentPost || !currentPost.tags) {
    return []
  }

  // Calcula a similaridade baseada em tags compartilhadas
  const postsWithScore = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const sharedTags = post.tags 
        ? post.tags.filter(tag => currentPost.tags.includes(tag)).length 
        : 0
      return {
        ...post,
        score: sharedTags,
      }
    })
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return postsWithScore
}