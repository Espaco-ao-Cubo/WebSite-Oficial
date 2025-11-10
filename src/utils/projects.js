import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'src/data/projects')

export function getAllProjects(locale = 'pt') {
  const localeDir = path.join(projectsDirectory, locale)
  
  // Check if directory exists
  if (!fs.existsSync(localeDir)) {
    return []
  }

  const fileNames = fs.readdirSync(localeDir)
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(localeDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        image: data.image || '',
        date: data.date || '',
        featured: data.featured || false,
        icon: data.icon || 'BookOpen',
        ...data,
        content,
      }
    })

  // Sort by date (newest first)
  return allProjects.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date)
    }
    return 0
  })
}

export function getProjectBySlug(slug, locale = 'pt') {
  const fullPath = path.join(projectsDirectory, locale, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    image: data.image || '',
    date: data.date || '',
    featured: data.featured || false,
    icon: data.icon || 'BookOpen',
    ...data,
    content,
  }
}

export function getFeaturedProjects(locale = 'pt', limit = 2) {
  const allProjects = getAllProjects(locale)
  return allProjects
    .filter(project => project.featured)
    .slice(0, limit)
}