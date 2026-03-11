"use client";

import Image from "next/image";

import "./portfolio.css";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { PortfolioSlide, portfolioMedia } from "./media";

function Portfolio() {
  const [mySwiper, setMySwiper] = useState<Swiper | null>(null);
  useEffect(() => {
    const mySwiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      direction: "horizontal",

      slidesPerView: "auto",
      centeredSlides: true,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".portfolio-pagination",
        type: "bullets",
        clickable: true,
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    setMySwiper(mySwiper);
  }, []);

  const renderSlide = (slide: PortfolioSlide) => {
    return (
      <div className="swiper-slide" key={slide.src}>
        <figure className="slide-content">
          <div className="media-wrapper">
            {slide.type === "video" ? (
              <video controls={false} autoPlay loop muted>
                <source src={slide.src} />
              </video>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
              />
            )}
          </div>
          <figcaption className="slide-description">
            <h3>{slide.title}</h3>
            <p>
              {slide.description}
              <br />
              {slide.year}
            </p>
          </figcaption>
        </figure>
      </div>
    );
  };

  return (
    <>
      {/* <Header /> */}
      <div className="portfolio-page">
        <h2>WORK</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            {portfolioMedia.map((slide: PortfolioSlide) => renderSlide(slide))}
          </div>

          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
        </div>
        <div className="portfolio-pagination"></div>
      </div>
    </>
  );
}

export default Portfolio;
