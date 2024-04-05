import { useRouter } from 'next/navigation';
import React from 'react'
type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchButton(handleFilter:Props) {
  const router=useRouter()
  return (
  <div className='flex justify-between w-[1200px] mx-auto'>
    <div>
      <button className='bg-orange-400 text-white px-4 py-[6px] rounded-lg' onClick={()=>router.push(`/product`)}>Add Product</button>
    </div>
    <div className='w-[500px]'>
    <form className="max-w-md mx-auto">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
    <input type="search" id="default-search" onChange={handleFilter.onChange} className="block w-full p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Searching..." required />
    </div>
  </form>
    </div>
  </div>
 
  )
}
