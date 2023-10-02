import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react'
import line10 from './assets/line10.png'
import arrow1 from './assets/Arrow1.png'
import arrow2 from './assets/arrow2.png'
import hm from './assets/hm.png'

const Product = (props,ref) => {

const [isLargeFont, setIsLargeFont] = useState(false);
const [mainproducts,setmain]=useState([]);


const [category,setcategory]=useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setcategory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  fetchData();
},[])

const [products,setproducts]=useState([]);

async function handleclick(e){
  setIsLargeFont((prevIsLargeFont) => !prevIsLargeFont);
  console.log(e)
  try{
  const response=await fetch(`https://fakestoreapi.com/products/category/${e}`);
  if(!response){
    throw new Error("Network response was not ok");
  }
  const data=await response.json();
  setproducts(data);
  
  console.log(data)
  }catch(error){
    console.error(error);
  }
}


useEffect(()=>{
  const fetchproducts=async()=>{
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setproducts(data);
      setmain(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchproducts();
},[])


  const handlenew=()=>{
   
    if(products.length+1===1 || products.length+1===0){
  
      setproducts(mainproducts);
    }
    else{
    const newArr = [...products].slice(3, 7);
    setproducts(newArr);
    }
  }
  
  const handleprev=()=>{

    if(products.length+1===1 || products.length+1===0){
     
      
      setproducts(mainproducts);
    }
    else{
    const newArr = [...products].slice(3, 7);
    setproducts(newArr);
    }
  }



  return (
    <div ref={ref} id='product'>
      <div id='np'>
      <h2 id='np2'>New products</h2>
      </div>
      <div id='line10'>
        <img src={line10} alt="" />
      </div>
      <div id='category'>
        {
          category.map((category,index)=>(
          <div onClick={()=>handleclick(category) }>
            <h2 className='normalfont' key={index}>
            {category}
            </h2></div>
          ))
        }
      </div>

     
      <div id='outer'>
    
        {
          products.map((product,index)=>(
        <div id='container' key={index}>
          <div id='imgdiv'>
            <img id='imgmain' src={product.image} alt="index" />
            <img id='hm' src={hm} alt="hm" />
          </div>
            <div id='datadiv'>
              <h1>{product.title.slice(12,20)}</h1>
              <p id='p1'>{product.description.slice(0,70)}</p>
              <p id='p2'>${product.price}</p>
            </div>
         
            </div>
          ))
        }
      
    </div>
    <div id='arrow1' onClick={handleprev}>
              <img src={arrow1} alt="ar1" />
            </div>
            <div id='arrow2' onClick={handlenew}>
              <img src={arrow2} alt="ar2" />
            </div>
    

    </div>
  
  )
}

export default forwardRef(Product)
