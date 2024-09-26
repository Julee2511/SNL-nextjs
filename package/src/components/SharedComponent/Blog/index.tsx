import React from 'react';
import Link from 'next/link';
import { Icon } from "@iconify/react"
import BlogCard from './blogCard';
import { getAllPosts } from "@/utils/markdown";
import { blog } from "@/app/api/data";

const Blog: React.FC = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]).slice(0, 3);

    return (
        <section className="flex flex-wrap justify-center py-24 dark:bg-darkmode" id="blog">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
            <p className="font-medium text-primary text-16 dark:text-white dark:text-opacity-50 pb-5 uppercase">
            Our blog
                            </p>
                <div className="flex items-baseline justify-between flex-wrap">
                    <h2 className="sm:mb-11 mb-3 text-36 font-bold text-midnight_text dark:text-white" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Latest Blog <br/> Articles</h2>
                     <button type="submit" className="hidden lg:block bg-transparent border-2 border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white ">Discover All</button>
                </div>
                <div className="grid grid-cols-3 gap-7">
                {blog.map((item, index) => (
                <div key={index} className="py-4 flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <div className=" w-full h-full mb-2">
                            <img src={item.itemImage} alt={item.itemNmae} />
                            <p className="text-20 mt-4 mb-2">{item.itemNmae}</p>
                            <p className="text-24 font-bold mt-4 mb-2 mr-6">{item.itemdetail}</p>
                            <p className="text-16 text-gray-400 mt-4">{item.date}</p>
                        </div>
                    </div>
                </div>
                
                
            ))}
                </div>
                <div className="border-t flex justify-between items-center my-16"></div>
                <div className="grid grid-cols-3 gap-4 items-center mt-1">
              <div className="col-span-1">
                 <h2 className="text-40 font-extrabold text-gray-800">Newsletter</h2>
               </div>
               <div className="col-span-2 flex justify-end">
               <form className="flex space-x-2">
           <input type="email" placeholder="Your email" className="mr-3 px-4 py-2 rounded-full border border-gray-300 focus:outline-none" required />
          <button type="submit" className="hidden lg:block bg-transparent border-2 border-black text-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Subscribe</button>
    </form>
  </div>
</div>

                </div>
        </section>
      
    );
}

export default Blog;
