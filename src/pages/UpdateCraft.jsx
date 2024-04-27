import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import Swal from "sweetalert2";


const UpdateCraft = () => {
    const {id} = useParams()
    console.log(id);
    const [arts, setArts] = useState({})

    // http://localhost:5000/singleCrafts/${id}

    useEffect(()=>{
        fetch(`https://b9a10-ar-02-server.vercel.app/singleCrafts/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setArts(data)
            console.log(data);
        })
    },[id])

    const handleUpdate =(e)=>{
        e.preventDefault()
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const photoUrl = form.photoUrl.value;
    
        const craft = {itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, photoUrl}  
        console.log(craft);

        // http://localhost:5000/updateCrafts/${id}

        fetch(`https://b9a10-ar-02-server.vercel.app/updateCrafts/${id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "updated succefully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }


    return (
        <div>
        <Nav></Nav>
        <div className="p-24 bg-[#F4F3F0]">
          <h3 className="text-3xl font-bold text-center mb-8 text-[#13131380]">Update Craft Item</h3>
          <form onSubmit={handleUpdate}>
            {/* form row */}
            <div className="flex mb-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="itemName"
                    defaultValue={arts.itemName}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
  
              <div className="form-control w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">SubCategory Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="subcategoryName"
                    defaultValue={arts.subcategoryName}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            {/* form row */}
            <div className="flex mb-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="shortDescription"
                    defaultValue={arts.shortDescription}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
  
              <div className="form-control w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    defaultValue={arts.price}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            {/* form row */}
            <div className="flex mb-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    defaultValue={arts.rating}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
  
              <div className="form-control w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="customization"
                    defaultValue={arts.customization}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            {/* form row */}
            <div className="flex mb-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="processingTime"
                    defaultValue={arts.processingTime}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
  
              <div className="form-control w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="stockStatus"
                    defaultValue={arts.stockStatus}
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            {/* form */}
  
            {/* form */}
  
            <div className="flex mb-5 w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photoUrl"
                    defaultValue={arts.photoUrl}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              </div>
  
            <input
              type="submit"
              value="Update"
              className="btn btn-block text-xl bg-[#13e5c0]"
            />
          </form>
        </div>
        <div>
        </div>
        <div className="mt-24">
        <Footer></Footer>
        </div>
      </div>
    );
};

export default UpdateCraft;