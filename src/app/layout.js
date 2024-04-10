import { Inter, Actor, Roboto } from "next/font/google";
import "./globals.css";
import Top from "@/components/Top";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const actor = Actor({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata = {
  title: "Rotrade",
  description: "Furniture company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Top />
        <Navbar/>
        {children}</body>
    </html>
  );
}
