import React, { useState, useRef, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import './Assistant.css'; // We'll create this for styling

// API URL - Change this to your deployed Vercel backend URL
const API_BASE_URL = 'http://localhost:5000'; // Replace with your Vercel URL when deployed

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant for BrandsWay. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);

  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Replace with your actual backend URL
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await response.json();

      if (data.success) {
        const aiMessage = {
          id: Date.now() + 1,
          text: data.message,
          sender: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'ai',
        timestamp: new Date()
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
    <div className="assistant-container">
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={toggleChat}>
          💬 Chat with AI
        </button>
      )}

      {isOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <h3>BrandsWay AI Assistant</h3>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>

          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            ref={chatWindowRef}
          />

          <ChatInput
            onSendMessage={sendMessage}
            disabled={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default Assistant;