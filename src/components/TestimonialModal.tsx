import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, Trophy } from 'lucide-react';

interface TestimonialModalProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
    fullStory: string;
    image: string;
    rating: number;
    achievements: string[];
  };
  onClose: () => void;
}

export const TestimonialModal: React.FC<TestimonialModalProps> = ({ testimonial, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-blue-900/30 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-blue-900/10 backdrop-blur-2xl rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-200/20 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-200/30"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{testimonial.name}</h3>
                <p className="text-blue-100/80">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-blue-50/90 leading-relaxed">{testimonial.fullStory}</p>
            </div>

            <div className="bg-blue-900/10 backdrop-blur-md rounded-xl p-6 border border-blue-200/10">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {testimonial.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-3 text-blue-50/90">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};