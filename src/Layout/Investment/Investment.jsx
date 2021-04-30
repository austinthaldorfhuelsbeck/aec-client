import { Link } from "react-router-dom";

import SocialLinks from "../SocialLinks";
import Footer from "../Footer/Footer";

export default function Investment() {
  return (
    <div className="container mt-5">
      <div className="row my-5 align-center">
        <h1 className="mx-auto">
          Investment Guide
        </h1>
      </div>
      <h3 className="text-center" data-aos="fade-up">
        <SocialLinks />
      </h3>

      <div className="row my-4">
        <img
          src="https://storage.googleapis.com/austin-and-emily-website/kailey-kyle.jpg"
          title="Kailey + Kyle"
          alt="Kailey + Kyle"
          className="flex-img"
          data-aos="fade"
        />
      </div>

      <div className="row my-4 align-left">
        <h2>
          Authentic + Captivating Films
          <br />
          <em>for passionate couples.</em>
        </h2>
      </div>

      <div className="row my-4 align-left">
        <div className="col col-12 col-md-6 my-auto px-3">
          <h3 className="big-text my-3">Investment</h3>
          <p>
            Wedding videography coverage starts at <strong>$3150</strong>.<br />
            Your collection is fully customizable to your needs through
            a-la-carte style add-ons.<br />
            <em>
              Note: Elopements are custom priced based on location and time needed.
            </em>
          </p>
          <p>
            Browse starting packages below and <Link to="/contact" className="black-text">
            don’t hesitate to get in contact </Link>
            to discuss custom collections.
          </p>
        </div>
        <div className="col col-12 col-md-6 my-auto px-3">
          <img
            alt="Wedding Rings"
            src="https://storage.cloud.google.com/austin-and-emily-website/wedding-rings.jpg?authuser=2"
            className="inline-image"
          />
        </div>
      </div>

      <div className="row my-5 align-center">
        <h2 className="mx-auto">Collections</h2>
      </div>

      <div className="row my-5">
        <img
          alt="Investment Guide"
          src="https://storage.cloud.google.com/austin-and-emily-website/investment-guide_page5.jpg?authuser=2"
          className="inline-image"
        />
      </div>

      <Footer />

    </div>
  )
}