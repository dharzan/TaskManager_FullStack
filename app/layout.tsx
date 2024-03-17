import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/app/Components/SideBar";
import GlobalStylesProvider from "@/app/providers/GlobalStylesProvider";
import ContextProvider from "./providers/ContextProvider";

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
        <ContextProvider>
          <GlobalStylesProvider>
            <SideBar />
            {children}
          </GlobalStylesProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
