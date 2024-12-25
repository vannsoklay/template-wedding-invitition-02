export function AnimatedFlower({ className, directions }: { className?: string, directions?: string }) {
  return (
    <div className={`${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={directions == "right" ? "/svgs/flower-left.svg" : "/svgs/flower-right.svg"} alt="Animated Couple" className="w-full h-full" />
      </div>
    </div>
  )
}

