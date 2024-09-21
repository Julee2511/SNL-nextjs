import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Blog from '@/components/SharedComponent/Blog'
import Awards from '@/components/Home/Awards';
import Reelvideo from '@/components/Home/Reelvideo';




export const metadata: Metadata = {
  title: "Snl",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter />  
      <Services />
      <Reelvideo/>
      <Portfolio />
      <Awards />
      <Blog />
     
      
    </main>
  )
}
