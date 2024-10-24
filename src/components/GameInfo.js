import React from 'react';
import { usePlayer } from '../contexts/PlayerContext';

export default function GameInfo() {
  const { selectedPlayer } = usePlayer();

  return (
    <div className="p-4">
      {selectedPlayer ? (
        <>
          <h2 className="text-2xl font-extrabold mb-6">{selectedPlayer.player_name}</h2>
          <img
            src={selectedPlayer.agent_image}
            alt={selectedPlayer.agent}
            className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-300"><strong>Role:</strong> {selectedPlayer.role}</p>
          <p className="text-sm text-gray-300"><strong>Agent:</strong> {selectedPlayer.agent}</p>
          <p className="text-sm text-gray-300"><strong>Region:</strong> {selectedPlayer.region}</p>
          <p className="text-sm text-gray-300"><strong>Group:</strong> {selectedPlayer.group}</p>
          <p className="text-sm text-gray-300 mt-4">
            <strong>Reasoning:</strong> {selectedPlayer.reasoning}
          </p>
          <h4 className="text-lg font-semibold text-white mt-6">Performance Stats:</h4>
          <div className="mt-2 bg-gray-700 rounded p-2">
            {Object.entries(selectedPlayer.performance_stats).map(([stat, value], index) => (
              <div key={index} className="flex justify-between text-sm text-gray-300">
                <span>{stat.replace(/_/g, ' ')}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-extrabold mb-6">About VALORANT</h2>
          <img
            src="https://example.com/valorant-image.jpg"
            alt="VALORANT Game"
            className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
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
