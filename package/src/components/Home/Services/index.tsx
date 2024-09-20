import React from "react";
import Link from "next/link";
import { Servicebox } from "@/app/api/data";
import { Icon } from "@iconify/react"
import Image from "next/image";

const Services = () => {
    return (
        <section className="bg-section dark:bg-darklight py-32 p-9">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        
        <div className="grid grid-cols-3 gap-4 border border-primary rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center p-8 border-r border-primary">
                <span className="text-4xl font-bold text-gray-900">42%</span>
                <span className="text-gray-500">Years of experience</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8 border-r border-primary bg-gradient-to-r">
                <span className="text-4xl font-bold text-gray-900">73+</span>
                <span className="text-gray-500">Agency members</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
                <span className="text-4xl font-bold text-gray-900">5.000</span>
                <span className="text-gray-500">Projects complete </span>
            </div>
    </div>
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between ">

                <div className="md:col-span-6 mb-8 md:mb-0 md:pr-8">
            <h4 className="text-blue-500 text-sm font-semibold mb-6">HOW WE WORK</h4>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="block">Making Your Projects </span>
            <span className="block">  Look Awesome </span>
                 </h1>
            <p className="text-gray-500 mb-6">
            <span className="block">We're west coast change-makers in a complex world, </span>
            <span className="block">crafting purposeful and powerful brands with fluidity  </span> 
            <span className="block"> and freedom. </span>

            </p>
            <button   className="hidden lg:block bg-transparent border border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Read More
            </button>
        </div>
        <div className="md:col-span-6  space-y-6">
            <div className="flex items-start mb-5">
                <span className="text-blue-500 text-3xl font-bold mr-4">1</span>
                <p className="text-gray-800 text-lg">Full service range including</p>
            </div>
            <div className="flex items-start mb-5">
                <span className="text-blue-500 text-3xl font-bold mr-4">2</span>
                <p className="text-gray-800 text-lg">Technical skills, design, business</p>
            </div>
            <div className="flex items-start mb-5">
                <span className="text-blue-500 text-3xl font-bold mr-4">3</span>
                <p className="text-gray-800 text-lg">Themselves in the merchant's</p>
            </div>
        </div>
        </div>
                </div>
           
        </section>
    );
};

export default Services;
