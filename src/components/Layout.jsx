import Card from "./Card";
import Category from "./Category";
import Header from "./Header";

import RightSidebar from "./RightSidebar";
import Sidebar from "./Sidebar";

export default function Layout({category}) {
  return (
    <div className="bg-gray-100">
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-24 ">
        <div className="p-4    rounded-lg ">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mb-4">
           <Category category={category} />
           <div className="space-y-4">
           <Card />
           <Card />
           <Card />
           </div>
           <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
