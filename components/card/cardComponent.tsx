
"use client";
import { ProductRespone, ProductType } from "@/lib/defination";
import { Card } from "flowbite-react";
export default function CardComponent(props:ProductRespone) {
 const placeHolderImage="https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
  return (
    <Card
      onClick={props.onClick}
      className="container mx-auto h-[400px] w-[300px] cursor-pointer"
      renderImage={()=>(<img className='w-[310px] h-[400px] overflow-hidden object-fit' src={props?.image||placeHolderImage} alt={props.name} />
      )}  
    >
      <h5 className="mt-[-40px] text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props?.name||"Product Name"}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
        {props?.desc||"Product Description"}
      </p>
      <p className="text-green-600 font-bold">
        {props?.price||"Product Price"} $
      </p>
    </Card>
  );
}

