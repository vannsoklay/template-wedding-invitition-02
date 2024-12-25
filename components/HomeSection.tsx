import { AnimatedRings } from "@/components/AnimatedRings"
import { AnimatedFlower } from "@/components/AnimatedFlower"
import { AnimatedButterfly } from "./AnimatedButterfly"
import { Image } from "@nextui-org/react";
import { AnimatedLeaf } from "./AnimatedLeaf";

export default function HomeSection() {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden justify-center bg-cream p-4">
            {/* Floral decorations */}
            <div className="absolute top-0 left-8 transform -translate-x-1/4 z-40 2mb:w-40 2mb:h-40 mb:w-48 mb:h-48">
                <AnimatedFlower className="w-64 h-64 text-amber-400 z-40" directions="left" />
            </div>
            <div className="absolute top-0 right-8 transform translate-x-1/4 z-40 2mb:w-40 2mb:h-40 mb:w-48 mb:h-48">
                <AnimatedFlower className="w-64 h-64 text-amber-400 z-40" directions="right" />
            </div>

            {/* Butterflies */}
            <AnimatedButterfly className="absolute top-10 left-10 w-6 h-6 2mb:w-4 2mb:w-5 z-50" />
            <AnimatedButterfly className="absolute top-1/4 right-12 w-5 h-5 2mb:w-4 2mb:w-5 z-50" />

            {/* Main content */}
            <div className="mb:space-y-8 2mb:space-y-4 text-center relative z-40">
                <div>
                    <div className="animate-fade-in">
                        <AnimatedRings />
                    </div>
                    <h1 className="text-2xl font-serif tracking-wide animate-slide-down z-50 2mb:text-lg mb:text-xl">
                        WEDDING INVITATION
                    </h1>
                </div>

                <div className="animate-fade-in relative flex justify-center overflow-hidden">
                    <Image
                        src="/images/couple-01.png"
                        alt="Wedding couple"
                        className="animate-zoom-in h-full w-40 object-contain sm:w-48 2mb:w-48"
                    />
                </div>

                <div className="space-y-2">
                    <h2 className="text-4xl font-script text-amber-600 animate-write-text 2mb:text-3xl mb:text-3xl">
                        Teddy & Olivia
                    </h2>

                    <p className="text-gray-700 font-serif tracking-wide animate-fade-in 2mb:text-sm sm:text-base">
                        TOGETHER WITH THEIR FAMILIES INVITE YOU
                        <br />
                        TO THEIR WEDDING CELEBRATION
                    </p>
                </div>

                <div className="space-y-8 animate-fade-up">
                    <div className="space-y-2 animate-fade-up px-8">
                        <div className="grid items-center text-2xl font-serif text-center 2mb:text-lg mb:text-xl">
                            FEB
                        </div>
                        <div className="grid grid-cols-5 items-center justify-center">
                            {/* <div></div> */}
                            <div className="col-span-2 py-2 font-serif text-xl flex justify-center items-center text-end 2mb:text-sm mb:text-base border-t border-b border-amber-600 py-2">
                                FRIDAY
                            </div>
                            <div className="text-4xl font-serif text-amber-600 text-center 2mb:text-2xl mb:text-3xl py-2">
                                23
                            </div>
                            <div className="col-span-2 font-serif py-2 text-xl flex justify-center items-center text-start 2mb:text-sm mb:text-base border-t border-b border-amber-600 py-2">
                                09:00 AM
                            </div>
                            {/* <div></div> */}
                        </div>
                        <div className="grid items-center text-2xl font-serif text-center 2mb:text-lg mb:text-xl">
                            2024
                        </div>
                    </div>
                    <div>
                        <div className="text-gray-700 font-serif mt-4 pb-2 2mb:text-xs mb:text-sm">
                            123 Anywhere St.,
                            <br />
                            Any City, ST 12345
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-8/12">
                                <Image
                                    src="/images/line-01.png"
                                    alt="Wedding couple"
                                    className="animate-zoom-in object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom floral decorations */}
            <div className="absolute -bottom-4 left-4 transform -translate-x-1/4 z-50">
                <AnimatedLeaf className="w-64 h-64 text-amber-400 z-40" directions="right" />
            </div>
            <div className="absolute -bottom-4 right-4 transform translate-x-1/4 z-50">
                <AnimatedLeaf className="w-64 h-64 text-amber-400 z-40" directions="left" />
            </div>
        </div>
    );
}
