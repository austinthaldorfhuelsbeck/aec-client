import SocialLinks from "../SocialLinks";
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <>
      <div className="container mt-5">
        <div className="row my-5 align-center">
          <h1 className="mx-auto">
            Tell Us Your Love Story
          </h1>
        </div>

        <h3 className="text-center" data-aos="fade-up">
          <SocialLinks />
        </h3>

        <div className="row my-2 align-left">
          <div className="col col-12 col-md-4 mt-3 mx-auto">
            <p>
              <em>
                <strong>We're Austin &amp; Emily</strong>, a wedding film
                duo based in Seattle, Washington.
              </em>
            </p>
            <p>
              Built on the philosophy that ordinary, fleeting moments
              can tell beautiful and unique stories.
            </p>
            <p>
              Our approach to filmmaking is authentic, but artistic:
              we strive to paint emotion in every frame.
            </p>
          </div>

          <ContactForm />
        </div>

      </div>
      <Footer />
    </>
  )
}