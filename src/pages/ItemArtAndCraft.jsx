import { useEffect } from "react";
import { Link } from "react-router-dom";


const ItemArtAndCraft = ({subItem}) => {

    const {_id, subcategoryName, image} = subItem

    useEffect(() => {
    fetch(`https://b9a10-ar-02-server.vercel.app/cardItem/${subcategoryName}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  }, [subcategoryName]);

    return (
        <Link to={`/artCraft/${subcategoryName}`} className=" bg-[#d7edd8] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
            <div className="p-4">
              <img
                className="rounded-xl lg:h-[250px] md:h-[350px] w-full object-cover object-center"
                src={image}
                alt="Dog"
              />
            </div>
              <h3 className="text-center p-3 text-3xl text-[#3d626c] font-bold">{subcategoryName}</h3>
          </Link>
    );
};

export default ItemArtAndCraft;