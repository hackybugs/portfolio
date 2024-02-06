import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="">
        <div className="tour-desc bg-white mx-3">
          <div className="tour-text color-grey-3 text-center">
            “At this School, our mission is to balance a rigorous comprehensive
            college preparatory curriculum with healthy social and emotional
            development.”
          </div>
          <div className="d-flex justify-content-center  testimonial-img">
            <img
              className="tm-people"
              src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
              alt=""
            />
          </div>
          <div className="link-name d-flex justify-content-center">
            Balbir Kaur
          </div>
          <div className="link-position d-flex justify-content-center">
            Student
          </div>
        </div>
      </div>
      <div>
        <div className="tour-desc bg-white mx-3">
          <div className="tour-text color-grey-3 text-center">
            “At this School, our mission is to balance a rigorous comprehensive
            college preparatory curriculum with healthy social and emotional
            development.”
          </div>
          <div className="d-flex justify-content-center  testimonial-img">
            <img
              className="tm-people"
              src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
              alt=""
            />
          </div>
          <div className="link-name d-flex justify-content-center">
            Balbir Kaur
          </div>
          <div className="link-position d-flex justify-content-center">
            Student
          </div>
        </div>
      </div>
      <div>
        <div className="tour-desc bg-white mx-3">
          <div className="tour-text color-grey-3 text-center">
            “At this School, our mission is to balance a rigorous comprehensive
            college preparatory curriculum with healthy social and emotional
            development.”
          </div>
          <div className="d-flex justify-content-center  testimonial-img">
            <img
              className="tm-people"
              src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
              alt=""
            />
          </div>
          <div className="link-name d-flex justify-content-center">
            Balbir Kaur
          </div>
          <div className="link-position d-flex justify-content-center">
            Student
          </div>
        </div>
      </div>
      <div>
        <div className="tour-desc bg-white mx-3">
          <div className="tour-text color-grey-3 text-center">
            “At this School, our mission is to balance a rigorous comprehensive
            college preparatory curriculum with healthy social and emotional
            development.”
          </div>
          <div className="d-flex justify-content-center  testimonial-img">
            <img
              className="tm-people"
              src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
              alt=""
            />
          </div>
          <div className="link-name d-flex justify-content-center">
            Balbir Kaur
          </div>
          <div className="link-position d-flex justify-content-center">
            Student
          </div>
        </div>
      </div>
      <div>
        <div className="tour-desc bg-white mx-3">
          <div className="tour-text color-grey-3 text-center">
            “At this School, our mission is to balance a rigorous comprehensive
            college preparatory curriculum with healthy social and emotional
            development.”
          </div>
          <div className="d-flex justify-content-center  testimonial-img">
            <img
              className="tm-people"
              src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
              alt=""
            />
          </div>
          <div className="link-name d-flex justify-content-center">
            Balbir Kaur
          </div>
          <div className="link-position d-flex justify-content-center">
            Student
          </div>
        </div>
      </div>
      <div>
        <div className="tour-desc bg-white mx-3">
          <div className="tour-text color-grey-3 text-center">
            “At this School, our mission is to balance a rigorous comprehensive
            college preparatory curriculum with healthy social and emotional
            development.”
          </div>
          <div className="d-flex justify-content-center  testimonial-img">
            <img
              className="tm-people"
              src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
              alt=""
            />
          </div>
          <div className="link-name d-flex justify-content-center">
            Balbir Kaur
          </div>
          <div className="link-position d-flex justify-content-center">
            Student
          </div>
        </div>
      </div>
    </Slider>
  );
}
