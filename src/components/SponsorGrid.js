import fs from 'fs'
import path from 'path'
import LogoLoop from '../app/reactbits/LogoLoop'

export default function SponsorGrid() {
  // Read all images from public/images/sponsors
  const dir = path.join(process.cwd(), 'public/images/sponsors')
  const files = fs.readdirSync(dir)

  const sponsors = files
    .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
    .map((file) => ({
      src: `/images/sponsors/${file}`,
      alt: file.replace(/\.[^/.]+$/, ''),
    }))

  return (
    <section className="py-20 lg:py-5 bg-[#1a3a2e]">
      <LogoLoop
        logos={sponsors}
        speed={40}
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        className="py-8"
      />
    </section>
  )
}
