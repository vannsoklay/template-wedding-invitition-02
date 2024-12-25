'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import AnimatedSection from '@/components/AnimatedSection'
import HomeSection from '@/components/HomeSection'
import CoupleSection from '@/components/CoupleSection'
import EventSection from '@/components/EventSection'
import RSVPSection from '@/components/RSVPSection'
import Comments from '@/components/Comments'
import LocationSection from '@/components/LocationSection'
import DetailSection from '@/components/DetailSection'
import GallerySection from '@/components/GallerySection'
import { Icon } from '@iconify/react/dist/iconify.js'
import { AnimatedFrameDetail } from '@/components/frames/FrameDetail'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ['start', 'end start']
  // })

  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    detail: useRef<HTMLDivElement>(null),
    couple: useRef<HTMLDivElement>(null),
    event: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    location: useRef<HTMLDivElement>(null),
    rsvp: useRef<HTMLDivElement>(null),
    comments: useRef<HTMLDivElement>(null),
  }

  return (
    <main ref={containerRef} className="min-h-screen">
      <Header />

      <motion.div>
        <AnimatedSection ref={sectionRefs.home} id="home" className="container max-w-lg mx-auto">
          <div className="relative min-h-screen flex items-center overflow-hidden justify-center bg-cream p-4">
            <HomeSection />
          </div>
        </AnimatedSection>
      </motion.div>

      <AnimatedSection ref={sectionRefs.event} id="detail" className="container max-w-lg mx-auto">
        <div className="relative min-h-screen flex overflow-hidden justify-center bg-cream p-4">
          <DetailSection />
        </div>
      </AnimatedSection>

      <AnimatedSection ref={sectionRefs.location} id="location" className="container max-w-lg mx-auto">
        <LocationSection />
      </AnimatedSection>

      <AnimatedSection ref={sectionRefs.event} id="event" className="container max-w-lg mx-auto">
        <EventSection />
      </AnimatedSection>

      <AnimatedSection ref={sectionRefs.couple} id="couple" className="container max-w-lg mx-auto">
        <CoupleSection />
      </AnimatedSection>

      <AnimatedSection ref={sectionRefs.couple} id="gallery" className="container max-w-lg mx-auto">
        <div className="relative min-h-screen flex overflow-hidden justify-center bg-cream">
          <GallerySection />
        </div>
      </AnimatedSection>

      <AnimatedSection ref={sectionRefs.comments} id="comments" className="container max-w-lg mx-auto">
        <div className="relative min-h-screen flex items-center overflow-hidden justify-center bg-cream z-40">
          <div className="absolute -top-56 -left-38 transform z-10 w-[680px] z-40">
            <AnimatedFrameDetail className="w-full h-96 text-amber-400 z-40" directions="left" />
          </div>
          <Comments />
        </div>
      </AnimatedSection>

      <AnimatedSection ref={sectionRefs.rsvp} id="rsvp" className="container max-w-lg mx-auto">
        <RSVPSection />
      </AnimatedSection>

      <div className="container max-w-lg mx-auto bg-cream pb-12">
        {/* Decorative Footer */}
        <div className="flex items-center justify-center">
          <div className="h-[1px] flex-1 bg-amber-200"></div>
          <div className="px-4">
            <span className="text-2xl font-dancing text-amber-400">សារ៉ានិងមីកែល</span>
          </div>
          <div className="h-[1px] flex-1 bg-amber-200"></div>
        </div>

        {/* Closing Message */}
        <div className="mt-2 text-center text-gray-600">
          <p>
            <Icon
              icon="mdi:cards-heart"
              className="w-5 h-5 inline mr-2 text-amber-400"
            />
            យើងរង់ចាំអបអរសាទរជាមួយអ្នក!
          </p>
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <Icon
            icon="mdi:instagram"
            className="w-6 h-6 text-amber-400 cursor-pointer hover:text-amber-500"
          />
          <Icon
            icon="mdi:facebook"
            className="w-6 h-6 text-amber-400 cursor-pointer hover:text-amber-500"
          />
          <Icon
            icon="mdi:pinterest"
            className="w-6 h-6 text-amber-400 cursor-pointer hover:text-amber-500"
          />
        </div>
      </div>
    </main>
  )
}

