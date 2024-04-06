import React from 'react'
import { BASE_URL } from '@/lib/constants'
import UpdatePageLayout from '@/components/form/editform'
type Props = {
	params:{
		id:number
	},
	searchParams:string
}
const getData=async(id:number )=>
{
  const datat=await fetch(`${BASE_URL}/api/products/${id}/`)
  const respone= await datat.json()
  return respone;
}
export default async function page(props:Props) {
  const data= await getData(props.params.id)
  console.log(data)
  return (
	<div>
       <UpdatePageLayout fileProduct={null} category={data.category} price={data.price} desc={data.desc} name={data.name} quantity={data.quantity} image={data.image} id={data.id} seller={data.seller} />
	</div>
  )
}
