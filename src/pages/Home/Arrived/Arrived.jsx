import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import arrived from '../../../assets/home/arrived.jpg'
import './Arrived.css'

const Arrived = () => {

    return (
        <div className="arrived-items bg-fixed text-white my-20">
            <SectionTitle heading="Collection Arrived"></SectionTitle>
            <div className="md:flex justify-center items-center px-36 py-20">
                <div className="w-1/3 px-4">
                    <img style={{height:'300px'}} src={arrived} alt="" />
                </div>
                <div className="w-1/2 px-8 text-end ">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Numquam obcaecati quidem alias? A doloribus <br /> consequatur eum ut est atque vero!</p>
                    <p>Price from: <strong className="text-2xl">$50</strong></p>
                    <div className="my-4">
                <button className="btn btn-outline mx-4">Shop Now</button>
                <button className="btn btn-outline">View More</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Arrived;