import Image from "next/image";
import Providers from "./Providers";
import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Trivia de YSY A",
  description:
    "Pon a prueba tus conocimientos musicales con nuestra trivia de música de YSY A. Demuestra cuánto sabes sobre el artista y sus canciones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <Providers>
        <body className="relative">
          <div className="fixed top-0 left-0 w-full h-screen z-0">
            <Image
              src="/bg-antezana.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Portada del disco Antezana 247 de YSY A"
            />
          </div>
          <main
            className={`${poppins.className} relative min-h-screen w-screen`}
            role="main"
            aria-label="Contenedor de la aplicación"
          >
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
