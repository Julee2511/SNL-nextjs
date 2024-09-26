"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { portfoliocard } from "@/app/api/data";

const PortfolioCard = () => {
    return (
        <section id="portfolio" className="py-24 dark:bg-darkmode">
       <div className="container px-5 mx-auto lg:max-w-screen-xl md:max-w-screen-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfoliocard.map((item, index) => (
                    <div key={index} className={`relative ${item.width}`}>
                        <img src={item.itemImage} alt={item.itemNmae} width={item.width}  height={item.height} className="rounded-lg"/>
                        <p className="absolute bottom-12 left-6 text-white text-2xl font-bold">{item.itemNmae}</p>
                        <p className="absolute bottom-24 left-6 bg-white text-black px-3 py-1 rounded-full text-sm">{item.buttonname}</p>
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
