import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

// API URL - Backend deployed on Vercel
const API_BASE_URL = 'https://brands-way-react.vercel.app';

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant for BrandsWay. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
      isTyping: false
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);

  // Typing effect function
  const typeMessage = (fullText, messageId) => {
    let currentIndex = 0;
    const words = fullText.split(' ');
    
    const typingInterval = setInterval(() => {
      if (currentIndex < words.length) {
        const displayedText = words.slice(0, currentIndex + 1).join(' ');
        setMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, text: displayedText, isTyping: true }
              : msg
          )
        );
        currentIndex++;
        
        // Scroll to bottom while typing
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      } else {
        clearInterval(typingInterval);
        setMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, isTyping: false }
              : msg
          )
        );
      }
    }, 50); // Adjust speed here (lower = faster)
  };

  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
      isTyping: false
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await response.json();

      if (data.success) {
        const aiMessageId = Date.now() + 1;
        // Create message with empty text initially
        const aiMessage = {
          id: aiMessageId,
          text: '',
          sender: 'ai',
          timestamp: new Date(),
          isTyping: true
        };
        
        setMessages(prev => [...prev, aiMessage]);
        
        // Start typing effect
        typeMessage(data.message, aiMessageId);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'ai',
        timestamp: new Date(),
        isTyping: false
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[1000]">
      {/* Floating Chat Button with Pulsing Rings */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            {/* Pulsing Rings Animation - use scale transform to prevent layout shifts */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full border-2 border-[#C61407]"
                  style={{ width: 64, height: 64 }}
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Main Button */}
            <motion.button
              onClick={toggleChat}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-14 h-14 md:w-16 md:h-16 bg-[#C61407] rounded-full shadow-2xl shadow-red-500/50 flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300 group"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <MessageCircle size={24} className="md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
              </motion.div>
              
              {/* Sparkle Effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles size={18} className="md:w-5 md:h-5 text-white/80" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-20 right-4 left-4 top-4 md:bottom-24 md:right-6 md:left-auto md:top-auto md:w-[380px] md:h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#C61407] to-red-700 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles size={18} className="md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base md:text-lg">BrandsWay AI</h3>
                  <p className="text-white/80 text-[10px] md:text-xs">Always here to help</p>
                </div>
              </div>
              <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <X size={16} className="md:w-[18px] md:h-[18px]" />
              </motion.button>
            </div>

            {/* Chat Window */}
            <ChatWindow
              messages={messages}
              isLoading={isLoading}
              ref={chatWindowRef}
            />

            {/* Chat Input */}
            <ChatInput
              onSendMessage={sendMessage}
              disabled={isLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Assistant;
