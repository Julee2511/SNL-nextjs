import React from "react";
import Link from "next/link";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react"
import Image from "next/image";

const Services = () => {
    return (
        <section className="bg-white dark:bg-darklight">
            <div className="container px-4 mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        
        <div className="grid grid-cols-3  border border-primary rounded-lg mx-0">
            <div className="flex flex-col ml-12 py-8 border-r border-primary">
                <span className="text-4xl font-bold text-gray-900 mb-2">42%</span>
                <span className="text-gray-500">Years of experience</span>
            </div>
            <div className="flex flex-col  border-r py-8 border-primary bg-custom-light-blue">
                <span className="text-4xl ml-12 font-bold text-gray-900 mb-2">73+</span>
                <span className="text-gray-500 ml-14">Agency members</span>
            </div>
            <div className="flex flex-col ml-12 py-8">
                <span className="text-4xl font-bold text-gray-900 mb-2">5.000</span>
                <span className="text-gray-500">Projects complete </span>
            </div>
    </div>
    <div className="container lg:max-w-screen-xl md:max-w-screen-md grid grid-cols-12 gap-4 py-20 ">

                <div className="md:col-span-6 col-span-12 mb-8 md:pr-28">
                   
            <h4 className="text-primary text-16 font-semibold mb-4 uppercase">how we work</h4>
            <h1 className="text-3xl font-bold text-gray-900 mb-8 mr-36">
           Making Your Projects 
            Look Awesome 
                 </h1>
            <p className="text-gray-500 mb-9 mr-6">
            We're west coast change-makers in a complex world,
            crafting purposeful and powerful brands with fluidity and
             freedom.
            </p>
           
            <button className="hidden lg:block bg-transparent border-2 border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Read More
            </button>
        </div>
        <div className="md:col-span-6 col-span-12 mt-7">
            <div className="flex items-start">
                <span className="text-blue-500 text-4xl font-bold mr-6 mb-8">1</span>
                <p className="text-gray-800 text-lg mb-20 mt-1">Full service range including</p>
            </div>
            <div className="flex items-start">
                <span className="text-blue-500 text-4xl font-bold mr-6 mb-8">2</span>
                <p className="text-gray-800 text-lg mb-20 mt-1">Technical skills, design, business</p>
            </div>
            <div className="flex items-start mb-7">
                <span className="text-blue-500 text-4xl font-bold mr-6">3</span>
                <p className="text-gray-800 text-lg mt-1">Themselves in the merchant's</p>
            </div>
        </div>
        </div>
        <div className="py-4 border-t flex justify-between items-center"></div>
                </div>
           
        </section>
    );
};

export default Services;
