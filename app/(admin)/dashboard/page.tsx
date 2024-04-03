'use client'
import { ProductType } from '@/lib/defination';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "flowbite-react";
import DataTable, { TableColumn } from 'react-data-table-component';
export default function DashBoard() {
  const [products,setProducts]=useState<ProductType[]>([])
  const  [loading,setLoading]=useState(false)
  const[openModal,setOpenModal]=useState(false)
  const[buttonDelete,setButtonDelete]=useState(false)
  const[productdetail,setProductDetail]=useState<ProductType>()
  const ImagePlaceHolder="https://imgs.search.brave.com/Bnih5OaEx311pSibhBdL7BVSCg0rs96EYZHLu3IaKr0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmVsZW1l/bnRvci5jb20vZG9j/cy9hc3NldHMvaW1n/L2VsZW1lbnRvci1w/bGFjZWhvbGRlci1p/bWFnZS5wbmc"
  const BASEURL="https://store.istad.co"
  const Token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0MTYwNTUwLCJpYXQiOjE3MTIwMDA1NTAsImp0aSI6ImY0MTU2NmJjYmE0MDQ5NWNhMmE1MzY2NWFmMTBlYzAyIiwidXNlcl9pZCI6N30.35LyfaZdT6Gv1qqOTAbifPFkZHd1Ch4-tJiL3_E-UY0"
  useEffect(()=>{
     fetch(`${BASEURL}/api/products/`)
    .then(res=>res.json())
    .then((data)=>
    { const result=data.results
      setProducts(result)
      const isSellerLyhouPhiv = result.some((pro: { seller: string; }) => pro.seller === 'lyhou phiv');
      setButtonDelete(isSellerLyhouPhiv)
    })
    .catch(err=>console.log(err))
    
},[])
const ProductDetail=(product:ProductType)=>{
  setProductDetail(product)
  setOpenModal(true)
}
const ProductChekSeller=(products:ProductType)=>{
  {products?setButtonDelete(true):setButtonDelete(false)}
}
const handleDelete=(product:ProductType)=>{
  const id=product.id
  setLoading(true)
  fetch(`${BASEURL}/api/products/${id}/`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json', 
       'Authorization':`Bearer ${Token}`
    }})
}
const handleEdit=(product:ProductType)=>{
  const id=product.id
  setLoading(true)
  fetch(`${BASEURL}/api/products/${id}/`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json', 
       'Authorization':`Bearer ${Token}`,
}}).then(res=>res.json())
   .then((data)=>setProducts(data))
   .catch(err=>console.log(err))
}
  const columns:TableColumn<ProductType>[] = [
    {
      name: 'Product Title',
      selector: row => row.name,
    },
    {
      name: 'Price (USD)',
      selector: row => row.price,
    },
    {
      name: 'Image',
      selector: (row):JSX.Element|any => <img className='w-9 h-9' src={row.image} width={500} height={500} alt={row.name}/>,
    },

    {
      name: "Action", 
      selector: row => 
        <React.Fragment> 
          <button className='bg-blue-700 text-white p-2 rounded mr-1'onClick={()=>ProductDetail(row)}>view</button> 
          {(buttonDelete)?<button className='bg-red-700 text-white p-2 rounded' onClick={()=>handleDelete(row)}>Delete</button>:('')}
          <button className='bg-yellow-700 text-white p-2 rounded mr-1' onClick={()=>handleEdit(row)}>Edit</button> 
        </React.Fragment>
    } 
    
  ];
  return (
    <main>
       <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={productdetail?.image||ImagePlaceHolder} width={500} height={500} alt={productdetail?.name||"Untitle"} className="w-full h-96 object-fit" />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productdetail?.desc}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             {productdetail?.name}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <DataTable progressPending={loading}	columns={columns} data={products} pagination persistTableHead/>
    </main>
  )
}
