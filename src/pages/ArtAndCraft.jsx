import { useEffect, useState } from "react";
import ItemArtAndCraft from "./ItemArtAndCraft";

const ArtAndCraft = () => {
  const [subCategory, setSubCategory] = useState(null);
  // console.log(crafts);
  useEffect(() => {
    fetch("https://b9a10-ar-02-server.vercel.app/subcategory")
      .then((res) => res.json())
      .then((data) => setSubCategory(data));
  }, []);
//   console.log(subCategory);


  if (!subCategory) {
    return (
      <div className="text-center ">
        <span className="loading loading-spinner loading-lg text-error mt-24"></span>
      </div>
    );
  }
//   bg-[#fff3f3] bg-[#d7edd8]
  return (
    <div className="my-24 max-w-7xl mx-auto">
        
        <h3 className="text-3xl text-[#3d626c] mt-24 text-center font-bold">Art & Craft</h3>
                <p className="lg:w-[650px] mx-auto  mb-10 text-center mt-3 text-[#13131380]">With an array of supplies and tools at hand, this space ignites inspiration and fosters a sense of accomplishment as individuals bring their visions to life. </p>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0">
        {
            subCategory.map(subItem=><ItemArtAndCraft key={subItem._id} subItem={subItem}></ItemArtAndCraft> )
        }
        </div>
      
        </div>

  );
};

export default ArtAndCraft;
