import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight:'200' });

export const metadata: Metadata = {
  title: "First steps",
  description: "Curso Udemy del señor Fernando Herrera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="w-full h-full">
      <body className={`${inter.className} w-full h-full`}>
        {children}
      </body>
    </html>
  );
}
