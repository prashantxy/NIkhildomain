'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { View360 } from "./view-360"

interface LocationCardProps {
  image: string
  title: string
  views: number
}

export function LocationCard({ image, title, views }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <View360 className="absolute top-4 left-4" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-2 py-1 rounded"
        >
          {views.toLocaleString()} views
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform transition-transform duration-300 group-hover:translate-y-0">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white font-medium"
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  )
}

