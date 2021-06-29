import './Intro.css';
import IntroImage from '../../assets/images/IntroImage.svg';

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__text" data-aos="fade-up" data-aos-duration="1000">
                <h3 >Hi There</h3>
                <h1>I'm John Doe</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="intro__image" data-aos="fade-down" data-aos-duration="1000">
                <img src={IntroImage} alt="" />
            </div>
        </div>
    );
}

export default Intro;