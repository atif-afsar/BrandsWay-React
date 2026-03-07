import React, { forwardRef } from 'react';
import MessageBubble from './MessageBubble';

const ChatWindow = forwardRef(({ messages, isLoading }, ref) => {
  return (
    <div className="chat-window" ref={ref}>
      <div className="messages-container">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {isLoading && (
          <div className="loading-message">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="loading-text">AI is typing...</span>
          </div>
        )}
      </div>
    </div>
  );
});

export default ChatWindow;