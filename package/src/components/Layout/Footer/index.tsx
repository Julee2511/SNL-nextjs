import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { footer } from "@/app/api/data";

const Footer: FC = () => {
  return (
    <footer
    className="bg-darkmode relative z-[1] text-white bg-center bg-cover w-full pt-24"
    style={{ backgroundImage: 'url(/images/footer/footer-bg.jpg)' }}>

    <div className="container px-4 mx-auto lg:max-w-screen-xl md:max-w-screen-md  sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 sm:max-w-screen-sm">
    <div className="md:col-span-6">
      <p className="text-14 uppercase mb-5">skills for a better future</p>
      <h1 className="text-36 sm:text-28 mb-4">Request Information</h1>
      <p className="mb-8">
        Unlock your productivity potential at Coworking Space! Join a vibrant<br />
        community of professionals.
      </p>
      <div className="mb-24">
      <a
        href="#learn-more"
        className="py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 px-8 sm:px-5"
      >
         Schedule a Call
      </a>
      </div>
    </div>

    <div className="md:col-span-3">
      <p className="text-14 uppercase mb-5">Quick Links</p>
      <p className="mb-2 text-18 sm:text-16">About</p>
      <p className="mb-2 text-18 sm:text-16">Services</p>
      <p className="mb-2 text-18 sm:text-16">Brands & Partners</p>
      <p className="mb-2 text-18 sm:text-16">News</p>
      <p className="text-18 sm:text-16">Blog</p>
    </div>

    <div className="md:col-span-3">
      <p className="text-14 uppercase mb-5">Additional Links</p>
      <p className="mb-2 text-18 sm:text-16">Hospitality</p>
      <p className="mb-2 text-18 sm:text-16">Food & Beverage Lighting</p>
      <p className="mb-2 text-18 sm:text-16">Commercial</p>
      <p className="mb-2 text-18 sm:text-16">Bluetooth / Casambi</p>
      <p className="text-18 sm:text-16">Residential</p>
    </div>
  </div>

  
  <div className="container mx-auto lg:max-w-screen-xl py-1">
    <div className="border-t border-gray-300 p-4"></div>
  </div>

  <div className="container mx-auto lg:max-w-screen-xl py-8 sm:py-6">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
      <p className="text-white text-center sm:text-left">© Copyright 2024. Designed by GradaStudio.</p>
      <div className="flex justify-center space-x-4 sm:mt-0 mt-4">
        {footer.map((item, index) => (
          <div key={index} className="flex items-center justify-center w-8 h-8">
            <img src={item.icon} alt={item.icon} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;