import Leaderboard from "../../components/Leaderboard";
import Link from "next/link";

const TopPlayers = () => {
  return (
    <section className="text-white text-center bg-[rgba(252,_104,_18,_0.30)] z-10  h-screen w-screen p-8 mx-auto">
      <div className="mx-auto w-full sm:w-3/6 lg:w-2/6 h-full flex flex-col items-center justify-center">
        <Leaderboard />

        <Link
          href="/trivia"
          className="mt-2 text-white font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl  bg-[#fc6812]  "
        >
          Empezar a jugar
        </Link>
      </div>
    </section>
  );
};
export default TopPlayers;
//
