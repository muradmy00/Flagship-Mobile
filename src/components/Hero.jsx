import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'

const Hero = () => {

    
  return (

    <div className="flex flex-col sm:flex-row border border-orange-300">

        {/* Hero Left Side */}

        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">

        <div className="text-[#414141]">

            <div className="flex items-center gap-2">

                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className="font-medium text-sm md:text-base">OUR SHOP</p>

            </div>

            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-red-400">SPECIAL DISCOUNT</h1>

            <div className="flex items-center gap-2">

            <Link to='/collection'> <p className="font-semibold text-sm md:text-base cursor-pointer">SHOP NOW</p> </Link>
               <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p> 

            </div>

        </div>

        </div>



    {/* Hero Right Side */}
    <img src={hero} className='w-full sm:w-1/2' alt="" />




      
    </div>
  )
}

export default Hero
