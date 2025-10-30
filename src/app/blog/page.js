// app/blog/page.js
const posts = [
  {
    id: 1,
    title: "Workshop na Escola XYZ",
    date: "15 Out 2024",
    image: "/images/workshop1.jpg",
    excerpt: "Levámos o TejoOne a 50 alunos..."
  },
  {
    id: 2,
    title: "Winter School 2024",
    date: "10 Jan 2025",
    image: "/images/winter-school.jpg",
    excerpt: "Uma semana intensiva de aprendizagem..."
  }
]

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}