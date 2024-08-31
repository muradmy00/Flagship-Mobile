import Title from "../components/Title"
import about from '../assets/about.png'
import OurPolicy from '../components/OurPolicy'

const About = () => {


  return (

    <div>

      <div className="text-2xl text-center pt-8 border-t">

        <Title text1={'ABOUT'} text2={'US'}/>

      </div>

      <div className="my-10 flex flex-col md:flex-row items-center gap-16">

        <img className="w-full md:max-w-[450px] md:max-h-[450px]" src={about} alt="" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        
          <p>Discover the latest smartphones and accessories at our mobile shop, where technology meets convenience. Expert advice and unbeatable deals await you!</p>

        <b className="text-gray-800">Our Mission</b>

        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>

        </div>

      </div>

      <div className="text-xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row  text-sm mb-20">

        <div className="border px-10  md:px-16 py-8 sm:py-20 flex  flex-col gap-5">

        <b>Quality Assurance:</b>
        <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>

        </div>

        <div className="border px-10  md:px-16 py-8 sm:py-20 flex  flex-col gap-5">

          <b>Convenience:</b>
          <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>

        </div>

        <div className="border px-10  md:px-16 py-8 sm:py-20 flex  flex-col gap-5">

          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>

        </div>


      </div>




     <OurPolicy/>


      
    </div>
  )
}

export default About
