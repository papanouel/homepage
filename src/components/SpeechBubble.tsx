import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SpeechBubbleProps {
  sentence: string;
  onComplete: () => void;
  onAdvance: () => void;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  sentence,
  onComplete,
  onAdvance,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Handle auto-disappear
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [sentence, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sentence}
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        onClick={(e) => {
          e.stopPropagation();
          onAdvance();
        }}
        style={{
          transform: 'translate(-50%, -100%)',
          pointerEvents: 'auto',
        }}
        className="bg-white text-zinc-900 px-4 py-3 rounded-2xl shadow-2xl border border-zinc-200 cursor-pointer select-none min-w-[150px] max-w-[250px]"
      >
        <p className="text-sm font-medium leading-tight text-center">{sentence}</p>
        {/* Triangle pointer */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"
        />
      </motion.div>
    </AnimatePresence>
  );
};
