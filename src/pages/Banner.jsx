import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
const Banner = () => {
  return (
    <div className='max-w-[98%] mx-auto mt-1'>  
      <Swiper modules={[Navigation,Autoplay, Pagination]}
      autoplay={{
        delay: 2000,
      }}
        pagination={{
          clickable: true,
        }}
      loop={true}>
    <SwiperSlide><div className="z-0">
          <div className="hero h-[80vh] bg-cover object-center rounded-lg " style={{
          backgroundImage:"url(https://images.unsplash.com/photo-1500628550463-c8881a54d4d4?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
            <div className="hero-content lg:mr-60 md:mr-40">
              <div>
                <h1  className="mb-4 text-[#d7edd8] lg:w-[500px] md:text-4xl lg:text-6xl text-2xl font-bold">Buy or rent properties </h1>
                <p className="mb-5 md:w-[500px] lg:w-[550px] text-[#d7edd8]">Nestled in a tranquil neighborhood, this charming three-bedroom bungalow boasts a spacious backyard perfect for outdoor gatherings, while its tastefully renovated interior exudes warmth and comfort, offering a haven of relaxation and modern living. </p>
              </div>
            </div>
          </div>
      </div></SwiperSlide>

   <SwiperSlide> <div className="z-0">
          <div className="hero h-[80vh] bg-cover object-center rounded-lg " style={{
          backgroundImage:"url(https://images.unsplash.com/photo-1573297627466-6bed413a43f1?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
           <div className="hero-content lg:mr-60 md:mr-40">
              <div>
                <h1  className="mb-4 text-[#ffffff] lg:w-[500px] md:text-4xl lg:text-6xl text-2xl font-bold">Buy or rent properties </h1>
                <p className="mb-5 md:w-[500px] lg:w-[550px] text-white">Nestled in a tranquil neighborhood, this charming three-bedroom bungalow boasts a spacious backyard perfect for outdoor gatherings, while its tastefully renovated interior exudes warmth and comfort, offering a haven of relaxation and modern living. </p>
              </div>
            </div>
          </div>
      </div></SwiperSlide>

    <SwiperSlide> <div className="z-0">
          <div className="hero h-[80vh] bg-cover object-center rounded-lg " style={{
          backgroundImage:"url(https://images.unsplash.com/photo-1561046207-3b06bf198d0e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
           <div className="hero-content lg:mr-60 md:mr-40">
              <div>
                <h1  className="mb-4 text-[#ffffff] lg:w-[500px] md:text-4xl lg:text-6xl text-2xl font-bold">Buy or rent properties </h1>
                <p className="mb-5 md:w-[500px] lg:w-[550px] text-white">Nestled in a tranquil neighborhood, this charming three-bedroom bungalow boasts a spacious backyard perfect for outdoor gatherings, while its tastefully renovated interior exudes warmth and comfort, offering a haven of relaxation and modern living. </p>
              </div>
            </div>
          </div>
      </div></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
