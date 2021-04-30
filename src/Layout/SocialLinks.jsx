import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faVimeo } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <div className="social-links py-3">
      <a
        href="https://www.instagram.com/austinandemilycreative/"
        className="pr-3"
        title="Austin + Emily on Instagram"
        target="_blank" rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.facebook.com/austinandemilycreative/"
        className="px-3"
        title="Austin + Emily on Facebook"
        target="_blank" rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://vimeo.com/austinandemilycreative"
        className="px-3 mr-4"
        title="Austin + Emily on Vimeo"
        target="_blank" rel="noreferrer"
      >
        <FontAwesomeIcon icon={faVimeo} />
      </a>
    </div>
  )
}