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
                            alt="reel"
                            width={575}
                            height={0}
                            quality={100}
                            style={{ width: '80%', height: '90%' }}
                            className="md:block hidden"
                        />
                    </div>
                 
                    <div className="md:col-span-5 mt-10 mr-10">
                        <div className="flex gap-2 items-center">  
                            <p className="font-medium text-primary text-16 dark:text-white dark:text-opacity-50 pb-5 uppercase">
                           video reel
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

                <div className="grid md:grid-cols-12  mt-8">
  <div className="md:col-span-4">
    <div className="flex items-center mt-24">  
      <p className="font-medium text-primary text-16 dark:text-white dark:text-opacity-50 pb-5 uppercase">
       features
      </p>
    </div>
    
    <p className="text-gray-600 dark:text-white dark:text-opacity-70  text-20 mb-6">
      Long run, and work as an extension of the merchant's team.
    </p>
    
    <button className="hidden lg:block bg-transparent border-2 border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white">
      Read More
    </button>
  </div>
  
  <div className="md:col-span-8 mt-4">
    <div className="flex justify-center items-center">
      <div className="flex">
        <div className="border border-blue-500 rounded-tl-lg rounded-bl-lg  rounded-tr-lg  flex flex-col items-start bg-custom-light-blue  h-72 w-72 p-6">
          <div className="flex items-center justify-center w-12 h-12 mb-8 mt-9">
          <Image
                            src="/images/Reelvideo/cardicon.svg"
                            alt="cardicon"
                            width={575}
                            height={0}
                            quality={100}
                            style={{ width: '100%', height: '100%' }}
                            className="md:block hidden"
                        />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Professional</h2>
          <p className="text-gray-600 ">Full service range including technical skills, design.</p>
        </div>
        
        <div className="border border-blue-500 border-l-0 rounded-tr-lg rounded-br-lg p-6 flex flex-col items-start bg-white h-auto mt-12 w-72">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 mt-16">Accessibility</h2>
          <p className="text-gray-600">Business understanding, ability to put themselves.</p>
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

