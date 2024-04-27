import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const AllCraftItems = () => {
  const crafts = useLoaderData();
  console.log(crafts);
  return (
    <div>
      <Nav></Nav>
      {/* table */}
      <h2 className="text-3xl text-center max-w-[98%] mx-auto bg-[#f3f3f3] py-8 mb-8  mt-10 font-semibold">
        All Added ART & CRAFT
      </h2>
      <div className="mt-10 mb-24">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#d7edd8] border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        SL
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Item Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Subcategory Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {crafts.map((craft, index) => (
                      <tr key={craft._id} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {craft.itemName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {craft.subcategoryName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {craft.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                          <Link to={`/crafts/${craft._id}`}>
                            <button className="btn bg-[#13e5c0] text-white">
                              View Details
                            </button>{" "}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCraftItems;
