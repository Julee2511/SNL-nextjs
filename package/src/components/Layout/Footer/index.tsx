import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { footer } from "@/app/api/data";

const Footer: FC = () => {
  return (
    
    <footer className="bg-darkmode relative z-[1]  text-white" style={{ backgroundImage:'url(/images/footer/estate-bg.jpg)' }}>
      
     <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-28 grid grid-cols-1 md:grid-cols-12 gap-6">
 
  <div className="md:col-span-6">
    <p className="text-14 mb-4">SKILLS FOR A BETTER FUTURE</p>
    <h1 className="text-36 mb-4">Request Information</h1>
    <p className="mb-8">
      Unlock your productivity potential at Coworking Space! Join a vibrant<br />
      community of professionals.
    </p>
    <a
      href="#learn-more"
      className="py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 px-8"
    >
      Schedule a Call
    </a>
  </div>

  <div className="md:col-span-3">
    <p className="font-semibold mb-4">Quick Links</p>
      <p>About</p>
      <p>Services</p>
      <p>Brands & Partners</p>
      <p>News</p>
      <p>Blog</p>
  </div>

  <div className="md:col-span-3">
    <p className="font-semibold mb-4">Additional Links</p> 
    <p>Hospitality</p>
      <p>Food & Beverage Lighting</p>
      <p>Commercial</p>
      <p>Bluetooth / Casambi</p>
      <p>Residential</p>
  </div>
</div>
<div className="container mx-auto lg:max-w-screen-xl  py-1 grid-cols-12 md:grid-cols-12 ">
<div className="border-t  border-gray-300 p-4">
  </div>
  </div>
  <div className="container mx-auto lg:max-w-screen-xl py-10">
  <div className="flex justify-between items-center mb-2">
    <p className="text-white">© Copyright 2024. Designed by GradaStudio.</p>
    <div className="flex space-x-4">
      {footer.map((item, index) => (
        <div key={index} className="flex items-center justify-center">
          <img src={item.icon} alt={item.icon} className="w-full h-full" />
        </div>
      ))}
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;