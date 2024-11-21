import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  </motion.div>
);