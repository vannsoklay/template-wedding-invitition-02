export function AnimatedButterfly({ className }: { className?: string }) {
    return (
      <div className={`${className} animate-flutter`}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="animate-wings">
            <path d="M25 25C25 25 10 10 5 20C0 30 25 25 25 25C25 25 40 10 45 20C50 30 25 25 25 25Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
          </g>
          <circle cx="25" cy="25" r="2" fill="#8B4513"/>
          <path d="M25 27L25 35" stroke="#8B4513" strokeWidth="1"/>
        </svg>
      </div>
    )
  }
  
  