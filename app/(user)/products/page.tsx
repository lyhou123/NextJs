'use client'
import CardComponent from '@/components/card/cardComponent'
import { BASE_URL } from '@/lib/constants'
import { ProductType } from '@/lib/defination'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
export default function Page() {
    const router = useRouter();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    useEffect(() => {
        fetch(`${BASE_URL}/api/products/?page=${currentPage}&page_size=${pageSize}`)
            .then(res => res.json())
            .then(data => setProducts(data.results));
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <main className='container mx-auto mt-[35px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-[24px]'>
                {products.map((pro, key) => (
                    <CardComponent
                        key={key}
                        onClick={() => router.push(`/service/${pro.id}`)}
                        name={pro.name}
                        price={pro.price}
                        image={pro.image}
                        desc={pro.desc}
                    />
                ))}
            </div>
            <nav className='grid place-content-center mt-[35px]'>
                <ul className="inline-flex -space-x-px text-sm mx-auto">
                    <li>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </button>
                    </li>
                    {[...Array(pageSize)].map((_, index) => (
                         <li key={index}>
                         <button
                             onClick={() => handlePageChange(index + 1)}
                             className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === index + 1 ? 'text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : ''}`}
                         >
                             {index + 1}
                         </button>
                     </li>
                    ))}
                    <li>
                        <button
                            disabled={currentPage === 5}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </main>
    );
}
