export type ProductType={
    id: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    category: {name:any};
    seller: string;
    quantity:number;
}
export type ProductType1={
    id: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    category: {name:any};
    quantity:number;
	
}
export type FormDataUpdate = {readonly id: number, category: {name: any}, name: string, desc: string, image?: string, price: string, quantity: string, seller: string, fileProduct: any}
export type FormDataCreate = {
    category: {
        name: string;
        icon: string;
    };
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
}
export type ProductTypeUpdate={
    id: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    category: {name:any};
    quantity:number;
	seller: string;
}
export type ProductRespone={
    name:string,
    image:string,
    desc:string,
    price:number,
    onClick?:()=>void
}
export type CatageoryType = {
	name: string;
	icon: string;
};

export type ProductPostType = {
	category: CatageoryType;
	name: string;
	desc: string;
	image: string;
	price: number;
	quantity: number;
};

export type ProductUpdateType = {
    id:number;
	category: CatageoryType;
	name: string;
	desc: string;
	image: string;
	price: number;
	quantity: number;
};
export const initialValues = {
	categoryName: "",
	categoryIcon: "",
	name: "",
	desc: "",
	image: "",
	price: 0,
	quantity: 0,
	fileIcon: null,
	fileProduct: null,
};
export const initialValuesUpdate = {
    id:0,
	categoryName: "",
	categoryIcon: "",
	name: "",
	desc: "",
	image: "",
	price: 0,
	quantity: 0,
	fileIcon: null,
	fileProduct: null,
};
export type ProductDetailType={
    params:{
        id:number
    },
    searchParams: { [key: string]: string | string[] | undefined }
}
export const placeHolderImage="https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?sl=1"