import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="42" height="42" viewBox="0 0 42 42">
          <polygon points="21,3 38,12 21,21 4,12" fill="#00C864" />
          <polygon points="4,12 21,21 21,39 4,30" fill="#00C864" />
          <polygon points="38,12 38,30 21,39 21,21" fill="#00C864" />
          <line x1="21" y1="3"  x2="21" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="21" y1="21" x2="4"  y2="12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="21" y1="21" x2="38" y2="12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="21" y1="21" x2="21" y2="39" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
