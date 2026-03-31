import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 800,
          height: 220,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          padding: '20px 40px',
        }}
      >
        {/* Cube */}
        <svg width="140" height="160" viewBox="0 0 42 48">
          <polygon points="21,2 40,12 21,22 2,12" fill="#00C864" />
          <polygon points="2,12 21,22 21,46 2,36" fill="#00C864" />
          <polygon points="40,12 40,36 21,46 21,22" fill="#00C864" />
          <line x1="21" y1="2"  x2="21" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="21" y1="22" x2="2"  y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="21" y1="22" x2="40" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="21" y1="22" x2="21" y2="46" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 88, color: '#111111', lineHeight: 1 }}>
            HomeVision
          </span>
          <span style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 40, color: '#00C864', letterSpacing: 8 }}>
            3D
          </span>
        </div>
      </div>
    ),
    { width: 800, height: 220 }
  )
}
