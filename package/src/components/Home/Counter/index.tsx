import React from "react";
import { Customers } from '@/app/api/data'
import Image from "next/image";

const Counter = () => {
    return (
        <section className="md:py-32 py-1 dark:bg-darkmode">
            <p className="text-center mb-8 text-secondary">We have 23k+ Satisfied & Trusted Customers</p>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9">
                    {Customers.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-[0.875rem]" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <Image src={item.icon} alt="icon" width={100} height={100} unoptimized />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md mb-8">
                <div className="grid md:grid-cols-12 items-center gap-7">
                    {/* Text section */}
                    <div className="md:col-span-6" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <div className="flex gap-2 items-center">  
                            <p className="font-medium text-primary text-14 dark:text-white dark:text-opacity-50">
                            ABOUT
                            </p>
                        </div>
                        <h2 className="pt-1 pb-4 font-bold dark:text-white text-36">
                       <span className="block">An Experience </span> 
                        <span className="block">Design Agency</span>
                        </h2>
                         <p className="mb-4">Provides a full service range</p>

                        <p className="text-grey dark:text-white dark:text-opacity-70 text-16 font-semibold">
                       <span className="block">  We're west coast change-makers in a complex world, </span> 
                        <span className="block">  crafting purposeful and powerful brands with fluidity </span>
                        and freedom.
                        </p>
                     
    
                        <div className="block mx-auto pt-32">
                        <a href="#learn-more" className="py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 px-8">Schedule a Call</a>
                        </div>
                    </div>
    
                    {/* Image section */}
                    <div className="md:col-span-6 mt-20">
                        <Image
                            src="/images/work-progress/progress-work.png"
                            alt="Work Progress"
                            width={575}
                            height={0}
                            quality={100}
                            style={{ width: '100%', height: '60%' }}
                            className="md:block hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
