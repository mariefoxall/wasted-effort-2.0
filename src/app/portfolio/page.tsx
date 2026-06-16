"use client";

import Image from "next/image";

import "./portfolio.css";
import Swiper from "swiper";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { PortfolioSlide, portfolioMedia } from "./media";

function Portfolio() {
  const [mySwiper, setMySwiper] = useState<Swiper | null>(null);
  const [slideAnnouncement, setSlideAnnouncement] = useState("");
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperContainerRef.current) {
      return;
    }

    const instance = new Swiper(swiperContainerRef.current, {
      modules: [Navigation, Pagination, Keyboard, A11y],
      loop: true,
      direction: "horizontal",

      slidesPerView: "auto",
      centeredSlides: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      a11y: {
        enabled: true,
        containerRoleDescriptionMessage: "carousel",
        slideRole: "group",
        itemRoleDescriptionMessage: "slide",
        paginationBulletMessage: "Go to slide {{index}}",
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".portfolio-pagination",
        type: "bullets",
        clickable: true,
        renderBullet: (index: number, className: string) => {
          const slide = portfolioMedia[index];
          if (!slide) {
            return `<button class="${className}"></button>`;
          }
          const label = `${slide.title}, ${slide.year} — ${slide.description}${slide.alt ? `. ${slide.alt}` : ""}`;
          return `<button class="${className}" aria-label="Go to slide ${index + 1}: ${label}"></button>`;
        },
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    instance.on("slideChange", () => {
      const slide = portfolioMedia[instance.realIndex];
      if (slide) {
        setSlideAnnouncement(
          `Slide ${instance.realIndex + 1} of ${portfolioMedia.length}: ${slide.title}, ${slide.year}. ${slide.description}`,
        );
      }

      // If a pagination bullet currently has focus, move it to the newly active bullet
      const focused = document.activeElement;
      if (focused?.classList.contains("swiper-pagination-bullet")) {
        requestAnimationFrame(() => {
          document
            .querySelector<HTMLElement>(".swiper-pagination-bullet-active")
            ?.focus();
        });
      }
    });

    setMySwiper(instance);

    return () => {
      instance.destroy(true, true);
      setMySwiper(null);
    };
  }, []);

  function onSwiperKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!mySwiper) {
      return;
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      mySwiper.slideNext();
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      mySwiper.slidePrev();
    }

    if (e.key === "Home") {
      e.preventDefault();
      mySwiper.slideToLoop(0);
    }

    if (e.key === "End") {
      e.preventDefault();
      mySwiper.slideToLoop(portfolioMedia.length - 1);
    }
  }

  const renderSlide = (slide: PortfolioSlide, index: number) => {
    return (
      <div className="swiper-slide" id={`slide-${index}`} key={slide.src}>
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
        <div
          ref={swiperContainerRef}
          className="swiper"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Portfolio gallery"
          aria-describedby="portfolio-carousel-instructions"
          onKeyDown={onSwiperKeyDown}
        >
          <p id="portfolio-carousel-instructions" className="sr-only">
            Use left and right arrow keys to move between slides.
          </p>
          <div className="swiper-wrapper">
            {portfolioMedia.map((slide: PortfolioSlide, index: number) =>
              renderSlide(slide, index),
            )}
          </div>

          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
        </div>
        <div className="portfolio-pagination"></div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {slideAnnouncement}
        </p>
      </div>
    </>
  );
}

export default Portfolio;
