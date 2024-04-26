import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CraftItem from "./CraftItem";
import Footer from "./Footer";
import Nav from "./Nav";


const Home = () => {
    const crafts = useLoaderData()
    console.log(crafts);
    return (
        <div>
            
            <Nav></Nav>
            <Banner></Banner>
            <div>
                <h3 className="text-3xl text-[#131313] mt-24 text-center font-semibold">Crafts Items</h3>
                <p className="w-[650px] mx-auto  mb-10 text-center mt-3 text-[#13131380]">Step into our vibrant world of creativity at ARTISAN, where imagination knows no bounds! Our art and craft store is a treasure trove for enthusiasts of all ages and skill levels.</p>
                <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
                {
                    crafts.map(craft=><CraftItem key={craft._id} craft={craft}></CraftItem>)
                }
                </div>
            
            </div>
           <div className="mt-20">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;