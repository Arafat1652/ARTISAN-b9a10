import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import Nav from "./Nav";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "./Footer";


const MyCraftPage = () => {

    const { user } = useContext(AuthContext)
    const [craftItem, setCraftItem] = useState([]);
    
    // http://localhost:5000/myCrafts/${user?.email}

    useEffect(() => {
        fetch(`https://b9a10-ar-02-server.vercel.app/myCrafts/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setCraftItem(data);
            
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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a10-ar-02-server.vercel.app/delete/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has deleted.",
                                icon: "success"
                            });
                            
                            const remaining = craftItem.filter(cof=> cof._id !== _id)
                            setCraftItem(remaining)
                        }
                    })
            }
        });
    }
    // http://localhost:5000/delete/${_id}
console.log(craftItem);
    return (
        <div>
            <Nav></Nav>
            <h2 className="text-3xl text-center max-w-[98%] mx-auto bg-[#f3f3f3] py-8 mb-8  mt-10 font-semibold">My Crafts</h2>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0">
                {
                    craftItem.map(craft=><div key={craft._id} className="card card-compact  group relative cursor-pointer overflow-hidden bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <figure>
                      <img
                      className="lg:h-[350px] md:h-[350px] w-full object-cover object-center"
                        src={craft.photoUrl}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{craft.stockStatus}
                    </div>
                    
                    <div className="card-body">
                      <h2 className="card-title">{craft.itemName}</h2>
                      <p className="">Customization : <span className="font-bold">{craft.customization}</span></p>
                      <div className="flex justify-between mt-2 mb-4">
                              <h3 className="flex items-center text-lg gap-1"><FaRegStar ></FaRegStar>{craft.rating}</h3>
                              <h3  className="text-lg font-bold">{craft.price}</h3>
                          </div>
                          
                       <div className="card-actions w-full items-center justify-evenly">
                        <button onClick={()=>handleDelete(craft._id)} className="btn bg-[#ff3366] text-white  font-bold">Delete</button>
                        <Link to={`/update/${craft._id}`}><button className="btn bg-[#13e5c0] text-white w-full  font-bold">Update</button></Link>
                      </div> 
                    
              
                    </div>
                  </div>)
                }
            </div>
            <div className="mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyCraftPage;