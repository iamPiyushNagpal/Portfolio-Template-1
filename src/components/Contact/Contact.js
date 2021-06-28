import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import ContactImage from '../../assets/images/Contact.svg'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="contact">
                <div className="contact__options">
                    <a href="#" target="_blank"><FontAwesomeIcon className="mail" icon={faEnvelope} /></a>
                    <a href="" target="_blank"><FontAwesomeIcon className="facebook" icon={faFacebook} /></a>
                    <a href="" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></a>
                    <a href="" target="_blank"><FontAwesomeIcon className="telegram" icon={faTelegram} /></a>
                    <a href="" target="_blank"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                </div>
                <div className="contact__image">
                    <img src={ContactImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Contact;