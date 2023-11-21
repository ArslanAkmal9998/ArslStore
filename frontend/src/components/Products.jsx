import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Spin from './Spin'



const Products = () => {
const [products,setProducts]=useState([])
const [loader,setLoader]=useState(true)

const dataFetch=async()=>{
const response =await fetch("https://fakestoreapi.com/products")
const data=await response.json();
setLoader(false)
setProducts(data);
}

useEffect(()=>{
    dataFetch();
},[])

  return (
    <>
    {loader ? <Spin/> :null}
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
    {
        products.map((item)=>{
            return(
                <div class="card" style={{width: "18rem"}}>
    <img src={item.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.title}</h5>
      <p class="card-text">{item.category}</p>
      <Link to={`/products/${item.id}`} class="btn btn-warning">{item.price}</Link>
    </div>
  </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Products