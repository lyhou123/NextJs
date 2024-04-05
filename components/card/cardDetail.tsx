import { ProductDetailType, ProductRespone, ProductType, placeHolderImage } from "@/lib/defination";
import { Card } from "flowbite-react";
export default function CardDetail(pros:ProductRespone) {
  const placeHolderImage1=placeHolderImage;
  return (
    <main className="container mx-auto mt-3 ">
      <div className="grid lg:grid-cols-2 mx-auto">
        <div className="max-w-[620px]">
          <img src={pros?.image||placeHolderImage} alt="" className="w-[620px]"/>
        </div>
        <div className="leading-[40px]">
          <p>Home / Men / DNK Blue Shoes</p>
          <p className="font-semibold">Men</p>
          <p className="text-[30px]">{pros.name}</p>
          <p className="text-[20px] font-semibold">{pros.price} $ +Free Shipping</p>	
          <p className="leading-">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
          <div>
            
<form>
    <label className="font-semibold">Choose quantity:</label>
    <div className="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="5" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
    <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a 5 digit number from 0 to 9.</p>
</form>
          </div>
          <button className="mt-4 bg-green-600 text-white px-5 py-1 rounded-lg">Add to Cart</button>
        </div>
      </div>
      <div className="mt-[35px] leading-4">
      <hr className="bg-green-500 border-none h-[1px] w-[90px]" />
      <p className="text-black font-semibold">Descriptions</p>
     <p className="text-gray-500 font-semibold text-base mt-4">Unwind in comfort without compromising style with our Relaxed Fit Joggers. Crafted for both leisure and an active lifestyle, these joggers redefine casual chic. The soft, breathable fabric and relaxed silhouette provide an unmatched level of ease, making them perfect for lounging at home or stepping out for an on-the-go adventure. Versatile and effortlessly cool, our Relaxed Fit Joggers seamlessly combine comfort and fashion, ensuring you feel relaxed and look effortlessly stylish no matter the occasion.</p>
      </div>
      <p className="mt-4 text-[24px] text-black font-semibold ">Suggestion Products</p>
      <div className="mt-[30px] grid sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-[24px]">
        <Card
      className="container mx-auto h-[400px] w-[300px]"
      renderImage={()=>(<img className='w-[310px] h-[350px] overflow-hidden object-fit' src='https://imgs.search.brave.com/mqYOp3wF3iOGpKVRRdFG2pnewoxINT5a29nygZ1BWCM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/c29sYXRlZC1vcGVu/ZWQtYmxhY2stdC1z/aGlydF8xMjU1NDAt/MTQ1MS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw' alt= "productName"/>
      )}  
    >
      <h5 className="mt-[-40px] text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Product Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos molestias, exercitationem aut quibusdam ducimus dolore fugiat possimus dolor quam consequuntur!
      </p>
      <p className="text-green-600 font-bold">
       9999$
      </p>
    </Card>
    <Card
      className="container mx-auto h-[400px] w-[300px]"
      renderImage={()=>(<img className='w-[310px] h-[350px] overflow-hidden object-fit' src='https://imgs.search.brave.com/mqYOp3wF3iOGpKVRRdFG2pnewoxINT5a29nygZ1BWCM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/c29sYXRlZC1vcGVu/ZWQtYmxhY2stdC1z/aGlydF8xMjU1NDAt/MTQ1MS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw' alt= "productName"/>
      )}  
    >
      <h5 className="mt-[-40px] text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Product Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos molestias, exercitationem aut quibusdam ducimus dolore fugiat possimus dolor quam consequuntur!
      </p>
      <p className="text-green-600 font-bold">
       9999$
      </p>
    </Card>
    <Card
      className="container mx-auto h-[400px] w-[300px]"
      renderImage={()=>(<img className='w-[310px] h-[350px] overflow-hidden object-fit' src='https://imgs.search.brave.com/mqYOp3wF3iOGpKVRRdFG2pnewoxINT5a29nygZ1BWCM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/c29sYXRlZC1vcGVu/ZWQtYmxhY2stdC1z/aGlydF8xMjU1NDAt/MTQ1MS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw' alt= "productName"/>
      )}  
    >
      <h5 className="mt-[-40px] text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Product Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos molestias, exercitationem aut quibusdam ducimus dolore fugiat possimus dolor quam consequuntur!
      </p>
      <p className="text-green-600 font-bold">
       9999$
      </p>
    </Card>
    <Card
      className="container mx-auto h-[400px] w-[300px]"
      renderImage={()=>(<img className='w-[310px] h-[350px] overflow-hidden object-fit' src='https://imgs.search.brave.com/mqYOp3wF3iOGpKVRRdFG2pnewoxINT5a29nygZ1BWCM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/c29sYXRlZC1vcGVu/ZWQtYmxhY2stdC1z/aGlydF8xMjU1NDAt/MTQ1MS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw' alt= "productName"/>
      )}  
    >
      <h5 className="mt-[-40px] text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      Product Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos molestias, exercitationem aut quibusdam ducimus dolore fugiat possimus dolor quam consequuntur!
      </p>
      <p className="text-green-600 font-bold">
       9999$
      </p>
    </Card>
      </div>
    </main>
  );
}
