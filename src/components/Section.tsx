import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  transition?: 'up' | 'down';
  pattern?: 'waves' | 'peaks' | 'curves' | 'zigzag';
  bgColor?: string;
  decorativeShape?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  transition,
  pattern = 'waves',
  bgColor = 'bg-white',
  decorativeShape = true,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getTransitionPath = (type: string, direction: 'up' | 'down') => {
    const isUp = direction === 'up';
    const height = isUp ? 100 : 0;
    const offset = isUp ? -1 : 1;

    switch (type) {
      case 'waves':
        return `
          M0 ${height}
          C20 ${height + offset * 15} 40 ${height + offset * 5} 50 ${height + offset * 20}
          C60 ${height + offset * 35} 80 ${height + offset * 25} 100 ${height + offset * 40}
          L100 ${isUp ? 100 : 0} L0 ${isUp ? 100 : 0} Z
        `;
      case 'peaks':
        return `
          M0 ${height}
          Q25 ${height + offset * 30} 50 ${height + offset * 10}
          T100 ${height + offset * 40}
          L100 ${isUp ? 100 : 0} L0 ${isUp ? 100 : 0} Z
        `;
      case 'curves':
        return `
          M0 ${height}
          C30 ${height + offset * 20} 70 ${height + offset * 10} 100 ${height + offset * 30}
          L100 ${isUp ? 100 : 0} L0 ${isUp ? 100 : 0} Z
        `;
      case 'zigzag':
        return `
          M0 ${height}
          L25 ${height + offset * 25} L50 ${height + offset * 10}
          L75 ${height + offset * 35} L100 ${height + offset * 20}
          L100 ${isUp ? 100 : 0} L0 ${isUp ? 100 : 0} Z
        `;
      default:
        return `M0 ${height} L100 ${height} L100 ${isUp ? 0 : 100} L0 ${isUp ? 100 : 0} Z`;
    }
  };

  const getDecorativeShapes = () => {
    const shapes = [
      {
        className: `absolute -top-40 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl transform -translate-x-1/2 rotate-45`,
        style: { mixBlendMode: 'overlay' }
      },
      {
        className: `absolute -bottom-32 right-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 blur-2xl`,
        style: { mixBlendMode: 'overlay' }
      },
      {
        className: `absolute -top-24 left-1/2 w-96 h-32 transform -translate-x-1/2`,
        style: {
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          mixBlendMode: 'overlay'
        }
      },
      {
        className: `absolute -bottom-24 right-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-blue-500/5 to-purple-500/5 blur-2xl`,
        style: { mixBlendMode: 'overlay' }
      }
    ];

    return shapes.map(shape => ({
      ...shape,
      className: `${shape.className} transition-transform duration-1000 ease-in-out`
    }));
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`relative ${bgColor} ${className}`}
    >
      {transition && (
        <>
          <div 
            className={`absolute left-0 right-0 ${
              transition === 'up' ? '-top-32' : '-bottom-32'
            } h-32 w-full overflow-hidden pointer-events-none`}
          >
            {/* Multiple blurred background layers for depth */}
            {[40, 20, 0].map((blur, index) => (
              <div key={index} className="absolute inset-0 w-full h-full">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className={`absolute inset-0 w-full h-full transform scale-110`}
                  style={{ filter: `blur(${blur}px)`, opacity: 1 - index * 0.2 }}
                >
                  <path
                    d={getTransitionPath(pattern, transition)}
                    fill={bgColor === 'bg-white' ? 'white' : 'currentColor'}
                    className="transition-all duration-700"
                  />
                </svg>
              </div>
            ))}
            
            {/* Sharp overlay layer */}
            <div className="absolute inset-0 w-full h-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <path
                  d={getTransitionPath(pattern, transition)}
                  fill={bgColor === 'bg-white' ? 'white' : 'currentColor'}
                  className="transition-all duration-700"
                />
              </svg>
            </div>
          </div>

          {decorativeShape && (
            <>
              {getDecorativeShapes().map((shape, index) => (
                <div
                  key={index}
                  className={shape.className}
                  style={shape.style}
                />
              ))}
            </>
          )}
        </>
      )}
      {children}
    </motion.section>
  );
};