import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Espaço ao Cubo',
  description: 'Developing the first Portuguese CubeSat by students.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}