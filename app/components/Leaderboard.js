"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PlayerRow from "./PlayerRow";
import SpinnerLoader from "./SpinnerLoader";

const Leaderboard = () => {
  const [leaderData, setLeaderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get("/api/leaderboard");
        setLeaderData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error al cargar puntuaciones");
        setLoading(false);
      }
    };

    fetchBoard();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <SpinnerLoader />
        </>
      ) : error ? (
        <p>{error}</p>
      ) : leaderData ? (
        <>
          <h1 className="text-[#fc6812] bg-white py-2 px-6 rounded-[10px] w-full font-bold mb-2">
            TOP 5 JUGADORES
          </h1>
          {leaderData.map((player, index) => (
            <PlayerRow key={player.id} player={player} position={index + 1} />
          ))}
        </>
      ) : null}
    </>
  );
};

export default Leaderboard;
