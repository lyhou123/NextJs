'use client'
import { ProductType } from "@/lib/defination";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import '@/app/globals.css'
import HerosectionComponent from "../component/hero/herosection";
import CardComponent from "../component/card/cardComponent";
import Productsfeature from "../component/productList/productsfeature";
export default function Home() {
  const router=useRouter();
  const[products,setProduct]=useState<ProductType[]>([])
  const[loading,setLoading]=useState<boolean>(true)
  const placeHolderImage="https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
  const BASEURL="https://store.istad.co"
  useEffect(()=>{
    setLoading(true)
    fetch(`${BASEURL}/api/products/?page=1&page_size=20`)
    .then(res=>res.json())
    .then((data)=>{
      const result=data.results;
      setProduct(result)
      setLoading(false)
    })
    .catch(err=>console.log(err))
    setLoading(true)
  })
  return (
    <main className="container mx-auto">
      <HerosectionComponent/>
      <p className="text-center font-bold text-black text-[48px]">Products Feature</p>
      <hr className="w-[200px] h-[2px] border-none mx-auto bg-green-700" />
      <section>
          <Productsfeature/>
        </section>
      <section className="mt-[45px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-[24px]">
           {products.map((items,index)=>(
            <CardComponent
              key={index}
              onClick={()=>router.push(`/service/${items.id}`)}
              name={items.name}
              desc={items.desc}
              image={items.image||placeHolderImage}
              price={items.price}
            />
           ))}
        </section> 
      
    </main>
  );
}
