
import CardDetail from '@/components/card/cardDetail'
import { ProductDetailType } from '@/lib/defination'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
const BASEURL="https://store.istad.co"
const getProduct=async(id:number)=>{
    const data=await fetch(`${BASEURL}/api/products/${id}`)
    const respone=await data.json()
    return respone;
}
export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const id = params.id
    const product = await fetch(`https://store.istad.co/api/products/${id}/`).then((res) => res.json())
    const previousImages = (await parent).openGraph?.images || []
    return {
      title: product.name,
      description:product.desc,
      openGraph: {
        images: [product.image, ...previousImages],
      },
    }
  }
export default async function ProductDetail(props:ProductDetailType) {
    const data= await getProduct(props.params.id)
    console.log(data)
  return (
    <div>
      <CardDetail
        name={data.name}
        desc={data.desc}
        image={data.image}
        price={data.price}
      />
    </div>
  )
}
