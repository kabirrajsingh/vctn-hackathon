import React from 'react';
import { usePlayer } from '../contexts/PlayerContext';

// Mock JSON of agent images
const agentImages = {
  "Omen": "https://img.redbull.com/images/c_crop,x_991,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/2/16/bm7cdtb6xdhcibbweehq/valorant-omen",
  "Cypher": "https://images3.alphacoders.com/127/1274317.jpg",

  "Raze":"https://www.exitlag.com/blog/wp-content/uploads/2024/09/raze-valorant-agent-guide.webp",
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
}


export default function GameInfo() {
  const { selectedPlayer } = usePlayer();
  console.log(selectedPlayer);

  // Get the agent image based on the selected player's top agent


  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 h-full">
      {selectedPlayer ? (
        <>
          <div className="flex items-center mb-6">
            {/* <img
              src={selectedPlayer.player_photo_url}
              alt={selectedPlayer.player_name}
              className="w-16 h-16 rounded-full border-2 border-white mr-4"
            /> */}
            <div>
              <h2 className="text-3xl font-extrabold text-white">{selectedPlayer.player_name}</h2>
              <p className="text-sm text-gray-400">{selectedPlayer.role} - {selectedPlayer.top_agent}</p>
            </div>
          </div>
          <img
            src={agentImages[selectedPlayer?.top_agent] || "https://dotesports.com/wp-content/uploads/2024/07/valorant-agent-full-list.jpg"}
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
            src="https://assetsio.gnwcdn.com/the-big-valorant-tech-interview-riot-games-on-developing-the-next-big-competitive-fps-1593091431316.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
            alt="VALORANT Game"
            className="w-full h-52 object-cover rounded-lg shadow-md mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
          VALORANT is a tactical first-person shooter (FPS) game developed and published by Riot Games. Released in June 2020, it combines precise gunplay with strategic abilities, creating a competitive experience that requires both skill and teamwork. In the game, players take on the roles of "agents," each with unique abilities that range from healing allies to controlling the battlefield with smokes, flashes, and more. The core mode pits two teams of five against each other, with one team attacking to plant a spike (bomb) and the other defending. The roles of agents are categorized into Duelists, Controllers, Initiators, and Sentinels, each contributing differently to the team’s strategy. Matches are played in rounds, with the first team to reach 13 wins emerging victorious.

VALORANT's gameplay is highly strategic, with a focus on map control, communication, and precise aim. The maps are designed to offer various pathways and strategic choke points, encouraging different styles of play and rewarding teams that adapt quickly. It draws inspiration from classic shooters like Counter-Strike but adds a fresh twist with the inclusion of character-based gameplay. The game has rapidly grown in popularity, becoming a major title in the competitive esports scene with tournaments like the VALORANT Champions Tour (VCT). Its blend of tactical depth and character-driven play has made VALORANT a favorite among players looking for a challenging yet engaging FPS experience.
          </p>
        </div>
      )}
    </div>
  );
}
