import { useEffect, useState } from "react"
import ProductCard from "./component/ProductCard";
import './App.css'

function App(){
    const[products,updateProducts]= useState([]);

    useEffect( () =>{
        getProducts()
    },
    []

    )
    async function getProducts(){
        const res = await fetch('https://fakestoreapi.com/products')
        
        const productList= await res.json();
        updateProducts(productList)
       
    }
    if(products.length === 0){
        return(<h1>Fetching data...</h1>)
    }
    return(
        // products.map((p)=><productCard {...p} ></productCard>)
        <div className="product-list">
        {
            products.map((p)=><ProductCard {...p} key={p.id}></ProductCard>)
        }
            

        </div>
    )
}
export default App














// import React from 'react';







// import Product from './Product';
// import Hello from './component/Hello'

// const App=()=>{
//     // const Data = {
//     //     id:1,
//     //     name:"Lenovo",
//     //     model:"Notepad 5",
//     //     price:17000,
//     //     offerprice:15000
//     // }
    
//     return(
//     //   <Product id={Data.id} name={Data.name} model={Data.model} price={Data.price} offerprice={Data.offerprice}/>
//     //  <Product {...Data}/>
//     <Hello/>
 
//   )
// }
// export default App
// // function play(a,b){
// //     return a+b
// // }
// // console.log(play(3,4))
// // console.log(play(10,20))
// // console.log(play(13,14))