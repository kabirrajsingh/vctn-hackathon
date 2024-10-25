import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Assuming you have a mapping of agent names to icon URLs
const agentImages = {
  "Omen": "https://img.redbull.com/images/c_crop,x_991,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/2/16/bm7cdtb6xdhcibbweehq/valorant-omen",
  "Cypher": "https://images3.alphacoders.com/127/1274317.jpg",
  "Viper": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/45c03199893217.5efdc2ce756a0.jpg",
  "Chamber": "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/6/23/amyfccnxh273aiuokpjy/chamber-valorant",
  "Neon": "https://img.redbull.com/images/c_crop,x_264,y_0,h_546,w_409/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/10/31/yy1oarooqat7lunsjw5r/valorant-neon",
  "Skye": "https://img.redbull.com/images/c_crop,x_515,y_0,h_1080,w_810/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/11/13/tfoa3mi8rg3edw70fuip/valorant-skye",
  "Brimstone": "https://img.redbull.com/images/c_crop,x_951,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/6/8/rqvcvtp5w9cxuuv3o6no/valorant-agent-brimstone",
  "Sova": "https://img.redbull.com/images/c_crop,x_739,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/4/14/lyuguphp3zyhcxdvyfat/valorant-sova",
  "Jett": "https://img.redbull.com/images/c_crop,x_231,y_0,h_675,w_506/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/9/28/wgotviw3gjqzyj2u6ql2/jett-valorant",
  "Breach": "https://img.redbull.com/images/c_crop,x_223,y_0,h_563,w_423/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/10/30/odxgos7ooyc39zura8wn/valorant-operator-breach",
  "Fade": "https://img.redbull.com/images/c_crop,x_144,y_0,h_1000,w_750/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/12/21/ztwjghliscqjl4m3nfrc/fade-valorant",
  "Reyna": "https://i.pinimg.com/736x/f4/0d/e0/f40de0cd5bf4125496f8fb7da266c0af.jpg",
  "Gekko": "https://pbs.twimg.com/media/FqUaJEjXwAENYyk?format=jpg&name=4096x4096",
  "Deadlock": "https://img.redbull.com/images/c_crop,x_448,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2023/11/15/npjnlpq0guabgadtqkbq/deadlock-valorant",
  "Killjoy": "https://i.pinimg.com/736x/68/a1/59/68a15930a6cf77615f7afe348e05978e.jpg",
  "Astra": "https://img.redbull.com/images/c_crop,x_317,y_0,h_1080,w_810/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/3/25/wk6ik95vzmxyagx9md8e/valorant-agent-astra",
  "Phoenix": "https://i.pinimg.com/736x/21/c6/53/21c65314a5973f28d1f3b9bd4c476b56.jpg",
  "Sage": "https://pbs.twimg.com/media/GDKzR34X0AAuoBx.jpg:large",
  "KAY/O": "https://pbs.twimg.com/media/F5bubyxbYAA8BjJ.jpg:large",
  "Yoru": "https://i.pinimg.com/originals/75/b0/2e/75b02e629877f4e6720a8d2a0429ab38.png",
  "Harbor": "https://img.redbull.com/images/c_crop,x_336,y_0,h_570,w_428/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2023/1/24/ngljfqaupmiywuqas5tl/harbor-valorant"
};

// Set a maximum number of performance stats to display
const MAX_STATS_DISPLAY = 8;

export default function AssistantMessage({ data, onPlayerClick }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  console.log(data);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player.player_name);
    onPlayerClick(player);
  };

  return (
    <div className="mt-4 space-y-8">
      {data && data.response} 
      <h2 className="text-2xl font-bold text-white mb-6">
        Team Composition for <span className="text-red-500">{data?.team_name}</span>
      </h2>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h4 className="font-bold text-white text-lg">High-Level Reason:</h4>
        <p className="text-sm text-gray-400 mt-1">{data?.high_level_reason}</p>
      </div>

      {data?.team_composition?.map((player, index) => (
        <div
          key={index}
          className={`mb-6 p-6 bg-gray-900 text-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
            selectedPlayer === player.player_name ? 'border-2 border-red-600' : ''
          }`}
          onClick={() => handlePlayerClick(player)}
        >
          <div className="flex items-center">
            <img 
              src={agentImages[player.top_agent] || 'https://dotesports.com/wp-content/uploads/2024/07/valorant-agent-full-list.jpg'}
              alt={player.player_name}
              className="w-16 h-16 rounded-full mr-4 border border-gray-700"
            />
            <div className="flex-grow">
              <h4 className="font-semibold text-xl">
                {player.player_name} ({player.role})
              </h4>
              <p className="text-sm text-gray-300">
                Agent Assigned: {player.top_agent} | ID: {player.player_id}
              </p>
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
                  <td key={statIndex} className="p-2 bg-gray-800 border-b border-gray-600">
                    {typeof statValue === 'number' ? statValue.toFixed(2) : statValue}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          {data?.role_wise_importance_reasoning?.[player.role] && (
            <div className="mt-4">
              <h5 className="font-bold">Role-wise Importance Reasoning</h5>
              <ReactMarkdown className="text-gray-300 mt-2">
                {data.role_wise_importance_reasoning[player.role]}
              </ReactMarkdown>
            </div>
          )}
        </div>
      ))}

      {/* Team Strategy Section */}
      {data?.strategy_text && (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-lg text-white">Team Strategy:</h4>
          <ReactMarkdown className="text-gray-300 mt-2">
            {data.strategy_text}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}
