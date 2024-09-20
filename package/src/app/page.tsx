import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'

import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
export const metadata: Metadata = {
  title: "Snl",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter />  
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
    </main>
  )
}
