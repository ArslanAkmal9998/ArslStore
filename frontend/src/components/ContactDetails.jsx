import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function ContactDetails() {
    const [contact,setContact]=useState({})
    const params=useParams();

    const fetchContact=async()=>{
const response=await axios.get(`http://localhost:9998/contact/${params.id}`)
const data=await response.data.contact;
setContact(data)
    }
    useEffect(()=>{
        fetchContact();
    },[])
  return (
    <>
    <h1>{contact.name}</h1>
    <p>{contact.email}</p>
    <p>{contact.phone}</p>
    <img src={contact.imageUrl}/>
    </>
  )
}

export default ContactDetails