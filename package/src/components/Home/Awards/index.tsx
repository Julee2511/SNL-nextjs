import { awarddetails } from "@/app/api/data";

const awards = () => {
    return (
        <section>
            
            <div className="py-16">
                <p className="font-large md:text-40 text- font-bold text-midnight_text dark:text-white text-center mx-auto">Our Awards</p>
            </div>
            <div className="container px-4 mx-auto lg:max-w-screen-xl md:max-w-screen-md">
            {awarddetails.map((item, index) => (
                <div key={index} className="py-4 border-t flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <div className="">
                            <img src={item.itemImage} alt={item.itemNmae} />
                        </div>
                        <p className="text-21 text-black pb-0">{item.itemNmae}</p>
                    </div>
                    <div className="flex justify-center">
                    <p className="text-gray-400 text-16">{item.date}</p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <p>{item.awardname}</p>
                        <img src={item.awardicon} alt={item.awardname} />
                    </div>
                </div>
                
            ))}
                 <div className="border-b"></div>

            <div className="text-center py-14">
                    <span className="text-gray-500 font-roboto text-lg">Want more awards?</span>
                    <a href="#" className="text-black hover:text-primary font-roboto  text-lg ml-2">Explore Now</a>
                </div>
               </div>
        </section>
        
    );
}

export default awards;