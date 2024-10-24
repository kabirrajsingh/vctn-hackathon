import React from 'react';
import Navigation from './components/Navigation';
import Chatbot from './components/Chatbot';
import GameInfo from './components/GameInfo';
import { PlayerProvider } from './contexts/PlayerContext'; // Import the PlayerProvider
import { SessionProvider } from './contexts/SessionContext';

function App() {
  return (
    <SessionProvider>
    <PlayerProvider>
      <div className="min-h-screen flex text-white">
        {/* Left Navigation Column */}
        <div className="basis-1/6 bg-zinc-800 pl-6 pt-10">
          <Navigation />
        </div>
        
        {/* Center Chatbot Column */}
        <div className="grow w-100 flex-col">
          <Chatbot />
        </div>
        
        {/* Right Info Column */}
        <div className="w-1/3 bg-stone-800 pt-4">
          <GameInfo />
        </div>
      </div>
    </PlayerProvider>
    </SessionProvider>
  );
}

export default App;
