import React from "react";
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-16 sm:py-24 dark:bg-darkmode bg-midnight_text">
        <div className="text-center lg:px-0 px-4 sm:px-8">
            <div className="flex gap-2 items-center justify-center">
                <span className="font-medium text-white text-xs sm:text-16 dark:text-white dark:text-opacity-50 uppercase">portfolio</span>
            </div>        
         
            <h1 className="font-large font-extrabold text-white dark:text-white dark:text-opacity-50 mt-4 sm:mt-6 text-3xl sm:text-56">Latest Work</h1>  
            
            <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 text-white gap-4 sm:space-x-16">
                <div className="relative">
                    <span>Show All</span>
                    <span className="absolute -mt-2 -mr-11 text-xs">14</span>
                </div>
                <div className="relative">
                    <span>Design</span>
                    <span className="absolute -mt-2 -mr-11 text-xs">6</span>
                </div>
                <div className="relative">
                    <span>Branding</span>
                    <span className="absolute -mt-2 -mr-11 text-xs">4</span>
                </div>
                <div className="relative">
                    <span>Illustration</span>
                    <span className="absolute -mt-2 -mr-11 text-xs">3</span>
                </div>
                <div className="relative">
                    <span>Motion</span>
                    <span className="absolute -mt-2 -mr-11 text-xs">1</span>
                </div>
            </div>
        </div>
        
        <PortfolioCard />
    </section>
    
    );
};

export default Portfolio;