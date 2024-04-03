import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReviewsView = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://e-book-server.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews)

  return (
    <div className="md:mx-20 my-12 pt-6 px-6 ">
      <h1 className="text-center text-2xl font-semibold uppercase  mb-8">
        Our Costumer Review
      </h1>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      ></Swiper>

      <div className="bg-indigo-100">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((reviews) => (
            <SwiperSlide key={reviews._id}>
              <div className="my-16 mx-24 flex flex-col items-center text-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={reviews.rating}
                  readOnly
                />
                <p className="mt-4">{reviews.description}</p>

                <div className="mt-4 flex justify-center items-center gap-2">
                  <div className="">
                    <h1 className="text-lg text-indigo-800 font-semibold ">
                      {reviews.name}
                    </h1>
                    <p className="text-center">{reviews.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsView;

// export default ReviewsView;
