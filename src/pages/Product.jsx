import { Link, useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');

   const fetchProductData = async () => {

    products.map((item)=>{


      if (item._id === productId) {

        setProductData(item)
        setImage(item.image[0])
        //console.log(item)
        return null;
      }

    })

   }

   useEffect(()=>{

    fetchProductData();

   },[productId,products])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
    {/* Product Data */}
    <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

    {/* Product Images */}
    <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">

    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">

    {
       productData.image.map((item,index) => (

        <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />

       ))
    }

    </div>


    <div className="w-full sm:w-[80%]">

      <img className="w-full h-auto" src={image} alt="" />

    </div>

    </div>


    {/* *********Product Info ************* */}

    <div className="flex-1">

      <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

      <div className="flex items-center gap-1 mt-2">

      <img className="w-3 5" src={assets.star_icon} alt="" />
      <img className="w-3 5" src={assets.star_icon} alt="" />
      <img className="w-3 5" src={assets.star_icon} alt="" />
      <img className="w-3 5" src={assets.star_icon} alt="" />
      <img className="w-3 5" src={assets.star_dull_icon} alt="" />

      <p className="pl-2">(122)</p>

      </div>

          <p className="mt-5 text-xl font-medium"><del>{productData.official} {currency}</del> (Official)</p>
          <p className="mt-5 text-xl font-medium"><del>{productData.unofficial} {currency}</del> (Unofficial)</p>
          <p className="mt-5 text-xl font-medium">{productData.price} {currency} (Offer Price)</p>
          <p className="mt-5  font-medium">Storage: {productData.variant}</p>
      <br/>
      <b className="text-red-500">*{productData.available}</b><br />
     <br /> 
      <p className="text-red-500"><b>Color:</b> {productData.color}</p>
     <br /> 
     
          <p className="text-red-500"><b>Phone Quality:</b> {productData.quality}</p>



      <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>


      <div className="flex flex-col gap-4 my-8">

      <b className="prata-regular text-xl text-red-800">Follow Rules:</b>
      <h3 className="prata-regular text-sm text-gray-800">1. Copy this phone name then click order now</h3>
      <h3 className="prata-regular text-sm text-gray-800">2. If not contacted within 2 days of placing the order, The order will be cancelled.</h3>

      </div>

        <Link to='/orders'><button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">Order Now</button></Link>
      
      <hr className="mt-8 sm:w-4/5" />

      <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">

        <p>100% Original Product.</p>
        <p>After ordering, pick up the product from the shop.</p>
        <p>1 day Replacement warranty.</p>

      </div>

    </div>

    </div>

 
    {/* Related Products */}


    <RelatedProducts category={productData.category} subCategory={productData.subCategory} />


      {/* *********** Description and Review Section ************** */}

      <div className="mt-20">

        <div className="flex">

          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>

        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">

          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>

        </div>

      </div>


    </div>
  ):<div className="opacity-0"></div>
}

export default Product
