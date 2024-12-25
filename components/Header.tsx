'use client'

// import { useState } from 'react'
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react"
import { motion, useScroll, useSpring } from 'framer-motion'

// interface HeaderProps {
//   scrollToSection: (section: any) => void
// }

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // const navItems = [
  //   { name: 'Home', section: 'home' },
  //   { name: 'Couple', section: 'couple' },
  //   { name: 'Event', section: 'event' },
  //   { name: 'Video', section: 'video' },
  //   { name: 'RSVP', section: 'rsvp' },
  //   { name: 'Comments', section: 'comments' },
  // ]

  return (
    // <Navbar isBordered className="bg-white/50 backdrop-blur-md" isBlurred>
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-between items-center"
      >
        {/* <NavbarBrand>
          <p className="font-bold text-inherit">Sarah & John</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.section}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link color="foreground" href="#" onPress={() => scrollToSection(item.section)}>
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>
        <Button
          className="sm:hidden"
          autoFocus
          variant="light"
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
          <Icon icon="mage:dash-menu" width="24" height="24" />
        </Button> */}
      </motion.div>
      {/* {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
        >
          {navItems.map((item) => (
            <NavbarItem key={item.section} className="w-full">
              <Link
                color="foreground"
                href="#"
                className="w-full px-4 py-2 block"
                onClick={() => {
                  scrollToSection(item.section)
                  setIsMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </motion.div>
      )} */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />
    </>
  )
}

