export function AnimatedFrameDetail({ className, directions }: { className?: string; directions?: string }) {
    return (
        <div className={`${className}`}>
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={directions === "right" ? "/images/frame-detail.png" : "/images/frame-detail.png"}
                    alt="Animated Leaf"
                    className="w-full h-full animate-spin-leaf"
                />
            </div>
        </div>
    );
}