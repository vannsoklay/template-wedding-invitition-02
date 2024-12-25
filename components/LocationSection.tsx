import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { AnimatedFrameDetail } from "./frames/FrameDetail";

export default function LocationSection() {
  return (
    <div className="relative min-h-screen flex overflow-hidden justify-center bg-cream p-4">
      <div className="absolute -top-56 -left-38 transform z-10 w-[680px]">
        <AnimatedFrameDetail className="w-full h-96 text-amber-400" directions="left" />
      </div>
      <div className="space-y-8 w-full mt-32 mb-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            ទីតាំង
          </h2>
          <p className="text-gray-600">
            ម៉ោង ៥:០០ ល្ងាច
          </p>
          <p className="text-gray-600">
            អញ្ជើញទៅកន្លែងពិសាអាហារពេលល្ងាចនៅអាហារដ្ធា<br></br> ខៀវព្រៅសែនសុខ
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Map */}
          <div className="rounded-lg overflow-hidden mb2:px-2 mb:px-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.772901186099!2d104.8821!3d11.5871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9bc5779d58425408!2sThe%20Premier%20Center%20Sen%20Sok!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
              // width="800"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-xl"
            ></iframe>
          </div>

          <div className="lg:flex justify-center gap-4 lg:space-y-0 space-y-4 pt-4">
            {/* Google Maps Share */}
            <Button
              as="a"
              size="lg"
              href="https://www.google.com/maps?q=37.774929,-122.419415"
              target="_blank"
              rel="noopener noreferrer"
              variant="flat"
              color="primary"
              className="bg-rose-400 text-white flex items-center gap-2 px-6 py-2 text-white hover:bg-rose-700 transition-colors duration-300"
            >
              <Icon icon="mdi:google-maps" className="text-lg" />
              ទីតាំងលើ Google Maps
            </Button>

            {/* Apple Maps Share */}
            <Button
              as="a"
              size="lg"
              href="https://maps.apple.com/?q=37.774929,-122.419415"
              target="_blank"
              rel="noopener noreferrer"
              variant="flat"
              color="success"
              className="flex items-center gap-2 px-6 py-2 text-white bg-gray-700 hover:bg-gray-700 transition-colors duration-300"
            >
              <Icon icon="mdi:apple" className="text-lg" />
              ទីតាំងលើ Apple Maps
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

