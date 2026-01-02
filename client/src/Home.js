import React, { useEffect, useState } from 'react'
import'./Home.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Home() {

    const navi=useNavigate();
    const[data,setData]=useState([]);

   async function getData(){

      const response=await axios.get("https://krishisetu-q08g.onrender.com/products")
      setData(response);
      console.log(response,data);


    }

    useEffect(()=>{
      getData();
    },[])
  
 const productlist=[

    {
      id:1,
      productImage:"https://5.imimg.com/data5/SELLER/Default/2024/11/462885373/QB/YC/LS/85377450/0161504-ahuja-professional-pa-speaker-l18-sw2000-1000x1000.png",
      productTitle:"ahuja speaker 2000watt",
      productPrice: "Rs. 23,800"
    },
    {id:2,
      productImage:"https://www.publicaddresssolutions.com/cdn/shop/products/L18SW1300V_580x.jpg?v=1593683190",
      productTitle: "ahuja speaker 1300watt",
      productPrice:"Rs.15,000"
    },
    {id:3,
      productImage:"https://detec.in/cdn/shop/products/1_3932493b-e050-4927-aa57-30c142173ed4.png?v=1650093467",
      productTitle:"Ahuja speaker 15inch 650watt",
      productPrice:"Rs.9,800"
    },
    {id:4,
      productImage:"https://www.audio.atipro.in/wp-content/uploads/sites/2/2023/05/1855-BACK.png",
      productTitle:"atipro 18inch speaker 1999+300watt",
      productPrice:"Rs.19,300"
       
    },
    {id:5,
      productImage:"https://m.media-amazon.com/images/I/41qdFzH2teL.jpg",
      productTitle:"beta 58A mic",
      productPrice:"Rs.500"
      
    },
  ]
  function gotdetailspage(id){
    navi(`/Detail/${id}`);
  }
  return (
    
     <div className='productcontainer'>
      {
      data.map((product)=>(

          <div className='productcard' onClick={()=>gotdetailspage(product.id)} key={product.id}>
            <img src={product.productImage} className='image'/>
            <h2>{product.productTitle}</h2>
            <h3>{product.productPrice}</h3>


          </div>

       ))
       }
       </div>
    )
     }
export default Home
