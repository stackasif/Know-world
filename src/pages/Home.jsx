import React from 'react'
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Hero from '../components/ui/Hero';
import About from './About';


function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home;