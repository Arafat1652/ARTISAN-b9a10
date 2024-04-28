import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import Nav from "./Nav";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "./Footer";

const MyCraftPage = () => {
  const { user } = useContext(AuthContext);
  const [craftItem, setCraftItem] = useState(null);
  const [displayCraft, setDisplayCraft] = useState([])

  const handleCraftFilter = filter=>{
    if(filter === 'all'){
        setDisplayCraft(craftItem)
    }
    
    else if(filter === 'yes'){
        const yesCraft = craftItem.filter(cra=> cra.customization.toLowerCase() ==='yes')
        setDisplayCraft(yesCraft)
    }
    else if(filter === 'no'){
        const noCraft = craftItem.filter(cra=> cra.customization.toLowerCase() === 'no')
        setDisplayCraft(noCraft)
    }
  }



  useEffect(() => {
    fetch(`https://b9a10-ar-02-server.vercel.app/myCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCraftItem(data);
        setDisplayCraft(data)
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a10-ar-02-server.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has deleted.",
                icon: "success",
              });

              const remaining = craftItem.filter((cof) => cof._id !== _id);
              setCraftItem(remaining);
            }
          });
      }
    });
  };

  if (!craftItem) {
    return (
      <div className="text-center ">
        <span className="loading loading-spinner loading-lg text-error mt-24"></span>
      </div>
    );
  }

  return (
    <div>
      <Nav></Nav>
      <h2 className="text-3xl text-center max-w-[98%] mx-auto bg-[#f3f3f3] py-8 mb-8  mt-10 font-semibold">
        My Crafts
      </h2>

      <div className="flex justify-center mb-14 ">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">
            Filter By{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
            </svg>{" "}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleCraftFilter('yes')}>
              <a>Yes</a>
            </li>
            <li onClick={()=>handleCraftFilter('no')}>
              <a>No</a>
            </li>
            <li onClick={()=>handleCraftFilter('all')}>
              <a>All</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0">
        {displayCraft.map((craft) => (
          <div
            key={craft._id}
            className="card card-compact  group relative cursor-pointer overflow-hidden bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <figure>
              <img
                className="lg:h-[350px] md:h-[350px] w-full object-cover object-center"
                src={craft.photoUrl}
                alt="Shoes"
              />
            </figure>
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              {craft.stockStatus}
            </div>

            <div className="card-body">
              <h2 className="card-title">{craft.itemName}</h2>
              <p className="">
                Customization :{" "}
                <span className="font-bold">{craft.customization}</span>
              </p>
              <div className="flex justify-between mt-2 mb-4">
                <h3 className="flex items-center text-lg gap-1">
                  <FaRegStar></FaRegStar>
                  {craft.rating}
                </h3>
                <h3 className="text-lg font-bold">{craft.price}</h3>
              </div>

              <div className="card-actions w-full items-center justify-evenly">
                <button
                  onClick={() => handleDelete(craft._id)}
                  className="btn bg-[#ff3366] text-white  font-bold"
                >
                  Delete
                </button>
                <Link to={`/update/${craft._id}`}>
                  <button className="btn bg-[#13e5c0] text-white w-full  font-bold">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyCraftPage;
