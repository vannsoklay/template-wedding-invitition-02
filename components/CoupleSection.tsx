'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedFrameDetail } from './frames/FrameDetail'

export default function CoupleSection() {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden justify-center bg-cream">
            <div className="absolute -top-56 -left-38 transform z-10 w-[680px]">
                <AnimatedFrameDetail className="w-full h-96 text-amber-400" directions="left" />
            </div>
            <div className="mx-auto mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        រឿងរ៉ាវរបស់យើង
                    </h2>
                    <p className="text-gray-600">
                        ចាប់ផ្តើមនៃស្នេហារបស់យើង
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative aspect-[3/4] h-80 w-full rounded-2xl overflow-hidden">
                            <Image
                                src="/images/wedding/wedding-01.jpg"
                                alt="Couple's first date"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-700 leading-relaxed">
                            យើងបានជួបគ្នាដំបូងនៅក្នុងពិធីជប់លៀងមួយរបស់មិត្តភក្តិរួម។ ពេលនោះ ខ្ញុំបានឃើញនាងភ្លាម ខ្ញុំដឹងថានាងពិតជាពិសេសណាស់។ យើងបានចាប់ផ្តើមជជែកគ្នា ហើយរកឃើញថាយើងមានចំណាប់អារម្មណ៍ច្រើនដូចគ្នា។
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            បន្ទាប់ពីការណាត់ជួបលើកដំបូង យើងបានដឹងថាយើងមានអារម្មណ៍ពិសេសចំពោះគ្នា។ ចាប់តាំងពីពេលនោះមក យើងបានឆ្លងកាត់ពេលវេលាល្អៗជាមួយគ្នាជាច្រើន ហើយឥឡូវនេះយើងត្រៀមខ្លួនរួចរាល់ដើម្បីចាប់ផ្តើមជំពូកថ្មីនៃជីវិតរបស់យើង។
                        </p>
                        <blockquote className="italic text-lg text-fuchsia-700 border-l-4 border-fuchsia-500 pl-4 py-2">
                            "ស្នេហាមិនមែនគ្រាន់តែជាការស្វែងរកមនុស្សដែលល្អឥតខ្ចោះនោះទេ តែជាការមើលឃើញមនុស្សម្នាក់យ៉ាងល្អឥតខ្ចោះ ទោះបីជាគេមិនល្អឥតខ្ចោះក៏ដោយ។"
                        </blockquote>
                        <p className="text-right text-gray-600">- សម្រង់ពាក្យស្នេហា</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

