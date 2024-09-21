import React from "react";
import Link from "next/link";
import {Videodetails } from "@/app/api/data";
import { Icon } from "@iconify/react"
import Image from "next/image";

const Reelvideo = () => {
    return (
        <section className="md:py-24 py-1 dark:bg-darkmode">
            <div className="container px-1 mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        
        <div className="grid grid-cols-3  border border-primary rounded-lg mx-6">
            <div className="flex flex-col ml-14 py-8 border-r border-primary">
                <span className="text-4xl font-bold text-gray-900">42%</span>
                <span className="text-gray-500">Years of experience</span>
            </div>
            <div className="flex flex-col  border-r py-8 border-primary bg-custom-light-blue">
                <span className="text-4xl ml-14 font-bold text-gray-900">73+</span>
                <span className="text-gray-500 ml-14">Agency members</span>
            </div>
            <div className="flex flex-col ml-14 py-8">
                <span className="text-4xl font-bold text-gray-900">5.000</span>
                <span className="text-gray-500">Projects complete </span>
            </div>
            </div>
    </div>
            </section>
            
    );
};

export default Reelvideo;

