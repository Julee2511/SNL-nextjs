import React from "react";
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 dark:bg-darkmode bg-midnight_text">
            <div className="text-center lg:px-0 px-8">
                <div className="flex gap-2 items-center justify-center" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <span className="font-medium text-white text-14 dark:text-white dark:text-opacity-50">PORTFOLIO</span>
                </div>
              
              <h1 className="font-large font-bold text-32 text-white dark:text-white dark:text-opacity-50 mt-6">LATEST WORK</h1>
                
                <div className="flex justify-center items-center mt-8 text-white space-x-16">
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