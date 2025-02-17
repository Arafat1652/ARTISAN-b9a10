import ArtAndCraft from "./ArtAndCraft";
import Banner from "./Banner";
import CraftItem from "./CraftItem";
import Footer from "./Footer";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import OurTeam from "./OurTeam";
import Faq from "./Faq";
import { Helmet } from "react-helmet-async";


const Home = () => {
    // const crafts = useLoaderData()
    const [crafts, setCrafts] = useState(null)
    // console.log(crafts);
    useEffect(()=>{
        fetch('https://b9a10-ar-02-server.vercel.app/crafts')
        .then(res=>res.json())
        .then(data=>setCrafts(data))
    },[])


    if(!crafts){
           return (
            <div className="text-center z-10 ">
               <span className="loading loading-spinner loading-lg text-error mt-24"></span>
            </div>
        );
    }
    return (
        <div>
            <Helmet>
                <title>Home || ARTISAN</title>
            </Helmet>
            <Nav></Nav>
            <Banner></Banner>
            <div>
                <h3 className="text-3xl mt-24 text-center font-bold">Crafts Items</h3>
                <p className="lg:w-[650px] mx-auto  mb-10 text-center mt-3">Step into our vibrant world of creativity at ARTISAN, where imagination knows no bounds! Our art and craft store is a treasure.</p>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0">
                {
                    crafts.slice(0,6).map(craft=><CraftItem key={craft._id} craft={craft}></CraftItem>)
                }
                </div>
            
            </div>
           <div className="mt-20">
            <ArtAndCraft></ArtAndCraft>
            <OurTeam></OurTeam>
            <Faq></Faq>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;