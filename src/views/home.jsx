import React from "react";
import ProfileHead from "../Component/profile";
import { Navbar } from "../layout/navbar";
import AboutUs from "../Component/about";
import Footer from "../layout/footbar";
import Gallery from "../Component/gallery";
import profileImg from "../assets/profile.jpg";
import carImg from "../assets/carfirst.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../Component/slider";
import Counter from "../Component/counter";
function Home() {
  return (
    <>
      <section className="main">
        <div className="container">
          <ProfileHead />
          <div className="navsection">
            <Navbar />
          </div>
          <section className="project">
            <Gallery profileImg={carImg} />
          </section>
          <section className="aboutus">
            <AboutUs />
          </section>

          <section className=" slider mb-5">
            <SimpleSlider />
          </section>
          <section className="counter-section">
            <Counter />
          </section>
        </div>
        <section className="footer">
          <Footer />
        </section>
      </section>
    </>
  );
}
export default Home;
