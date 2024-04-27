import { useContext } from "react";
import Nav from "./Nav";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import Footer from "./Footer";
import Swal from "sweetalert2";

const AddCraft = () => {
  const {user} = useContext(AuthContext)
  const userName = user.displayName
  const userEmail = user.email
  const handleAddCraft = e =>{
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

    const craft = {itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, photoUrl, userName, userEmail}  
    console.log(craft);

    fetch('https://b9a10-ar-02-server.vercel.app/crafts', {
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(craft)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your data added in database",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
      }
    })
  }

  return (
    <div>
      <Nav></Nav>
      <div className="p-24 bg-[#F4F3F0]">
        <h3 className="text-3xl font-bold text-center mb-8 text-[#13131380]">Add Craft Item</h3>
        <form onSubmit={handleAddCraft}>
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
                  placeholder="Item Name"
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
                  placeholder="SubCategory Name"
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
                  placeholder="Short Description"
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
                  placeholder="Price"
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
                  placeholder="Rating"
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
                  placeholder="Customization"
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
                  placeholder="Processing Time"
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
                  placeholder="Stock Status"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* form */}

          {/* form row */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={userEmail}
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={userName}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
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
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            </div>

          <input
            type="submit"
            value="Add"
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

export default AddCraft;
