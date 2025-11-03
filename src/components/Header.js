import Link from 'next/link'

export default function Header({ className = '' }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 text-white p-4 shadow-md ${className}`}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-14 w-auto" />
        </Link>
        <nav className="flex gap-6 text-sm md:text-base">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/tejoone" className="hover:text-blue-400 transition-colors">TejoOne</Link>
          <Link href="/associacao" className="hover:text-blue-400 transition-colors">Associação</Link>
          <Link href="/projetos" className="hover:text-blue-400 transition-colors">Projetos</Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link href="/contactos" className="hover:text-blue-400 transition-colors">Contactos</Link>
        </nav>
      </div>
    </header>
  )
}
