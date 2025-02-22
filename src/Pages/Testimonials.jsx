import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ darkMode }) => {
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
    <div className={`mt-8 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Slider {...settings}>
        {testimonialsList.map((t, index) => (
          <div key={index} className={`p-8 ${darkMode ? "bg-gray-900" : "bg-white"} border-2 border-b-4 border-[#5465FF] rounded-lg text-center shadow-lg`}>
            <p className={`text-lg italic ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{`"${t.review}"`}</p>
            <h4 className={`mt-4 font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{t.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;