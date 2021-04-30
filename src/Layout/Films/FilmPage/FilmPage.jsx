import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import couples from "../../../data/data";
import Footer from "../../Footer/Footer";

export default function FilmPage(props) {
  const { coupleId } = useParams();
  const couple = couples.find((couple) => couple.coupleId === coupleId);
  
  return (
    <div className="container mt-5">
      <div className="row my-2 align-center">
        <h2 className="mx-auto">
          {couple.coupleName}
        </h2>
      </div>
      <div className="row">
        <Link to="/films" className="mx-auto">
          <p><em>&larr; Films</em></p>
        </Link>
      </div>

      <div className="row embed-responsive embed-responsive-21by9 mx-auto px-5">
        <ReactPlayer url={couple.videoSrc} />
      </div>
      
      <Footer />
    </div>
  )
}