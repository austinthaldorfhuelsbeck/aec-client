import { Route, Switch } from "react-router-dom";

import SocialLinks from "../SocialLinks";
import VideoBanner from "../Home/VideoBanner/VideoBanner";
import FeaturedFilms from "./FeaturedFilms/FeaturedFilms";
import FilmPage from "./FilmPage/FilmPage";
import Footer from "../Footer/Footer";

export default function Films(props) {
  const videoSrc =
    "https://austin-and-emily-creative.s3.us-east-2.amazonaws.com/aec-video/After%20The%20Rain-Couple%20Trailer-v7.mp4";

  return (
    <>
      <h3 className="text-center" data-aos="fade-up">
        <SocialLinks />
      </h3>
      <Switch>
        <Route exact path="/films">
          <VideoBanner src={videoSrc} />
          <br />
          <br />
          <FeaturedFilms />
        </Route>
        <Route path="/films/:coupleId">
          <FilmPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}