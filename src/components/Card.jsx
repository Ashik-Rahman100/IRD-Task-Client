import { useState } from "react";

export default function Card({subCat, duas}) {

  const [dua, setDua] = useState([])
  console.log("subCt", subCat)
  console.log("duas", duas)

  const duaData = duas.filter((dua) => dua.subcat_id === subCat.subcat_id )
  console.log(duaData)

  if(duas.subcat_id === subCat.subcat_id){
    return setDua(duas)
  }
  console.log(('dua',dua ))
  return (
    <div>
      <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
           {subCat.subcat_name_en}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          
        </p>

      </div>
    </div>
  );
}

