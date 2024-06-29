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
    <html lang="es">
      <body className={inter.className}>
        <h1 className="bg-green-900 px-3">Root layout</h1>
        {children}
      </body>
    </html>
  );
}
