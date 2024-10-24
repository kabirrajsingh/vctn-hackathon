import React, { useState } from 'react';

export default function InputBox({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className="flex items-center">
      <input
        className="flex-grow p-3 rounded-l-md bg-gray-700/70 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-r-md transition-all duration-300 transform hover:scale-105 ml-3"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
