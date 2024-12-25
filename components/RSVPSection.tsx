import { motion } from "framer-motion"
import { QRCodeSVG } from "qrcode.react"

export default function RSVPSection() {
  return (
    <div className="relative overflow-hidden flex justify-center bg-cream p-4">
      <div className="space-y-8 w-full mb-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            RSVP
          </h2>
          <p className="text-gray-600">
            We would be delighted to have you join us on our special day. Please RSVP by July 15, 2024.
          </p>
        </motion.div>

        <div>
          <QRCodeSVG value="https://example.com/contact" className="w-full h-38 object-cover" />
        </div>
      </div>
    </div>
  )
}
