import React, { useContext, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import InputBox from './InputBox';
import { usePlayer } from '../contexts/PlayerContext';
import { SessionContext } from '../contexts/SessionContext';

export default function Chatbot() {
  const { messages, setMessages, currentSessionId } = useContext(SessionContext);
  const { setSelectedPlayer } = usePlayer();

  useEffect(() => {
    // Log messages for debugging
    console.log(messages);
  }, [messages]);

  // Function to send a message
  const sendMessage = async (input) => {
    if (!input.trim()) return; // Prevent empty messages

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const responseMessage = await fetchTeamResponse(input);

    // Check if responseMessage has a valid structure
    if (responseMessage && responseMessage.data) {
      const formattedResponse = {
        text: responseMessage.data,
        sender: responseMessage.sender,
      };
      setMessages((prevMessages) => [...prevMessages, formattedResponse]);
    } else {
      // Handle cases where responseMessage is invalid
      console.error('Invalid response message:', responseMessage);
      const errorResponse = {
        text: 'An unexpected error occurred.',
        sender: 'assistant',
      };
      setMessages((prevMessages) => [...prevMessages, errorResponse]);
    }
  };

  // Function to fetch team response
  const fetchTeamResponse = async (query) => {
    if (!currentSessionId) {
      console.error('No session ID available');
      return { data: 'No session ID available.', sender: 'assistant' }; // Return error response if no session ID
    }

    try {
      const response = await fetch('https://debasmitroy.pythonanywhere.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          sessionId: currentSessionId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }

      const data = await response.json();
      console.log(data)
      return {
        data: data || 'Team data fetched successfully.',
        sender: 'assistant',
      };
    } catch (error) {
      console.error('Error fetching team data:', error);
      return { data: 'Sorry, there was an error retrieving the team data.', sender: 'assistant' };
    }
  };

  // Handle player click events
  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div className="relative px-20 pb-10 flex flex-col h-[1000px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c30d7b14a6969df89073245b66eb702141299add-1920x1080.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-gray-800 opacity-80 z-0"></div>
      </div>

      {/* Content */}
      <h1 className="text-center text-white text-2xl font-extrabold py-4 relative z-10">
        VALORANT Scouting Assistant
      </h1>
      <div className="flex-grow overflow-y-auto relative z-10">
        <ChatWindow messages={messages} onPlayerClick={handlePlayerClick} />
      </div>
      <div className="relative pb-8 mt-4">
        <InputBox onSend={sendMessage} />
      </div>
    </div>
  );
}
