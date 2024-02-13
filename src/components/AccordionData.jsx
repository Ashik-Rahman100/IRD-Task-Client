import Link from "next/link";
import { useState } from "react";
import NestedAccordion from "./NestedAccordion";

export default function AccordionData({ item, subCategory }) {
  console.log("sub category", subCategory)
  const [accordionOpen, setAccordionOpen] = useState(false);

  
  return (
   <Link href={`/duas/${item?.cat_name_en}`}>
    <div className="p-4 ">
      <div className=" hover:bg-gray-100 border-2 rounded-lg p-4" onClick={() => setAccordionOpen(!accordionOpen)}>
        <button
          
          className="text-start w-full"
        >
          <span className={`font-bold `}>{item.cat_name_en}</span>
          <p className="text-gray-500">Subcategory: {item.no_of_subcat}</p>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
          {
            subCategory.slice(0, item.no_of_subcat).map((category, index) => <NestedAccordion key={index} category={category}  />)
          }
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
