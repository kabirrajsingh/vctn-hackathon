import React, { useState } from 'react';

// Assuming you have a mapping of agent names to icon URLs
const agentIcons = {
  Raze: 'https://example.com/raze-icon.png',
  Jett: 'https://example.com/jett-icon.png',
  Breach: 'https://example.com/breach-icon.png',
  Brimstone: 'https://example.com/brimstone-icon.png',
  Killjoy: 'https://example.com/killjoy-icon.png',
  Chamber: 'https://example.com/chamber-icon.png',
  // Add other agents as needed
};

// Set a maximum number of performance stats to display
const MAX_STATS_DISPLAY = 5;

export default function AssistantMessage({ data, onPlayerClick }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player.player_name);
    onPlayerClick(player);
  };

  return (
    <div className="mt-4 space-y-6">
      <h2 className="text-lg font-bold text-white mb-4">
        Team Composition for {data.team_name}
      </h2>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h4 className="font-bold text-white">High-Level Reason:</h4>
        <p className="text-sm text-gray-400 mt-1">{data.high_level_reason}</p>
      </div>

      {data.team_composition.map((player, index) => (
        <div
          key={index}
          className={`mb-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
            selectedPlayer === player.player_name ? 'border-2 border-blue-500' : ''
          }`}
          onClick={() => handlePlayerClick(player)}
        >
          <div className="flex items-center">
            <img
              src={agentIcons[player.top_agents[0]] || 'https://example.com/default-icon.png'}
              alt={player.top_agents[0]}
              className="w-14 h-14 rounded-full mr-4 border border-gray-700"
            />
            <div className="flex-grow">
              <h4 className="font-semibold text-xl">
                {player.player_name} ({player.role})
              </h4>
              <div className="flex justify-between text-sm mt-1 text-gray-300">
                <p><strong>Role:</strong> {player.role}</p>
                <p><strong>Region:</strong> {player.region}</p>
                <p><strong>Group:</strong> {player.group}</p>
              </div>
            </div>
          </div>

          {/* Performance Stats Table for Each Player */}
          <h4 className="font-bold text-white mt-4">Performance Stats</h4>
          <table className="min-w-full border border-gray-600 mt-2 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                {Object.keys(player.performance_stats).slice(0, MAX_STATS_DISPLAY).map((statKey) => (
                  <th key={statKey} className="border-b border-gray-600 p-2">{statKey}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                {Object.values(player.performance_stats).slice(0, MAX_STATS_DISPLAY).map((statValue, statIndex) => (
                  <td key={statIndex} className="p-2 bg-gray-800 border-b border-gray-600">{statValue}</td>
                ))}
              </tr>
            </tbody>
          </table>

          {/* Role-Wise Importance Reasoning Section */}
          {data.role_wise_importance_reasoning[player.role] && (
            <div className="mt-4">
              <h4 className="font-bold text-white">Role Importance for {player.role}:</h4>
              <p className="text-sm text-gray-400 mt-1">
                {data.role_wise_importance_reasoning[player.role]}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
