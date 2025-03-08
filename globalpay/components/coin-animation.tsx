"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function CoinAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const mouseX = e.clientX
      const mouseY = e.clientY

      const deltaX = (mouseX - centerX) / 25
      const deltaY = (mouseY - centerY) / 25

      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80" ref={containerRef}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2,
        }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20pay.jpg-rd3dYVXTceyu4MpzN6cHVVxqwmWjD1.jpeg"
          alt="GlobalPay Coin"
          fill
          className="object-contain drop-shadow-2xl"
        />

        <motion.div
          className="absolute -inset-4 border-2 border-blue-200/30 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute -inset-8 border border-blue-200/20 rounded-full"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  )
}

