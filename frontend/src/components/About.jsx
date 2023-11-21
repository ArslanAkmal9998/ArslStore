import React,{useState} from 'react'
import AboutChild from './AboutChild'

const About = () => {
  const [about,setAbout]=useState("About us ")
  return (
    <>
    <AboutChild about={about} />
    </>
  )
}

export default About