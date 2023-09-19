import Link from "next/link";

export default function Home() {
  return (
    <section className="z-10 inline">
      <h1>Trivia de YSY A</h1>
      <p>
        En esta aplicación es un desafío donde tenés que adivinar 11 canciones
        del artista YSY A
      </p>
      <Link
        href="/trivia"
        className="text-white font-bold uppercase px-4 py-2 rounded-xl bg-[#fc6812]"
      >
        Empezar Trivia
      </Link>
    </section>
  );
}
//
