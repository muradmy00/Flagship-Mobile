import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from './Title'
import ProductItem from "./ProductItem";


const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProduct,setLatestProduct] = useState([]);

    //console.log(products)

     useEffect(()=>{

        setLatestProduct(products.slice(0,14));

     },[])
    
  return (

    <div className="my-10 ">

        <div className="text-center py-8 text-3xl">

            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                  Are you looking to buy a used mobile phone at an affordable price in Bangladesh? Look no further than Flagship Mobile, your trusted source for high-quality used mobile phones at unbeatable prices.
            </p>

        </div>
      

        {/* Rendering PRODUCTS */}

        <div className="grid w-3/2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">

        {
            latestProduct.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }


        </div>



    </div>
  )
}

export default LatestCollection
