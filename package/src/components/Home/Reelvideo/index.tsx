import React from "react";
import Link from "next/link";

import { Icon } from "@iconify/react"
import Image from "next/image";

const Reelvideo = () => {
    return (
        <section className="md:py-16 py-1 dark:bg-darkmode">
          
          <div className="container px-4 mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="grid md:grid-cols-12 gap-7">
                <div className="md:col-span-7">
                        <Image
                            src="/images/Reelvideo/reel.png"
                            alt="Work Progress"
                            width={575}
                            height={0}
                            quality={100}
                            style={{ width: '80%', height: '90%' }}
                            className="md:block hidden"
                        />
                    </div>
                 
                    <div className="md:col-span-5 mt-10 mr-10">
                        <div className="flex gap-2 items-center">  
                            <p className="font-medium text-primary text-14 dark:text-white dark:text-opacity-50 pb-5">
                            VIDEO REEL
                            </p>
                        </div>
                        <h2 className="pt-1 text-3xl font-bold dark:text-white pb-5 mr-16">
                        Unlock The Greatest 
                        Value Possible
                        </h2>
                        <p className="text-grey dark:text-white dark:text-opacity-70 text-16 mr-4">
                        Design, business understanding, ability to put
                        themselves in the merchant's shoes meant to partner.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-7 mt-8">
                <div className="md:col-span-4">
                <div className="flex  items-center mt-16">  
                            <p className="font-medium text-primary text-14 dark:text-white dark:text-opacity-50 pb-5">
                            FEATURES
                            </p>
                        </div>
                
                        <p className="text-grey dark:text-white dark:text-opacity-70 text-16 mr-4 mb-6">
                        Long run, and work as an extension of the merchant's team.
                        </p>
                        
            <button className="hidden lg:block bg-transparent border-2 border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Read More
            </button>
                    </div>
                 
                    <div className="md:col-span-8">
                    <div className="flex">
            <div className="flex border border-blue-200 rounded-lg shadow-sm mr-20">
                <div className="p-6 border-r border-blue-200">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white mb-4">
                        <i className="fas fa-pencil-alt"></i>
                    </div>
                    <h3 className="text-gray-800 text-xl font-semibold">Professional</h3>
                    <p className="text-gray-600 mt-2 mr-4">Full service range including technical skills, design.</p>
                </div>
                <div className="p-3 flex flex-col justify-center mt-3">
                    <h3 className="text-gray-800 text-xl font-semibold">Accessibility</h3>
                    <p className="text-gray-600 mt-2">Business understanding, ability to put themselves.</p>
                </div>
            </div>
          </div>
        </div>
       </div>
        </div>  
            </section>
            
    );
};

export default Reelvideo;

