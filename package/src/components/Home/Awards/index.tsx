import { awarddetails } from "@/app/api/data";
const awards = () => {
    return (
      <section>
        <div className="py-16">
          <p className="font-large md:text-40 text-font-bold text-midnight_text dark:text-white text-center mx-auto">
            Our Awards
          </p>
        </div>
  
        <div className="container px-4 mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <table className="min-w-full">
            <tbody>
              {awarddetails.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-4">
                    <div className="flex gap-6 items-center">
                      <img src={item.itemImage} alt={item.itemNmae} />
                      <p className="text-21 text-black">{item.itemNmae}</p>
                    </div>
                  </td>
  
                  <td className="py-4 text-center">
                    <p className="text-gray-400 text-16">{item.date}</p>
                  </td>
  
                  <td className="py-4">
                    <div className="flex gap-6 items-center justify-end mr-16">
                      <p>{item.awardname}</p>
                      <img src={item.awardicon} alt={item.awardname} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className="text-center py-14">
            <span className="text-gray-500 font-roboto text-lg">Want more awards?</span>
            <a href="#" className="text-black hover:text-primary font-roboto text-lg ml-2">
              Explore Now
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default awards;
  