import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import img1 from "../../../assets/home/img1.jpg";
import img2 from "../../../assets/home/img2.jpg";
import img3 from "../../../assets/home/img3.jpg";
import img4 from "../../../assets/home/1.png";
import RightNav from "../RightNav/RightNav";
const Banner = () => {
    return (
        <div className="flex gap-8 w-4/5 mx-auto">
            <Carousel className="w-2/3">
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
            <RightNav></RightNav>
        </div>
    );
};

export default Banner;