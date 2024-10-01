"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { portfoliocard } from "@/app/api/data";
import { portfolio1 } from "@/app/api/data";


const PortfolioCard = () => {
    return (
        <section id="portfolio" className="py-24 dark:bg-darkmode">
       <div className="container px-5 mx-auto lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm">
            <div className="md:flex grid-cols-1 sm:grid-cols-1 gap-8">
                {portfoliocard.map((item, index) => (
                    <div key={index} className={`relative ${item.width}`}>
                        <img src={item.itemImage} 
                         alt={item.itemNmae} 
                         width={item.width} 
                         height={item.height}
                         className="rounded-lg"/>
                        <p className="absolute bottom-24 md:left-12 sm:left-0 bg-white text-black px-4 py-1 mr-7 rounded-full text-16 mb-5">{item.buttonname}</p>
                        <p className="absolute bottom-9 left-12 text-white md:text-40 sm:text-20 font-bold">{item.itemNmae}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 md:flex grid-cols-1 sm:grid-cols-1 gap-8">
                {portfolio1.map((item, index) => (
                    <div key={index} className={`relative ${item.width}`}>
                        <img src={item.itemImage} 
                         alt={item.itemNmae} 
                         width={item.width} 
                         height={item.height} 
                         className="rounded-lg"/>
                        <p className="absolute md:bottom-24 sm:bottom-8 left-12 bg-white text-black px-4 py-1 rounded-full text-16 mb-5">{item.buttonname}</p>
                        <p className="absolute bottom-9 left-12 text-white md:text-40 sm:text-20 font-bold">{item.itemNmae}</p>
                    </div>
                ))}
            </div>
            <div className="py-16 justify-center flex">
            <button className="hidden lg:block bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-black hover:border-black hover:text-white">Explore More
            </button>
            </div>
        </div>
        <div className="md:col-span-6 flex justify-center">
                        <Image
                            src="/images/portfolio/bp-8.png"
                            alt="bp-7"
                            width={975}
                            height={200}
                            quality={100}
                            style={{ width: '80%', height: '30%' }}
                            className="md:block hidden"
                        />
                    </div>
    </section>
        
    );
};

export default PortfolioCard;
