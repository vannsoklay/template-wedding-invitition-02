export function AnimatedLeaf({ className, directions }: { className?: string; directions?: string }) {
    return (
        <div className={`${className}`}>
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={directions === "right" ? "/svgs/leaf-left.svg" : "/svgs/leaf-right.svg"}
                    alt="Animated Leaf"
                    className="w-full h-full animate-spin-leaf"
                />
            </div>
        </div>
    );
}