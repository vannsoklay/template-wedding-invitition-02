import { motion } from "framer-motion";
import { AnimatedFrameDetail } from "./frames/FrameDetail"

export default function EventSection() {
  const timelineEvents = [
    {
      time: "ម៉ោង ៥:៣០ ព្រឹក",
      description: "ចូលជួបជុំបងប្អូនទៅកាន់ទីតាំងខាងស្រីនៅលោកឪពុក",
      icon: "ph:sun-bold"
    },
    {
      time: "ម៉ោង ៨:០០ ព្រឹក",
      description: "ពិធីដង្ហែរជិះម៉ូតូ",
      icon: "mdi:scooter-electric"
    },
    {
      time: "ម៉ោង ៨:៣០ ព្រឹក",
      description: "ពិធីសែនពរអាហារព្រឹក",
      icon: "mdi:food-takeout-box"
    },
    {
      time: "ម៉ោង ៩:០០ ព្រឹក",
      description: "ពិធីការសម្ពន្ធពិសេស",
      icon: "mdi:cards-heart-outline"
    },
    {
      time: "ម៉ោង ១០:០០ ព្រឹក",
      description: "ពិធីពៅនំ និងអនុស្សាវរីយ៍ ចាប់ស្លឹក",
      icon: "mdi:cake-variant"
    },
    {
      time: "ម៉ោង ១២:០០ ថ្ងៃ",
      description: "ពិធីអាហារពេលថ្ងៃ",
      icon: "mdi:silverware-fork-knife"
    }
  ]
  return (
    <div className="relative min-h-screen flex overflow-hidden justify-center bg-cream">
      <div className="absolute -top-56 -left-38 transform z-10 w-[680px]">
        <AnimatedFrameDetail className="w-full h-96 text-amber-400" directions="left" />
      </div>

      <div className="max-w-2xl mx-auto w-full z-20 mt-32 mb-10">
        <div className="text-center mb-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-semibold"
          >
            នៅថ្ងៃទី៥
          </motion.h2>
        </div>

        <div className="relative mt-8">
          <div className="divide-y divide-amber-100">
            {timelineEvents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'
                  } hover:bg-amber-100/50 transition-colors duration-300`}
              >
                {/* Time Section */}
                <div className="p-6 text-amber-900 font-medium text-start border-r border-amber-200">
                  {item.time}
                </div>

                {/* Description Section */}
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-800 text-sm">{item.description}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center mb-4"
            >
              <h2 className="text-3xl md:text-4xl text-amber-900 font-serif italic mt-12">
                សុខ រស្មី & ស្រីរត្ន័
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

