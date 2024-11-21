import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-blue-500/5"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

export const BackgroundText = ({ text }: { text: string }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
    <div className="text-[20rem] font-bold text-gray-200 transform -rotate-12 whitespace-nowrap">
      {text}
    </div>
  </div>
);

interface DecorativeCirclesProps {
  variant?: 'primary' | 'blue' | 'light';
}

export const DecorativeCircles: React.FC<DecorativeCirclesProps> = ({ variant = 'primary' }) => {
  const getCircleClass = (opacity: number) => {
    switch (variant) {
      case 'primary':
        return `absolute rounded-full bg-gradient-to-br from-blue-500/${opacity} via-purple-500/${opacity} to-indigo-500/${opacity}`;
      case 'blue':
        return `absolute rounded-full bg-blue-500/${opacity}`;
      case 'light':
        return `absolute rounded-full bg-white/${opacity}`;
      default:
        return `absolute rounded-full bg-blue-500/${opacity}`;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`${getCircleClass(10)} w-96 h-96 -top-48 -right-48`} />
      <div className={`${getCircleClass(5)} w-64 h-64 top-1/4 -left-32`} />
      <div className={`${getCircleClass(8)} w-48 h-48 bottom-1/4 right-1/4`} />
      <div className={`${getCircleClass(3)} w-72 h-72 -bottom-36 -left-36`} />
    </div>
  );
};