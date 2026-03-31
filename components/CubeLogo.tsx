export default function CubeLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,3 28,9 16,15 4,9" fill="#00C864"/>
      <polygon points="4,9 16,15 16,29 4,23" fill="#00C864"/>
      <polygon points="28,9 28,23 16,29 16,15" fill="#00C864"/>
      <line x1="16" y1="3"  x2="16" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="15" x2="4"  y2="9"  stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="15" x2="28" y2="9"  stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="15" x2="16" y2="29" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
