import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {


  return (

    <div>

    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

    <div>

     <Link to='/'> <img src={assets.logo} className="mb-5 w-32" alt="" /> </Link> 
     <p className="w-full md:w-2/3 text-gray-600">
      These shops often play a key role in helping customers choose the right phone, set it up, and keep it running smoothly.
     </p>

    </div>  

    <div>
          <p className="text-xl font-medium mb-5">Flagship Mobile </p>
        <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <Link to='/'><li>HOME</li></Link>
            <Link to='about'><li>ABOUT US</li></Link>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
        </ul>
    </div>

    <div>

        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">

        <li>+8801300-606098</li>
        <li>flagshipmobileshop98@gmail.com</li>
        <li>Want to contact me? Click Here</li>
            <a target="none" href="https://www.facebook.com/amit.hasan.583234"><li className="text-orange-500">Click Here</li></a>

        </ul>


    </div>


      
    </div>

    <div>

     <hr />

        <p className="py-5 text-sm text-center">© Copyright <a target="none" className="text-orange-500" href="https://muradmy00.github.io/My-Portfolio/">@murad00.</a> All Rights Reserved 2024</p>

    </div>

    </div>
  )
}

export default Footer
