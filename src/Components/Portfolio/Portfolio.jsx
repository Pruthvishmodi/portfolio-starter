import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Portfolio">
      {/*heading*/}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/*Swiper*/}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_720,w_1280/v1649765904/new%20portfolio/sidebar_y1mcdz.webp"
            alt="sidebar"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_720,w_1280/v1649765902/new%20portfolio/ecommerce_spowki.webp"
            alt="Ecommerce"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_720,w_1280/v1649765903/new%20portfolio/musicapp_eekklj.webp"
            alt="Music app"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_720,w_1280/v1649765902/new%20portfolio/hoc_catoqr.webp"
            alt="HOC"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
