import {FaGoogle, FaTwitter, FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-icons-container">
      <a
        href="mailto:prasanya.webdev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle className="footer-icon" />
      </a>
      <FaTwitter className="footer-icon" />
      <a
        href="https://github.com/PrasanyaPradeep"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="footer-icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/prasanya-shankar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="footer-icon" />
      </a>
    </div>
    <p className="contact-us-text">
      Developed by <span className="span-el">@prasanya pradeep</span>
    </p>
  </div>
)

export default Footer
