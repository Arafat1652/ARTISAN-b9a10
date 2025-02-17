import { useState } from "react";
import { AiTwotoneTag } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { MdAccessTime } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const ArtCraftDetails = () => {
    const LoadedSubItems = useLoaderData() 
    const [subItem, setSubItem] = useState(LoadedSubItems)
    // const  {_id,itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, photoUrl, userName, userEmail} = subItems
    console.log(subItem);
    return (
        <div className="px-2 md:px-2 lg:px-0">
          <Helmet>
                <title>sub categroy || ARTISAN</title>
            </Helmet>
            <Nav></Nav>
            <div className="grid max-w-7xl my-24 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {
                subItem.map(item=>  <div key={item._id} className="card card-compact  group relative cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <figure>
                  <img
                  className="lg:h-[350px] md:h-[350px] w-full object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                    src={item.photoUrl}
                    alt="Shoes"
                    
                  />
                </figure>
                
                <div className="card-body">
                  <h2 className="card-title">{item.itemName}</h2>
                  <p className="flex items-center gap-2 font-bold text-[#273c48]"><AiTwotoneTag className="fill-[#13e5c0]"></AiTwotoneTag>{item.subcategoryName}</p>
                  <hr />
                  <p>{item.shortDescription}</p>
                  <hr />
                  <div className="flex justify-between mt-2 mb-4">
                          <h3 className="flex items-center font-bold text-lg gap-1"><FaRegStar ></FaRegStar>{item.rating}</h3>
                          <h3 className="text-lg font-bold flex items-center gap-1"><MdAccessTime ></MdAccessTime>{item.processingTime}</h3>
                          <h3 className="text-lg font-bold">{item.price}</h3>
                      </div>
                      
                  <Link to={`/crafts/${item._id}`} className="card-actions w-full">
                    <button className="btn bg-[#13e5c0] w-full text-white font-bold">View Details</button>
                  </Link>
          
                </div>
              </div>)
            }
            </div>
            <Footer></Footer>
        </div>
       
    );
};

export default ArtCraftDetails;