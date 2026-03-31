import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HomeVision 3D | Photorealistic Architectural Renders',
  description:
    'Professional 3D architectural visualization — interior renders, exterior renders, and 360° virtual tours that bring your projects to life before construction begins.',
  keywords: [
    'architectural rendering',
    '3D visualization',
    'interior renders',
    'exterior renders',
    '360 virtual tour',
    'photorealistic',
  ],
  openGraph: {
    title: 'HomeVision 3D | Photorealistic Architectural Renders',
    description:
      'Visualize the Future of Your Homes — Before the Foundation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName === 'IMG') e.preventDefault();
          });
        `}} />
      </body>
    </html>
  )
}
