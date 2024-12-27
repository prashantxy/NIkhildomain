'use client'

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          left: '10%',
          top: '20%',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          right: '15%',
          top: '10%',
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-green-500/20 blur-3xl"
        animate={{
          x: [0, 70, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          left: '30%',
          bottom: '10%',
        }}
      />
    </div>
  )
}

