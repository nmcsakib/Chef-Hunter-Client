import React, { useContext } from 'react';
import banner from '../../assets/banner.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { ChefDetailsContext } from './Main';
import ChefCard from '../Cards/ChefCard';
import ReviewCards from '../Cards/ReviewCards';
import Faq from '../FAQ/Faq';

/* import Swiper configs */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay,  EffectCoverflow, Pagination } from "swiper";


/* import Map configs*/
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css';
import { Marker, Popup } from 'react-leaflet';

/* Position for Dhaka Bangladesh */
const position = [23.8103,90.4125]
const Home = () => {
    const chefDetails = useContext(ChefDetailsContext);
    const reviews = [
        {
        id : 1,
        name: "Supthi",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTMzODgxMXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60",
        review: "I`m humbled and grateful."
    },
        {
        id : 2,
        name: "SAKIB",
        pic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=81",
        review: "The Chef was fabulous. You made my day."
    },
        {
        id : 3,
        name: "Badhon",
        pic: "https://res.cloudinary.com/demo/image/facebook/65646572251.jpg",
        review: "My heart just keeps thanking you and thanking you."
    }
]
    return (
        /* Banner Section */
        <section>
            <img className='w-full h-screen' src={banner} alt="" />
            <div className='w-full h-full bg-gradient-to-t from-black absolute top-0'></div>
           <div className='absolute top-[20%] text-center'>
            <h1 className="text-5xl font-bold uppercase text-white tracking-wide">American Chefs <br />
At your door.</h1>
            <p className="tracking-wide text-md mt-5 px-5 font-serif text-white ">there is a highly skilled chef in a particular location or organization who is internationally recognized for their expertise in cooking. This chef has likely received formal training in culinary arts, and may have won awards or recognition for their dishes. Their cuisine is likely to be of exceptional quality, using the best ingredients and showcasing unique techniques and flavors.</p>
            <button className="btn btn-warning">Learn More  <FaArrowRight/> </button>
           </div>

           
           {/* Chefs Card Section */}

           <section className='pt-10 bg-[url("https://i.ibb.co/vHbnV60/istockphoto-1176594977-612x612.jpg")] bg-fixed bg-no-repeat bg-cover bg-center'>

            <h2 className="text-5xl text-center font-bold uppercase tracking-wide bg-gradient-to-r from-yellow-500 via-lime-600 to-pink-500 bg-clip-text text-transparent">Our master chefs</h2>
            <hr className="font-bold text-5xl h-10 mt-5" />
           
            <div className='grid md:grid-cols-3 gap-8 px-10 mt-5 pb-5'>
        {
            chefDetails.map(chefDetail => <ChefCard key={chefDetail.id} chefDetail={chefDetail}></ChefCard>)
        }
            </div>
           
           </section>

           
           {/* Review Section */}

            <section className=" w-full bg-[url('https://i.ibb.co/r6FR9JS/bakery-1868396-340.jpg')] bg-cover bg-no-repeat">
            <h2 className=" py-10 text-3xl text-center text-gray-800 font-bold uppercase tracking-wide"> Reviews</h2>
            <hr className='mb-5' />
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       {
        reviews.map(review => <SwiperSlide>
            <ReviewCards review={review}>

            </ReviewCards>
        </SwiperSlide>)
      
       }
            </Swiper>
            <hr className='mt-5' />
            </section>
            
            {/* Faq section */}

            <section className='py-5 from-slate-400 via-gray-300 to-base-400 bg-gradient-to-br'>
            <h2 className=" py-5 text-3xl text-center text-gray-800 font-bold uppercase tracking-widest"> FAQ</h2>
            <hr className='mb-5' />
            <Faq/>
            </section>

            {/* Where we live Section */}

            <section className='py-5 from-slate-400 via-gray-300 to-base-400 bg-gradient-to-br w-full'>
            <h2 className=" py-5 text-3xl text-center text-gray-800 font-bold uppercase tracking-widest"> Where we live</h2>
            <hr className='mb-5' />
            <div className="flex justify-center items-center px-10">
            <MapContainer  className="h-[500px] w-1/2" center={position} zoom={8} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} >
      <Popup>
      We lived in <br /> Bangladesh.
      </Popup>
    </Marker>
  </MapContainer>
  <h1 className="text-5xl text-gray-800 font-bold uppercase text-center">
    Dhaka, Bangladesh
  </h1>
            </div>
            </section>
          
        </section>
    );
};

export default Home;