import AccordionData from "./AccordionData";
// Initialization for ES Users

export default function Category({ category, subCategory }) {
  console.log("category", category);
  return (
    <div>
      <div class="block w-full lg:h-[100%] lg:max-w-sm  bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="py-3 rounded-t-lg text-center text-xl  tracking-tight bg-green-500 text-white">
          Category
        </h5>

        <div className="h-screen overflow-scroll ">
          {category.map((item, index) => (
            <AccordionData key={index} item={item} subCategory={subCategory} />
          ))}
        </div>
      </div>
    </div>
  );
}
