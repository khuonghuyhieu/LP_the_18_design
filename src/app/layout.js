import Layout from "@/components/layouts";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/utils";
import { GilroyFont, PPraderFont } from "@/styles/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          PPraderFont.variable,
          GilroyFont.variable,
          "min-h-screen font-sans antialiased"
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
