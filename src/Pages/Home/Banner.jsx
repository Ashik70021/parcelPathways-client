import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../assets/images/img2.jpg';
import image2 from '../../assets/images/img3.jpg';
import image3 from '../../assets/images/img4.jpg';
const Banner = () => {
    return (
        <Carousel className="text-center">
                <div>
                    <img className="relative"
                    src={image2} />
                    <h1 className="absolute -mt-48">inside banner</h1>

                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;