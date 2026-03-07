import React from 'react';
import { motion } from 'framer-motion';

const MessageBubble = ({ message }) => {
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const isUser = message.sender === 'user';

  return (
    <motion.div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
    >
      <motion.div
        className={`max-w-[85%] sm:max-w-[80%] px-3 py-2.5 md:px-4 md:py-3 rounded-2xl ${
          isUser
            ? 'bg-gradient-to-br from-[#C61407] to-red-700 text-white rounded-br-md shadow-lg shadow-red-500/20'
            : 'bg-white text-gray-800 rounded-bl-md shadow-md border border-gray-100'
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
          {message.text}
          {message.isTyping && (
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-current ml-1 align-middle"
            />
          )}
        </p>
        {!message.isTyping && (
          <span className={`text-[10px] sm:text-xs mt-1.5 block ${isUser ? 'text-white/70' : 'text-gray-500'}`}>
            {formatTime(message.timestamp)}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MessageBubble;
