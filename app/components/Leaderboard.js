"use client";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaderData, setLeaderData] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await fetch("/api/leaderboard");
        if (response.ok) {
          const data = await response.json();
          setLeaderData([...data]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchBoard();
  }, []);

  return (
    <>
      {leaderData !== null ? (
        leaderData.map((players, index) => {
          return (
            <>
              <h1 className="text-white">TOP 5 JUGADORES</h1>
              <div
                key={index}
                className="rounded-[10px] bg-white h-14 w-full p-[10px] mb-2 flex items-center font-bold text-black"
              >
                <p className="text-left mr-[20px] text-lg">{index + 1}</p>
                <p className="text-left text-lg">{players.username}</p>
                <div className="ml-auto py-2 px-4 bg-gradient-to-r from-[rgba(255,_87,_51,1)] to-[rgba(255,_87,_51,0.75)] rounded-[20px]">
                  <p className="text-left text-sm text-white">
                    {players.points}pts
                  </p>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <h2>Cargando puntuaciones...</h2>
      )}
    </>
  );
};
export default Leaderboard;
