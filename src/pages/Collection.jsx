import { useContext, useEffect, useState } from "react"
import {ShopContext} from '../context/ShopContext'
import { assets } from "../assets/assets";
import Title from '../components/Title'
import ProductItem from "../components/ProductItem";

const Collection = () => {

  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType] = useState([]);



  const toggleCategory = (e) =>{

    if (category.includes(e.target.value)) {

      setCategory(prev => prev.filter(item=>item !== e.target.value))
      
    }
    else{
      setCategory(prev=> [...prev,e.target.value])
    }

  }

  const togglesubCategory = (e) =>{

    if (subCategory.includes(e.target.value)) {

      setSubCategory(prev => prev.filter(item=>item !== e.target.value))
      
    }
    else{
      setSubCategory(prev=> [...prev,e.target.value])
    }

  }

  const applyFilter = () => {

    let productsCopy =products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {

      productsCopy = productsCopy.filter(item => category.includes(item.category));
      
    }

    if (subCategory.length > 0) {

      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
      
    }

    setFilterProduct(productsCopy);

  }



  const sortProduct = () => {

    let fpcopy = [...filterProduct];


    switch(sortType){
      case 'low-high':
        fpcopy.sort((a,b)=> a.price - b.price);
        break;
      case 'high-low':
        fpcopy.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;

    }

    setFilterProduct(fpcopy);

  };

  
  useEffect(() => {

    applyFilter();

  },[category,subCategory,search,showSearch])

  // [] dependency array

  // useEffect(()=>{

  //   console.log(category);

  // },[category])


  useEffect(()=>{

    sortProduct();

  },[sortType])





  return (

    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

      {/* Filter option */}

      <div className="min-w-60">
        
        <p onClick={()=> setShowFilter(!showFilter)} className="my-2 text-xl items-center cursor-pointer gap-2">Filters
        <img  src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} alt="" />
        </p>

        {/* Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>

          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <p className="flex gap-2">

              <input onChange={toggleCategory} className="w-3" type="checkbox" value={'New_Phone'}/>New Phone

            </p>

            <p className="flex gap-2">

              <input onChange={toggleCategory} className="w-3" type="checkbox" value={'AirPods'} /> AirPods

            </p>
            <p className="flex gap-2">

              <input onChange={toggleCategory} className="w-3" type="checkbox" value={'Used_Phone'} /> Used Phone

            </p>

            <p className="flex gap-2">

              <input onChange={toggleCategory} className="w-3" type="checkbox" value={'Others'}/> Others

            </p>

          </div>

        </div>

        {/* Subcategory Filter */}


        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>

          <p className="mb-3 text-sm font-medium">Brand</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Apple'} /> Apple

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Xiaomi'} /> Xiaomi

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Nokia'} /> Nokia

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Honor'} /> Honor

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Samsung'} /> Samsung

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Poco'} /> Poco

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Motorola'} /> Motorola

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'Sony'} /> Sony

            </p>
            <p className="flex gap-2">

              <input onChange={togglesubCategory} className="w-3" type="checkbox" value={'One Plus'} /> One Plus

            </p>

          </div>

        </div>


      </div>


    {/* Right side */}


    <div className="flex-1"> 

    <div className="flex justify-between text-base sm:text-2xl mb-4">

    <Title text1={'ALL'} text2={'COLLECTIONS'}/>

    {/* Product Sort */}

    

    </div>

    {/* Map Product */}

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

    {
      filterProduct.map((item,index)=>(
        <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
      ))
    }

    </div>

    </div>
      
    </div>
  )
}

export default Collection
