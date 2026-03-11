"use client";

import "./hello.css";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect } from "react";

function Hello() {
  const handleMouseEnter = () => {
    gsap.timeline().to("#circles__text--0", {
      duration: 12,
      scale: 1,
      delay: 0,
      ease: "power2.inOut",
      rotate: "+=360",
      svgOrigin: "700.5 700.5",
    });
    gsap.timeline().to("#circles__text--1", {
      duration: 10,
      scale: 1,
      delay: 0,
      ease: "power2.inOut",
      rotate: "+=360",
      svgOrigin: "700.5 700.5",
    });
    gsap.timeline().to("#circles__text--2", {
      duration: 8,
      scale: 1,
      delay: 0.5,
      ease: "power2.inOut",
      rotate: "+=360",
      svgOrigin: "700.5 700.5",
    });
    gsap.timeline().to("#circles__text--3", {
      duration: 6,
      scale: 1,
      delay: 1,
      ease: "power2.inOut",
      rotate: "+=360",
      svgOrigin: "700.5 700.5",
    });
    gsap.timeline().to("#circles__text--4", {
      duration: 4,
      scale: 1,
      delay: 1.5,
      ease: "power2.inOut",
      rotate: "+=360",
      svgOrigin: "700.5 700.5",
    });
  };

  useEffect(() => {
    handleMouseEnter();
  }, []);

  return (
    <>
      <div className="spinny-section">
        <svg
          className="circles"
          width="100%"
          height="100%"
          viewBox="0 0 1400 1400"
        >
          <defs>
            <path
              id="circle-0"
              d="M158.86,700.5A541.64,541.64 0 1 1 1242.14,700.5A541.64,541.64 0 1 1 158.86,700.5"
            />
            <path
              id="circle-1"
              d="M268.5,700.5A432,432 0 1 1 1132.5,700.5A432,432 0 1 1 268.5,700.5"
            />
            <path
              id="circle-2"
              d="M363.18,700.5A337.32,337.32 0 1 1 1037.82,700.5A337.32,337.32 0 1 1 363.18,700.5"
            />
            <path
              id="circle-3"
              d="M465.34,700.5A235.16,235.16 0 1 1 935.66,700.5A235.16,235.16 0 1 1 465.34,700.5"
            />

            <path
              id="circle-4"
              d="M567.5,700.5A133,133 0 1 1 833.5,700.5A133,133 0 1 1 567.5,700.5"
            />
          </defs>
          <text
            id="circles__text--0"
            className="circles__text circles__text--0"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-0"
              aria-label=""
              textLength="3460"
            >
              wood wood wood wood wood wood wood &nbsp;
            </textPath>
          </text>
          <text
            id="circles__text--1"
            className="circles__text circles__text--1"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-1"
              aria-label=""
              textLength="2714"
            >
              plastic plastic plastic plastic plastic&nbsp;
            </textPath>
          </text>
          <text
            id="circles__text--2"
            className="circles__text circles__text--2"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-2"
              aria-label=""
              textLength="2119"
            >
              paper paper paper paper paper paper&nbsp;
            </textPath>
          </text>
          <text
            id="circles__text--3"
            className="circles__text circles__text--3"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-3"
              aria-label=""
              textLength="1478"
            >
              textile textile textile textile&nbsp;
            </textPath>
          </text>
          <text
            id="circles__text--4"
            className="circles__text circles__text--4"
          >
            <textPath
              className="circles__text-path"
              xlinkHref="#circle-4"
              aria-label=""
              textLength="836"
            >
              clay clay clay&nbsp;
            </textPath>
          </text>
        </svg>

        <button className="enter" onMouseEnter={handleMouseEnter}>
          <Link href="/portfolio" className="enter-link">
            <div className="enter__bg"></div>
            <span className="enter__text">
              WASTED <br />
              EFFORT
            </span>
          </Link>
        </button>
      </div>
    </>
  );
}

export default Hello;
