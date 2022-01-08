import { Link } from "react-router-dom";

import VideoBanner from "./VideoBanner/VideoBanner";
import FeaturedFilms from "../Films/FeaturedFilms/FeaturedFilms";
import Footer from "../Footer/Footer";

export default function Home() {
  const videoSrc =
    "https://austin-and-emily-creative.s3.us-east-2.amazonaws.com/aec-video/reel-bg-vid.mp4";

  return (
    <div className="container mt-5">
      <main>
        <VideoBanner src={videoSrc} />
        <div className="my-2 align-center">
          <div className="row my-4">
            <h3 className="mx-auto my-2">
              Your wedding is a brief moment in a story that you'll work to
              write forever.
            </h3>
            <h3 className="mx-auto my-2">
              <em>
                Your wedding film should capture the full story of your love in
                all its forms.
              </em>
            </h3>
          </div>
          <div className="row my-2">
            <p className="mx-auto my-2">
              The glint in your partner's eye, the same one you remember
              noticing when you knew there must be something more, the gaze that
              sees all of who you are and cherishes you.
            </p>
            <p className="mx-auto my-2">
              We want to tell the full story, the one you can relive again and
              again with family and friends. We are committed to our couples and
              what makes them unique, and we take the time to create powerful
              films that move and showcase them and their unique love story.
            </p>
            <p className="mx-auto my-2">
              Your day will have it all. Fleeting moments of anticipation, of
              joy, of sheer breathlessness...
              <br />
              We want those memories to grow with you and continue telling that
              powerful story for generations.
            </p>
          </div>
          <div className="row justify-content-center p-4">
            <a href="/contact" className="btn btn-outline-primary btn-lg">
              Say Hello
            </a>
          </div>
        </div>
        <FeaturedFilms />
        <hr />

        <div className="row my-2">
          <div className="col col-6 my-auto align-right">
            <Link to="/about">
              <h3>Meet the filmmakers //</h3>
            </Link>
          </div>
          <div className="col col-6 align-left">
            <p>
              <em>
                We're Austin &amp; Emily, a wedding film duo based in Seattle,
                Washington.
              </em>
            </p>
            <p>
              <em>
                Built on the philosophy that ordinary, fleeting moments can tell
                beautiful and unique stories.
              </em>
            </p>
            <p>
              <em>
                Our approach to filmmaking is authentic, but artistic: we strive
                to paint emotion in every frame.
              </em>
            </p>
          </div>
          <div className="row mx-auto my-2">
            <img
              src="https://austin-and-emily-creative.s3.us-east-2.amazonaws.com/aec-img/Emily-Austin.jpg"
              alt="Henry Tieu Photography"
              title="Austin + Emily"
              className="inset-image mt-5"
              data-aos="fade"
            />
          </div>
        </div>

        <div className="row my-5">
          <div className="mx-auto">
            <a
              href="https://junebugweddings.com/vendors/wedding-videographers/washington/seattle/Austin-and-Emily-Creative"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ba2be89f7939283452926ac/1610425533993-2000X6I96TVZQDZPFGEB/ke17ZwdGBToddI8pDm48kO2pS9cMHbO4RvHPc8Skf1tZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7SSwGn0TPzISNt3iSJufpcvR7xFZ2oYA-YTitnkXPCuTgiUfhLEJ_Uxi_cK3qclb8w/junebugbadgecircle.png?format=300w"
                alt="Junebug Weddings, Approved Vendor"
                className="badge-img px-3"
                data-aos="fade"
              />
            </a>
            <a
              href="https://www.theknot.com/marketplace/austin-and-emily-creative-seattle-wa-2029891#:~:text=Based%20in%20Seattle%2C%20WA%2C%20Austin,is%20a%20wedding%20videography%20company.&text=As%20such%2C%20they%20strive%20to,videographers%20value%20the%20little%20moments."
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.xoedge.com/myaccount/2019/website-share/VendorBadge_AsSeenOnWeb.png"
                alt="As Seen On The Knot"
                className="badge-img px-3"
                data-aos="fade"
              />
            </a>
            <a
              href="https://www.weddingwire.com/biz/austin-and-emily-creative/56f4f64bd757e9a0.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ba2be89f7939283452926ac/1610425692230-3THLQH8PO3INF26JFH4H/ke17ZwdGBToddI8pDm48kKeAffqMWCnn7OxQXrfTl2FZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7YmDye92LJlx5Z6JHLEUGa2fBfAhi5Seck9gsgbvzej-kames5xU7QYa2wkLmeNDOg/WeddingWire_Badge.png?format=300w"
                alt="As Seen On Wedding Wire"
                className="badge-img px-3"
                data-aos="fade"
              />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
