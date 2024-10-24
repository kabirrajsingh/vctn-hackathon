import React from 'react';
import AssistantMessage from './AssistantMessage'; // Ensure you have this component to handle assistant responses

export default function Message({ text, sender }) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div
        className={`relative px-4 py-2 rounded-lg text-sm shadow-md animate-slideIn ${
          isUser
            ? 'bg-gradient-to-r from-red-500 to-red-700 text-white'
            : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full'
        }`}
      >
        {isUser ? (
          text // Display user message directly (string)
        ) : (
          <AssistantMessage data={text} /> // Use the new AssistantMessage component to handle rendering
        )}
        <div
          className={`absolute bottom-0 -mb-1 w-3 h-3 transform rotate-45 ${
            isUser ? 'bg-red-600 right-2' : 'bg-blue-600 left-2'
          }`}
        />
      </div>
    </div>
  );
}
