const PlayerRow = ({ player, position }) => (
  <div className="rounded-[10px] bg-white h-14 w-full p-[10px] mb-2 flex items-center font-bold text-black">
    <p className="text-left mr-[20px] text-lg">{position}</p>
    <p className="text-left text-lg">{player.username}</p>
    <div className="ml-auto py-2 px-4 bg-gradient-to-r from-[rgba(255,_87,_51,1)] to-[rgba(255,_87,_51,0.75)] rounded-[20px]">
      <p className="text-left text-sm text-white">{player.points}pts</p>
    </div>
  </div>
);
export default PlayerRow;
