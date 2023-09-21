import Link from "next/link";

export default function Home() {
  return (
    <section className="text-white text-center bg-[rgba(252,_104,_18,_0.30)] z-10  h-screen w-screen p-8 mx-auto">
      <div className="mx-auto w-full sm:w-3/6 lg:w-2/6 h-full flex flex-col items-center justify-center">
        <h1 className="mb-8 font-bold text-2xl">
          Bienvenido a la Trivia de YSY A
        </h1>
        <div className="bg-gray-500  w-full border-[3px] p-3 mb-8 rounded-md">
          <p>¡Prepárate para un desafío musical!</p>
          <p>
            En esta aplicación, te desafiamos a adivinar las canciones del
            artista YSY A.
          </p>
        </div>
        <Link
          href="/trivia"
          className=" font-bold uppercase w-full my-8 px-4 py-2 rounded-xl bg-[#fc6812]"
        >
          Comenzar la trivia
        </Link>
        <Link
          href="/trivia/leaderboard"
          className="text-[#fc6812]  font-bold uppercase w-full mb-4 px-4 py-2 rounded-xl bg-white"
        >
          Ver puntuaciones
        </Link>
      </div>
    </section>
  );
}
//
