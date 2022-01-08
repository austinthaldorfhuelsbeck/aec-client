import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "../SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="overlap-group">
        <div className="overlap-layer top">
          <div className="text-center">
            <h2 className="white-text">
              <Link to="/contact">Tell us your love story.</Link>
            </h2>
            <h3 className="white-text">
              <em>We want to see that story come to life.</em>
            </h3>
            <p className="white-text">
              <strong>Let's talk!</strong> We'd love to collaborate with you to
              create something beautiful. 
              <a href="/contact" className="white-text">Connect with us and let's get started.</a>
            </p>
          </div>
        </div>
        <div className="overlap-layer">
          <img
            className="fill-img"
            alt="bridesmaids"
            src="https://austin-and-emily-creative.s3.us-east-2.amazonaws.com/aec-img/cassandra-bridal-party.jpg"
          />
        </div>
      </div>

      <div className="pad-top">
        <section className="sub-footer">
          <div className="footer-content">
            <h2 className="align-center mb-4">
              <a
                href="https://www.instagram.com/austinandemilycreative/"
                target="_blank" rel="noreferrer"
              >
                
              </a>
            </h2>
          </div>

          <SocialLinks />

          <div className="row d-flex justify-content-center align-center py-3">
            <Link to="/about" className="px-2">About</Link> | 
            <Link to="/contact" className="px-2">Contact</Link> | 
            <Link to="/films" className="px-2">Films</Link> | 
            <Link to="/investment" className="px-2">Investment</Link>
          </div>
        
          <div className="row py-3">
            <h3 className="align-center mx-auto">
              <strong>&#169; 2021 Austin + Emily</strong> <em>Creative</em>
            </h3>
          </div>
        </section>
      </div>
    </footer>
  )
}