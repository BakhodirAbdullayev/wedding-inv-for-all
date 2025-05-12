import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Dostonbek & Sevinch",
//   description:
//     "Dostonbek va Sevinchning nikohini nishonlashga taklif qilamiz. Ushbu maxsus kunni siz bilan birga o'tkazishni kutmoqdamiz.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center items-center`}>
        {children}
      </body>
    </html>
  );
}
