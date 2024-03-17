import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/Components/SideBar/SideBar";
import GlobalStylesProvider from "@/providers/GlobalStylesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Full Stack Task Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStylesProvider>
          <SideBar />
          {children}
        </GlobalStylesProvider>
       
      </body>
    </html>
  );
}
