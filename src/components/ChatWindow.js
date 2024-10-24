import React, { useEffect, useRef } from 'react';
import AssistantMessage from './AssistantMessage';

export default function ChatWindow({ messages, onPlayerClick }) {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  // console.log(messages)
  return (
    <div className="h-full flex flex-col space-y-4 p-4 overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg mb-4 ${
            message.sender === 'user'
              ? 'bg-blue-600 text-white self-end ml-8'
              : 'bg-red-600 text-white self-start mr-8' 
          }`}
        >
          {message.sender === 'assistant' ? (
            <AssistantMessage data={message.text} onPlayerClick={onPlayerClick} />
          ) : (
            message.text
          )}
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
}
