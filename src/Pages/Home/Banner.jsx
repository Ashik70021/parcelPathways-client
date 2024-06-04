// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';

// import image1 from '../../assets/images/img2.jpg';
// import image2 from '../../assets/images/img3.jpg';
// import image3 from '../../assets/images/img4.jpg';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
    {
        heading: "Fast and Reliable Delivery",
        subHeading: "Get your parcels delivered quickly and safely.",
        buttonText: "Learn More",
        searchPlaceholder: "Search your parcel"
    },
    {
        heading: "Track Your Package",
        subHeading: "Real-time tracking for your peace of mind.",
        buttonText: "Track Now",
        searchPlaceholder: "Enter tracking number"
    },
    {
        heading: "Join Our Team",
        subHeading: "Become a part of our delivery network.",
        buttonText: "Apply Now",
        searchPlaceholder: "Search job openings"
    }
];

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className="py-12">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <Slider {...settings}>
                    {sliderData.map((slide, index) => (
                        <div key={index} className="relative bg-white rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-75"></div>
                            <div className="relative p-8 text-center">
                                <h2 className="text-3xl font-extrabold text-white mb-2">{slide.heading}</h2>
                                <p className="text-lg text-white mb-4">{slide.subHeading}</p>
                                <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg mb-4">
                                    {slide.buttonText}
                                </button>
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder={slide.searchPlaceholder} 
                                        className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg" 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
     );
};

export default Banner;