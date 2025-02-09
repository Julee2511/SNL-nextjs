import React from "react";
import { Customers } from '@/app/api/data'
import Image from "next/image";

const Counter = () => {
    return (
        <section className="md:py-24  py-1 dark:bg-darkmode">
            <p className="text-center text-18  mb-8 sm:mb-8 text-secondary">We have 23k+ Satisfied & Trusted Customers</p>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-md">
                <div className="flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9 mx-8">
                    {Customers.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-[0.875rem]" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <Image src={item.icon} alt="icon" width={100} height={100} unoptimized />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container px-4 mx-auto lg:max-w-screen-xl md:max-w-screen-md mb-8 sm:max-w-screen-sm">
                <div className="grid md:grid-cols-12 items-center gap-7">
                 
                    <div className="md:col-span-6 sm:col-span-6">
                        <div className="flex gap-2 items-center">  
                            <p className="font-medium  text-primary md:text-16 dark:text-white dark:text-opacity-50 mb:pb-5 sm:pb-6 uppercase">
                            about
                            </p>
                        </div>
                        <h2 className="md:pt-1  sm:pt-4 font-bold dark:text-white sm:text-36  md:text-36 pb-5 md:mr-48 sm:mr-0">
                        An Experience 
                        Design Agency
                        </h2>
                         <p className="mb-4">Provides a full service range</p>

                        <p className="text-grey dark:text-white dark:text-opacity-70 sm:text-8 md:text-16 pb-1 sm:mr-0 md:mr-28">
                        We're west coast change-makers in a complex world, 
                         crafting purposeful and powerful brands with fluidity 
                        and freedom.
                        </p>
                     
    
                        <div className="block mx-auto pt-9">
                        <button className="hidden lg:flex items-center bg-transparent border-2 dark:text-white dark:border-white border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white">
                           <span>Read More</span>
                              <Image
                               src="/images/hero/arrow.svg"
                               alt="hero-image"
                               width={24}
                               height={24}
                               quality={100}
                               className="ml-2"
                                />
                          </button>

                        </div>
                    </div>
    
                    <div className="md:col-span-6 mt-20">
                        <Image
                            src="/images/work-progress/progress-work.png"
                            alt="Work Progress"
                            width={575}
                            height={0}
                            quality={100}
                            style={{ width: '100%', height: '50%' }}
                            className="md:block hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
