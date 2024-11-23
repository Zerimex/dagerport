import "./globals.css";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import Image from "next/image";

export const metadata = {
  title: "Dot Dager | Portfolio",
};

const baseneue = localfont({
  src: [
    {
      path: "./fonts/BaseNeueTrial-WideBlackObliq.ttf",
    },
  ],
  variable: "--font-baseneue",
})

const baseneue2 = localfont({
  src: [
    {
      path: "./fonts/BaseNeueTrial-WideLightObliq.ttf",
    },
  ],
  variable: "--font-baseneueh3",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-inter',
  });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${baseneue.variable} ${baseneue2.variable} relative`}>
      <Image src="/light1.png" width={1440} height={500} className="absolute -z-40 top-[-100px]" alt="Light"/>
        <div className="max-w-screen-desktop mx-auto">
          <div className="mx-20">
            {children}
          </div>
        </div>

        <div className="flex justify-center bg-slate-400 bg-gradient-to-r from-[#FFA100] to-[#FFFFFF] py-[10px]">
            <Image src="/logodark.png" width={191} height={40} alt="Logo pepino" />
          </div>
      </body>
    </html>
  );
}
