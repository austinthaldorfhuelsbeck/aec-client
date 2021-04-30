import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const REACT_APP_API_URL = "https://aec-api-austinthaldorfhuelsbeck.vercel.app"

export default function FeaturedFilms() {
  const [couples, setCouples] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/couples`)
      .then((response) => response.json())
      .then((response) => setCouples(response.data))
  }, []);

  const films = couples.map((couple, index) => (
    <Link to={`/films/${couple.url}`}>
      <img
        key={index}
        src={couple.image_url}
        alt={`film${index}`}
        className="flex-img my-3 hover-border"
        data-aos="fade-up"
      />
    </Link>
  ));

  return (
    <div className="featured-films">
      <h2 className="align-center">
        <em>Featured Films</em>
      </h2>
      <div className="row my-5">
        <div className="col-12 col-md-4 my-auto">
          {films[0]}
          {films[1]}
        </div>
        <div className="col-12 col-md-4 my-auto">
          {films[2]}
          {films[3]}
          {films[4]}
        </div>
        <div className="col-12 col-md-4 my-auto">
          {films[5]}
          {films[6]}
        </div>
      </div>
    </div>
  )
}