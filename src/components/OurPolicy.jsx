import { assets } from "../assets/assets"

const OurPolicy = () => {


  return (

    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      

      <div>
        <img className="w-12 m-auto mb-5 " src={assets.exchange_icon} alt="" />
        <p className="font-semibold">Buy Sell & Exchange</p>
        <p className="text-gray-400">Phones are bought and sold and exchanged.</p>
      </div> 


    <div>
        <img className="w-12 m-auto mb-5 " src={assets.exchange_icon} alt="" />
        <p className="font-semibold">Pre Order</p>
        <p className="text-gray-400">We take pre-order for all types of Phones.</p>
    </div>


     <div>
         <img className="w-12 m-auto mb-5 " src={assets.quality_icon} alt="" />
         <p className="font-semibold">1 Days Replacement Policy</p>
        <p className="text-gray-400">1 day Replacement warranty excluding display/update issue</p>
     </div>


    <div>
        <img className="w-12 m-auto mb-5 " src={assets.support_img} alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
    </div>

    </div>
  )
}

export default OurPolicy
