export function AnimatedCouple() {
    return (
      <div className="w-48 h-48 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Groom */}
            <g className="animate-groom-walk">
              <path
                d="M80 60 Q85 40 100 40 Q115 40 120 60 L125 140 L75 140 Z"
                fill="#8B4513"
                stroke="black"
                strokeWidth="1"
              />
              {/* Legs */}
              <path
                d="M85 140 L83 160 M115 140 L117 160"
                stroke="black"
                strokeWidth="1"
                className="animate-legs"
              />
            </g>
            {/* Bride */}
            <g className="animate-bride-walk">
              <path
                d="M110 60 Q115 40 130 40 Q145 40 150 60 Q160 100 160 140 Q130 160 100 140 Z"
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              {/* Dress movement */}
              <path
                d="M160 140 Q130 145 100 140"
                stroke="black"
                strokeWidth="0.5"
                fill="none"
                className="animate-dress"
              />
            </g>
          </svg>
        </div>
      </div>
    )
  }
  
  