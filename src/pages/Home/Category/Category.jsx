import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import earring1 from "../../../assets/home/earring1.png";
import earring2 from "../../../assets/home/earring2.jpg";
import earring3 from "../../../assets/home/earring3.jpg";
import earring4 from "../../../assets/home/earring4.jpg";
import earring5 from "../../../assets/home/earring5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useJewelry from "../../../hooks/useJewelry";

const Category = () => {
  const [jewelry,loading] = useJewelry();
  return (
    <section>
      <SectionTitle heading={"DEAL OF THE DAY"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwipe mb-24"
      >
        {jewelry.map((item) => (
          <SwiperSlide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>${item.price}</p>
                <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={earring2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={earring3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={earring4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={earring5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Category;
