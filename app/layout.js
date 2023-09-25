import Image from "next/image";
import Providers from "./Providers";
import "./globals.css";
import { Poppins } from "next/font/google";

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
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <main
            className="min-h-screen w-screen"
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
      </body>
    </html>
  );
}
//
