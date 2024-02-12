import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen  ${inter.className}`}
    >
      <Layout />
    </main>
  );
}
