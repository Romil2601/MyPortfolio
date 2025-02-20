import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialsList = [
    { name: "John Doe", review: "Amazing developer! Loved working with them." },
    { name: "Jane Smith", review: "Super talented and professional!" },
    { name: "Alex Brown", review: "Great experience working together!" },
    { name: "Sarah Johnson", review: "Highly recommended!" },
    { name: "Mike Davis", review: "Excellent work, highly skilled!" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="mt-8">
      <Slider {...settings}>
        {testimonialsList.map((t, index) => (
          <div key={index} className="p-8 bg-white border border-b-4 border-[#846CF9] dark:bg-gray-900 rounded-lg text-center shadow-lg">
            <p className="text-lg italic text-gray-700 dark:text-gray-300">"{t.review}"</p>
            <h4 className="mt-4 font-bold text-gray-900 dark:text-white">{t.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;