import Link from "next/link";

export default function Home() {
  return (
    <div className="z-10 inline">
      <h1>YSY A</h1>
      <p></p>
      <button className="text-white font-bold uppercase px-4 py-2 rounded-xl bg-[#fc6812]">
        Empezar
      </button>
      <Link href="/trivia">Ir</Link>
    </div>
  );
}
