'use client'
import { ProductType } from '@/lib/defination';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "flowbite-react";
import DataTable, { TableColumn } from 'react-data-table-component';
import SearchButton from '@/components/search/searchButton';
import { useRouter } from 'next/navigation';
import { BASE_URL,ACCESS_TOKEN } from '@/lib/constants';
import { placeHolderImage } from '@/lib/defination';
export default function DashBoard() {
  const router=useRouter()
  const [products,setProducts]=useState<ProductType[]>([])
  const  [loading,setLoading]=useState(false)
  const[openModalEdit,setModalProductEdit]=useState(false)
  const[productEcit,setProductEdit]=useState<ProductType>()
  const[openModal,setOpenModal]=useState(false)
  const[buttonDelete,setButtonDelete]=useState(false)
  const[productdetail,setProductDetail]=useState<ProductType>()
 
  useEffect(()=>{
     fetch(`${BASE_URL}/api/products/?page=1&page_size=40`)
    .then(res=>res.json())
    .then((data)=>
    { const result=data.results
      setProducts(result)
      const isSellerLyhouPhiv = result.some((pro: { seller: string; }) => pro.seller === 'lyhou phiv');
      console.log(isSellerLyhouPhiv)
      setButtonDelete(isSellerLyhouPhiv)
    })
    .catch(err=>console.log(err))
    
},[])
const ProductDetail=(product:ProductType)=>{
  setProductDetail(product)
  setOpenModal(true)
}
const EditComponent=(product:ProductType)=>{
 setProductEdit(product)
 setModalProductEdit(true)
}
const handleDelete=(product:ProductType)=>{
  const id=product.id
  fetch(`${BASE_URL}/api/products/${id}/`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json', 
       'Authorization':`Bearer ${ACCESS_TOKEN}`
    }})
    setProducts(products.filter((product)=>product.id!==id))
}
const handleFilter=(event:any)=>{
  const search=event.target.value.toLowerCase()
  const newProduct=products.filter((product)=>{
   return product.name.toLowerCase().includes(search);
  })
  setProducts(newProduct)
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
      selector: (row):JSX.Element|any => <img className='w-[80px] h-[70px]' src={row.image} width={500} height={500}  alt={row.name}/>,
    },

    {
      name: "Action", 
      selector: row => 
        <React.Fragment> 
          <button className='bg-blue-700 text-base text-white py-2 px-4 rounded mr-1'onClick={()=>ProductDetail(row)}>view</button> 
          {row.seller === 'lyhou phiv' ? <button className='bg-green-700 text-base text-white py-2 px-4 rounded mr-1' onClick={() =>router.push(`/edit/${row.id}`)}>Edit</button> : null}
          {row.seller === 'lyhou phiv' ? <button className='bg-red-700 text-base text-white py-2 px-4 rounded mr-1' onClick={() => handleDelete(row)}>Delete</button> : null}
        </React.Fragment>
    } 
    
  ];
  return (
    <main>
       <section className='mt-[20px]'>
        <SearchButton onChange={handleFilter}/>
      </section>
       <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={productdetail?.image||placeHolderImage} width={500} height={500} alt={productdetail?.name||"Untitle"} className="w-full h-96 object-fit" />
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
