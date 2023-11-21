import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios"

const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })
  const navigate=useNavigate();
const onChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}
const onSubmit=async(e)=>{
e.preventDefault();
const data = await axios.post("http://localhost:9998/contact",formData)
console.log(data)
setFormData({
  name:"",
  email:"",
  message:""
})

toast.success('🦄 Wow so easy!', {
  position: "bottom-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

setTimeout(()=>{
  navigate("/")
},3000)






}
const {name,email,message}=formData;
  return (
    <form className='d-flex justify-content-center align-items-center flex-column' onSubmit={onSubmit} >
       <div class="mb-3 w-50">
  <label for="exampleFormControlInput1" class="form-label">Name:</label>
  <input type="text" name="name" value={name} onChange={onChange} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
      <div class="mb-3 w-50">
  <label for="exampleFormControlInput1" class="form-label">Email:</label>
  <input type="email" name="email" value={email} onChange={onChange} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div class="mb-3 w-50">
  <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
  <textarea class="form-control" name="message" value={message} onChange={onChange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Contact