import Title from  '../components/Title'
import { assets } from  '../assets/assets'
import facebook from '../assets/facebook.png'
import map from '../assets/map.png'
import owner from '../assets/owner.png'
import OurPolicy from '../components/OurPolicy'

const Contact = () => {


  return (


    <div>

      <div className="text-center text-2xl pt-10 border-t">

      <Title text1={'CONTACT'} text2={'US'}/>

      </div>

      <div className='my-10 flex  flex-col justify-center md:flex-row gap-10 mb-28'>

        <img className='w-full  md:max-w-[680px] md:max-h-[420px]' src={assets.hero_img} alt="" />

      <div className='flex flex-col justify-center items-start gap-6'>

        <p className='font-semibold text-xl text-gray-600'>Our Shop</p>
          <p className='text-gray-500'>Masjid Market, Block-A <br />Shop No-1/4, Joypurhat</p>
          <p className='text-gray-500'>Phone: +8801300-606098 <br /> Email: flagshipmobileshop98@gmail.com</p>
        
          <div className="flex gap-5 cursor-pointer">
            <a target='none' href="https://www.facebook.com/flagshipmobileshop"> <img src={facebook} alt="" className="w-10 mr-4 hover:bg-gray-800 hover:rounded-full" /></a>
            <a target='none' href="https://maps.app.goo.gl/ebaUHP6ufgrFtvkA8"><img src={map} alt="" className="w-10 mr-4 hover:bg-gray-800 hover:rounded-full" /> </a>
            <a target='none' href="https://www.facebook.com/amit.hasan.583234"><img src={owner} alt="" className="w-10 mr-4 hover:bg-gray-400 hover:rounded-full" /></a>
          </div>
          

      </div>
      
      </div>

     <OurPolicy/>
      
    </div>
  )
}

export default Contact
