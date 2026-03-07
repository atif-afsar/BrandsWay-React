import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageBubble from './MessageBubble';

const ChatWindow = forwardRef(({ messages, isLoading }, ref) => {
  return (
    <div 
      ref={ref}
      className="flex-1 overflow-y-auto px-3 py-4 md:px-4 md:py-6 bg-gradient-to-b from-gray-50 to-white scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-transparent"
      style={{ scrollbarWidth: 'thin' }}
    >
      <div className="space-y-3 md:space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.3,
                delay: index === messages.length - 1 ? 0.1 : 0,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            >
              <MessageBubble message={message} />
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-[85%] sm:max-w-[80%]"
          >
            <div className="flex gap-1 md:gap-1.5">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#C61407] rounded-full"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-600 font-medium">AI is thinking...</span>
          </motion.div>
        )}
      </div>
    </div>
  );
});

ChatWindow.displayName = 'ChatWindow';

export default ChatWindow;
