import { motion } from "framer-motion";
import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel";

const galleryImages = [
    {
        src: "/images/wedding/wedding-01.jpg",
        alt: "Wedding Invitation Front",
    },
    {
        src: "/images/wedding/wedding-02.jpg",
        alt: "Wedding Ceremony",
    },
    {
        src: "/images/wedding/wedding-03.jpg",
        alt: "Wedding Location",
    },
    {
        src: "/images/wedding/wedding-04.jpg",
        alt: "Bride Portrait",
    },
    {
        src: "/images/wedding/wedding-05.jpg",
        alt: "Groom Portrait",
    },
    {
        src: "/images/wedding/wedding-06.jpg",
        alt: "Wedding Reception",
    },
    {
        src: "/images/wedding/wedding-07.jpg",
        alt: "Wedding Details",
    },
    {
        src: "/images/wedding/wedding-08.jpg",
        alt: "Wedding Schedule",
    },
];

export default function GallerySection() {

    return (
        <section className="relative py-16 bg-cream min-h-screen overflow-hidden">
            <div className="mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        រូបភាពអនុស្សាវរីយ៍
                    </h2>
                    <p className="text-gray-600">
                        សូមអរគុណសម្រាប់ការចូលរួមក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ
                    </p>
                </motion.div>

                <ImageCarousel images={galleryImages} />
                <blockquote className="italic text-lg text-fuchsia-700 border-l-4 border-fuchsia-500 pl-4 py-2 mt-12">
                    "ស្នេហាមិនមែនគ្រាន់តែជាការស្វែងរកមនុស្សដែលល្អឥតខ្ចោះនោះទេ តែជាការមើលឃើញមនុស្សម្នាក់យ៉ាងល្អឥតខ្ចោះ ទោះបីជាគេមិនល្អឥតខ្ចោះក៏ដោយ។"
                </blockquote>
            </div>
        </section>
    );
}
