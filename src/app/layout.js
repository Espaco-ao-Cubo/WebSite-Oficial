// src/app/layout.js
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Espaço ao Cubo - TejoOne',
  description: 'O primeiro satélite português feito por estudantes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}