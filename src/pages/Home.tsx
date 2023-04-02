import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import OurClasses from "../components/OurClasses";
import Email from "../components/Contact";
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Benefits />
        <OurClasses />
        <Email />
    </div>
  )
}

export default Home;