// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img src="/images/logo.png" alt="Logo" className="h-15" />
        
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/tejoone" className="hover:text-blue-400">TejoOne</Link>
          <Link href="/associacao" className="hover:text-blue-400">Associação</Link>
          <Link href="/projetos" className="hover:text-blue-400">Projetos</Link>
          <Link href="/blog" className="hover:text-blue-400">Blog</Link>
          <Link href="/contactos" className="hover:text-blue-400">Contactos</Link>
        </div>
      </div>
    </nav>
  )
}