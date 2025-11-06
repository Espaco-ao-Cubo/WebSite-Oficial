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
      <body className="relative">
        <Header className="fixed top-0 left-0 w-full z-50" />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}