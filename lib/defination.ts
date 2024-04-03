export type ProductType={
    id: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    category: string;
    seller: string;
}
export type ProductRespone={
    name:string,
    image:string,
    desc:string,
    price:number,
    onClick?:()=>void
}
export type ProductDetailType={
    params:{
        id:number
    },
    searchParams: { [key: string]: string | string[] | undefined }
}
export const placeHolderImage="https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?sl=1"