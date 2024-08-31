import React from 'react'
import.meta.env

const Orders = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_TEST_VAR}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your Order Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (

      <div>

      <div className="inline-flex items-center gap-2 mb-2 mt-10">

        <p className="prata-regular text-3xl">Your Information</p>

        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />

      </div>

      <div className="inline-flex items-center gap-2 mb-2 mt-10">

        <p className="prata-regular text-xl text-orange-500"><span className='prata-regular text-2xl text-orange-500'>Note:</span> Fill the form only if you want to buy the phone. then send the message, Otherwise do not fill the form.</p>

      </div>
  
      <form onSubmit={onSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">

        <label className='w-full text-xl'>Your Name:</label>
        <input type="text" name='name' className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required />
        <label className='w-full text-xl'>Phone Name:</label>
        <input type="text" name='phone_Name' className="w-full px-3 py-2 border border-gray-800" placeholder="Full Phone Name" required />
       
        <label className='w-full text-xl'>Phone Number:</label>
        <input type="text" name='phone' className="w-full px-3 py-2 border border-gray-800" placeholder="Phone Number" required />
       
        <label className='w-full text-xl'>Your Location:</label>
        <input type="text" name='location' className="w-full px-3 py-2 border border-gray-800" placeholder="Your Full Location" required />

        <label className='w-full text-xl'>Phone Color:</label>
        <select name='color' className='w-full px-3 py-2 border border-gray-800' required>
          <option value="Empty"></option>
          <option value='Red'>Red</option>
          <option value='Black'>Black</option>
          <option value='Blue'>Green</option>
          <option value='Blue'>Purple</option>
          <option value='Blue'>White</option>
          <option value='Blue'>Blue</option>
          <option value='Orange'>Orange</option>
          <option value='Gray'>Gray</option>
          <option value='Yellow'>Yellow</option>
          <option value='Gold'>Gold</option>
          <option value='Iceblue'>Iceblue</option>
          <option value='Lightblue'>Lightblue</option>
          <option value='Lilac'>Lilac</option>
          <option value='Navy'>Navy</option>
          <option value='Lemon'>Lemon</option>
          <option value='Pearl'>Pearl</option>
          <option value='Magenta'>Magenta</option>
        </select>
        <label className='w-full text-xl'>Phone Variant:</label>
        <select name='variant' className='w-full px-3 py-2 border border-gray-800' required>
          <option value="Empty"></option>
          <option value='128MB/48MB'>128MB/48MB</option>
          <option value='256MB/512MB'>256MB/512MB</option>
          <option value='2GB/64GB'>2GB/64GB</option>
          <option value='2GB/128GB'>2GB/128GB</option>
          <option value='2GB/256GB'>2GB/256GB</option>
          <option value='2GB/512GB'>2GB/512GB</option>
          <option value='4GB/64GB'>4GB/64GB</option>
          <option value='4GB/128GB'>4GB/128GB</option>
          <option value='4GB/256GB'>4GB/256GB</option>
          <option value='4GB/512GB'>4GB/512GB</option>
          <option value='6GB/64GB'>6GB/64GB</option>
          <option value='6GB/128GB'>6GB/128GB</option>
          <option value='6GB/256GB'>6GB/256GB</option>
          <option value='6GB/512GB'>6GB/512GB</option>
          <option value='8GB/64GB'>8GB/64GB</option>
          <option value='8GB/128GB'>8GB/128GB</option>
          <option value='8GB/256GB'>8GB/256GB</option>
          <option value='8GB/512GB'>8GB/512GB</option>
          <option value='12GB/64GB'>12GB/64GB</option>
          <option value='12GB/128GB'>12GB/128GB</option>
          <option value='12GB/256GB'>12GB/256GB</option>
          <option value='12GB/512GB'>12GB/512GB</option>
          
        </select>
        <label className='w-full text-xl'>Phone:</label>
        <select name='For_Phone' className='w-full px-3 py-2 border border-gray-800' required>
          <option value="Empty"></option>
          <option value='Brand New'>Brand New</option>
          <option value='Used'>Used</option>
          <option value='Official'>Official</option>
          <option value='Unofficial'>Unofficial</option>
        </select>

        <label className='w-full text-xl'>Quantity:</label>
        <input  type="number" name='quantity' className="w-full px-3 py-2 border border-gray-800" placeholder="" required />


        <button className="border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'">Send Message</button>


        </form>

        <span>{result}</span>

    </div>

  )
}

export default Orders
