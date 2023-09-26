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
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <Providers>
        <main
          className={`${poppins.className} min-h-screen w-screen`}
          role="main"
          aria-label="Contenedor de la aplicación"
        >
          <Image
            src="/bg-antezana.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Portada del disco Antezana 247 de YSY A"
            className="z-[-1] fixed w-full h-full"
          />
          {children}
        </main>
      </Providers>
    </>
  );
}
