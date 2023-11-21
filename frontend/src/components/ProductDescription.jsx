import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'



const ProductDescription = () => {
    const [product,setProduct]=useState(null)
    const [count,setCount]=useState(1)
    const params=useParams()
const fetchData=async()=>{
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data=await response.json();
    setProduct(data)
}

useEffect(()=>{
    fetchData();
},[])
const add=()=>{
    if(count <5){
setCount(count+1)
    }
}

const sub=()=>{
    if(count >1){
        setCount(count-1)
            }
}
  return (
    <div className="row">
        <div className="col-lg-6">
            <img src={product?.image} alt="Product Image" width={"300px"} height={"300px"}/>
        </div>
        <div className="col-lg-6">
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <h3>${product?.price}</h3>
            <div className="d-flex">
                <button onClick={sub} className='btn btn-primary h-25'>-</button>
                <h1>{count}</h1>
                <button onClick={add} className='btn btn-primary h-25'>+</button>

            </div>
        </div>

    </div>
  )
}

export default ProductDescription