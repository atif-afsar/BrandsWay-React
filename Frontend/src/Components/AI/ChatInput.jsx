import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white px-3 md:px-4 py-3 md:py-4 flex-shrink-0">
      <form onSubmit={handleSubmit} className="flex items-end gap-2 md:gap-3">
        <motion.div
          className="flex-1 relative"
          whileFocus={{ scale: 1.01 }}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            disabled={disabled}
            rows={1}
            className="w-full px-3 py-2.5 md:px-4 md:py-3 pr-10 md:pr-12 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#C61407] focus:bg-white focus:outline-none resize-none text-xs md:text-sm transition-all duration-200 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-red-200"
            style={{ scrollbarWidth: 'thin' }}
          />
        </motion.div>
        
        <motion.button
          type="submit"
          disabled={!message.trim() || disabled}
          whileHover={!disabled && message.trim() ? { scale: 1.1 } : {}}
          whileTap={!disabled && message.trim() ? { scale: 0.9 } : {}}
          className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 overflow-hidden ${
            message.trim() && !disabled
              ? 'bg-[#C61407] text-white shadow-lg shadow-red-500/30 hover:bg-red-700'
              : disabled
              ? 'bg-[#C61407] text-white shadow-lg shadow-red-500/30'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {/* Shimmer Effect - Only when AI is replying */}
          {disabled && (
            <>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  transform: 'skewX(-20deg)',
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.3,
                }}
                style={{
                  transform: 'skewX(-20deg)',
                }}
              />
            </>
          )}
          
          {/* Button Content */}
          <div className="relative z-10">
            {disabled ? (
              <Loader2 size={18} className="md:w-5 md:h-5 animate-spin" />
            ) : (
              <Send size={18} className="md:w-5 md:h-5" />
            )}
          </div>
        </motion.button>
      </form>
      
      <p className="text-[10px] md:text-xs text-gray-400 mt-1.5 md:mt-2 text-center">
        Press Enter to send, Shift+Enter for new line
      </p>
    </div>
  );
};

export default ChatInput;
