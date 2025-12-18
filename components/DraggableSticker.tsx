'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface DraggableStickerProps {
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
  rotate?: number;
  className?: string;
}

const DraggableSticker: React.FC<DraggableStickerProps> = ({ children, initialX = 0, initialY = 0, rotate = 0, className = "" }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileHover={{ scale: 1.1, cursor: 'grab', rotate: rotate + 5 }}
      whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 50 }}
      initial={{ x: initialX, y: initialY, rotate: rotate }}
      className={`absolute z-20 select-none ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DraggableSticker;