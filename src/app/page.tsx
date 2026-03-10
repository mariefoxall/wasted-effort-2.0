import Image from "next/image";

export default function MainPage() {
  return (
    <div className="main-page">
      <h2>WASTED EFFORT</h2>
      <div className="main-content">
        <p className="one-liner">
          Wasted Effort is a multidisciplinary art project by Marie Foxall.{" "}
        </p>
        <Hello />
        {/* <Image
          className="main-image"
          src={"/reproduction-interdite.jpg"}
          alt={
            "Window display in gallery with ceramic vases, beaded keys and carved wood & papier mache sculptures"
          }
          width={1458}
          height={1000}
        /> */}
        <p>
          As a self-taught artist, Marie is interested in the limits and
          boundaries of materials. Without the constraints of classical
          training, they enjoy finding ways to twist and subvert the traditional
          methods of building. <br />
          <br />
          Applying techniques from one artistic field to another allows them to
          continuously learn and explore the limits of every medium. Marie
          delights in incorporating discarded materials, mixing media and toying
          with expectations. <br />
          <br />
          This exploration is an ongoing dialogue about humanity’s relationship
          to objects and the hilarious absurdity of our need to possess. Marie
          hopes for their work to inspire humour, play, and an overwhelming
          desire to touch.
        </p>
      </div>
    </div>
  );
}

import "./mainpage.css";
import Hello from "./hello/page";
