import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  delay?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image,
  rating,
  delay = 0
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
  >
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white/30"
      />
      <div>
        <h3 className="font-heading font-semibold">{name}</h3>
        <p className="text-sm font-heading text-gray-300">{role}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-200">{content}</p>
  </motion.div>
);