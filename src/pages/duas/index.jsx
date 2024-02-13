import Card from "@/components/Card";
import Category from "@/components/Category";
import Header from "@/components/Header";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";

export default function Duas({category, subCategory, duas}) {
    // console.log("duas",duas)
  return (
    <div className="bg-gray-100">
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-24 ">
        <div className="p-4    rounded-lg ">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mb-4">
           <Category category={category} subCategory= {subCategory} />
           <div className="space-y-2 h-screen overflow-auto">
           {
            subCategory.map((subCat, index) =><Card key={index} subCat={subCat} duas={duas} /> )
           }
           </div>
           <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}


// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:8000/api/category')
    const category = await res.json()
   
    const sub_categoryRes = await fetch('http://localhost:8000/api/sub_category');
    const sub_category = await sub_categoryRes.json()


    const duasRes = await fetch('http://localhost:8000/api/dua');
    const duas = await duasRes.json()
    // console.log("sdfd",duas.data)
    return {
      props: {
        category:category?.data,
        subCategory:sub_category?.data,
        duas:duas?.data
      },
      revalidate:10
    }
  }