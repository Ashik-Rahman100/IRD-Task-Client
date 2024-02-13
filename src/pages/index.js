import { Inter } from "next/font/google";
import Duas from "./duas";

const inter = Inter({ subsets: ["latin"] });

export default function Home({category,subCategory}) {
console.log(subCategory)
  return (
    <main
      className={`min-h-screen bg-gray-50  ${inter.className}`}
    >
      <Duas category={category} />
    </main>
  );
}



// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:8000/api/category')
  const category = await res.json()
 
  const sub_categoryRes = await fetch('http://localhost:8000/api/sub_category');
  const sub_category = await sub_categoryRes.json()


  return {
    props: {
      category:category?.data,
      subCategory:sub_category?.data
    },
  }
}

