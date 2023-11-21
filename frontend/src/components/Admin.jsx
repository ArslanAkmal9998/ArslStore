import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Admin = () => {

    const [queries,setQueries]=useState([])

    const fetchQueries=async()=>{
        const response=await axios.get("http://localhost:9998/getQueries")
        const data=await response.data;
        setQueries(data)
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
    </tr>
  </thead>
  <tbody>
    {queries.map((item)=>{
        return(
<tr>
      <th scope="row">{item._id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.message}</td>
      <td><img src={item.imageUrl} width={"100px"} height={"100px"} alt={item.name}/></td>
    </tr>
        )
    })}
    
     </tbody>
</table>
  )
}

export default Admin