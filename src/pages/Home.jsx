import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";


const Home = () => {
    return (
        <div>
            
            <Nav></Nav>
            <Banner></Banner>
           <div className="mt-20">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;