"use client"
import Image from "next/image";
import Link from "next/link";


const Hero = () => {

   
    return (
        <section className="relative pb-20 pt-44 p-14 bg-custom-light-blue  dark:bg-darklight bg-cover text-white">
            <div className="absolute inset-0 bg-transparent"></div>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md grid grid-cols-12 gap-4 relative z-10">
                <div className="md:col-span-5 col-span-12 p-4 space-y-6 flex flex-col items-start justify-center">
                    <h1 className="text-black font-bold dark:text-white text-36 md:text-48 mr-40">
                           We help you 
                           to build your
                           Business
                    </h1>
                    <p className="text-grey dark:text-white dark:text-opacity-70 text-12 mb-12">
                    Discover, define, and dominate your market. elevate your                
                    identity with creative excellence, guiding your brand.
                    </p> 
                  <a href="#learn-more" className="py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 px-8">Schedule a Call</a>  
                </div>

                <div className="md:col-span-7 col-span-12">
                    <Image
                        src="/images/hero/hero-image.png"
                        alt="hero-image"
                        width={9050}
                        height={550}
                        quality={100}
                        className="-mt-32"
                        style={{ width: '850%', height: '142%' }}
                    />
                   
                </div>
            </div>
        </section>
    );
};

export default Hero;
