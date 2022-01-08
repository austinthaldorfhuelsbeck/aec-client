import SocialLinks from "../SocialLinks";
import Footer from "../Footer/Footer";

export default function About() {
  const imgSrc = "https://storage.googleapis.com/ath-portfolio-images/Emily-Austin-5.gif";

  return (
    <>
      <div className="container mt-5">
        <div className="row my-5 align-center">
          <h1 className="mx-auto">
            Meet The Filmmakers
          </h1>
        </div>
        <h3 className="text-center" data-aos="fade-up">
          <SocialLinks />
        </h3>

        <div className="row my-4">
          <img
            src={imgSrc}
            title="Henry Tieu Photography"
            alt="Austin + Emily"
            className="flex-img"
            data-aos="fade"
          />
        </div>

        <div className="row my-2">
          <p className="tiny-text">
            <em>
              *Our wedding photography was provided by <a href="https://www.henry-tieu.com/" target="_blank" rel="noreferrer">
                Henry Tieu Photography
              </a>
            </em>
          </p>
        </div>

        <div className="row my-2 align-left">
          <div className="col col-12 col-md-4 my-auto">
            <h3>Seeking:</h3>
            <h3>
              Adventurous couples +
              <br />
              golden hour chasers +
              <br />
              lovers of love.
            </h3>
            <p><em>Seattle // &amp; beyond</em></p>
          </div>

          <div className="col col-12 col-md-8">
            <p>
              In 2010, Emily started Thaldorf Creative Group based in Knoxville,
              TN and began channeling her passion for photography into a business
              laser-focused on documenting the nuances of love through wedding photography.
            </p>
            <p>
              Austin, a familiar face in the local music scene in Nashville, TN,
              found his artistic voice through music video production and audio design.
              During the day, he is a Visual Marketing Specialist for a local college,
              constantly learning and experimenting with the most cutting-edge video
              and audio technology.
            </p>
            <p>
              Together, we not only found a great life partner, but also a creative partner
              and founded Austin + Emily Creative, a full-service wedding photography and
              videography company. Teamwork is crucial in any great marriage, and our
              teamwork will provide your wedding with a streamlined experience from start
              to finish.
            </p>
            <br />
            <p>We look forward to getting to know you.</p>
            <h3><em>Austin + Emily</em></h3>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}