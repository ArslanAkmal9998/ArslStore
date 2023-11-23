import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"

const Admin = () => {

    const [queries,setQueries]=useState([])

    const fetchQueries=async()=>{
        const response=await axios.get("http://localhost:9998/contact")
        const data=await response.data.contacts;
        setQueries(data)
    }

    const handleDelete=async(id)=>{
      const response=await axios.delete(`http://localhost:9998/contact/${id}`)
      if(response.status ===200){
        fetchQueries();
      }

    }
    const handleUpdate=()=>{
      
    }

    useEffect(()=>{
        fetchQueries();
    },[])
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">MESSAGE</th>
      <th scope="col">IMAGE</th>
      <th scope="col">DELETE</th>
      <th scope="col">UPDATE</th>
    </tr>
  </thead>
  <tbody>
    {queries.map((item)=>{
        return(
<tr>
      <th scope="row">{item._id}</th>
      <Link to={`/contact/${item._id}`}><td>{item.name}</td></Link>
      <td>{item.email}</td>
      <td>{item.message}</td>
      <td><img src={item.imageUrl} width={"100px"} height={"100px"} alt={item.name}/></td>
      <td><button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button></td>
      <td><button className='btn btn-primary'>Update</button></td>

    </tr>
        )
    })}
    
     </tbody>
</table>
  )
}

export default Admin