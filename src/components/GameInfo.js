import React from 'react';
import { usePlayer } from '../contexts/PlayerContext';

// Mock JSON of agent images
const agentImages = {
  "Raze": "https://static.wikia.nocookie.net/valorant/images/6/6f/Raze_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202815",
  "Skye": "https://example.com/images/skye.png",
  "Astra": "https://example.com/images/astra.png",
  "Killjoy": "https://example.com/images/killjoy.png"
};

export default function GameInfo() {
  const { selectedPlayer } = usePlayer();
  console.log(selectedPlayer);

  // Get the agent image based on the selected player's top agent
  const agentImageUrl = agentImages[selectedPlayer?.top_agent] || "https://example.com/images/default.png";

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
      {selectedPlayer ? (
        <>
          <div className="flex items-center mb-6">
            <img
              src={selectedPlayer.player_photo_url}
              alt={selectedPlayer.player_name}
              className="w-16 h-16 rounded-full border-2 border-white mr-4"
            />
            <div>
              <h2 className="text-3xl font-extrabold text-white">{selectedPlayer.player_name}</h2>
              <p className="text-sm text-gray-400">{selectedPlayer.role} - {selectedPlayer.top_agent}</p>
            </div>
          </div>
          <img
            src={agentImageUrl}
            alt={selectedPlayer.top_agent}
            className="w-full h-52 object-cover rounded-lg shadow-md mb-6"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400">Region</p>
              <p className="text-sm text-white font-semibold">{selectedPlayer.region}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-xs text-gray-400">Group</p>
              <p className="text-sm text-white font-semibold">{selectedPlayer.group}</p>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-white mt-6">Performance Stats</h4>
          <div className="mt-4 bg-gray-800 rounded-lg p-4 shadow-inner">
            {Object.entries(selectedPlayer.performance_stats).map(([stat, value], index) => (
              <div key={index} className="flex justify-between py-1 border-b border-gray-700 last:border-none">
                <span className="text-sm text-gray-400">{stat.replace(/_/g, ' ')}</span>
                <span className="text-sm text-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-6">About VALORANT</h2>
          <img
            src="https://example.com/valorant-image.jpg"
            alt="VALORANT Game"
            className="w-full h-52 object-cover rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            VALORANT is a 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities. 
            Agents with diverse skills and backstories offer different gameplay experiences. The game requires strategic planning, sharp aim, and teamwork for victory.
          </p>
        </div>
      )}
    </div>
  );
}
