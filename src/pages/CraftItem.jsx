import { AiTwotoneTag } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const CraftItem = ({craft}) => {
    const  {_id,itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, photoUrl, userName, userEmail} = craft
  return (
    <div className="card card-compact  group relative cursor-pointer overflow-hidden bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <figure>
        <img
        className="lg:h-[350px] md:h-[350px] object-cover object-center"
          src={photoUrl}
          alt="Shoes"
          
        />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p className="flex items-center gap-2 font-bold text-[#273c48]"><AiTwotoneTag className="fill-[#13e5c0]"></AiTwotoneTag>{subcategoryName}</p>
        <hr />
        <p>{shortDescription}</p>
        <hr />
        <div className="flex justify-between mt-2 mb-4">
                <h3 className="flex items-center text-lg gap-1"><FaRegStar ></FaRegStar>{rating}</h3>
                <h3 data-aos='fade-right' data-aos-delay='1100' className="text-lg font-bold">{price}</h3>
            </div>
            
        {/* <div className="card-actions w-full">
          <button className="btn bg-[#13e5c0] w-full text-white font-bold">View Details</button>
        </div> */}
        <Link to={`crafts/${_id}`} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-black inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#13e5c0] group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white text-lg">View Details</span>
</Link>

      </div>
    </div>
  );
};

export default CraftItem;
