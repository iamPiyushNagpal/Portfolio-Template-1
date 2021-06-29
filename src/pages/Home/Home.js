import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';
import Project from '../../components/Project/Project';
import ProjectImage from '../../assets/images/ProjectImage.jpg';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="sections">
                <Intro />
                <div id="projects" className="projects">
                    <div className="projects__heading">
                        <h1>Projects</h1>
                    </div>
                    <div className="projects__cards">
                        <Project image={ProjectImage} projectTitle="Heading" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                        <Project image={ProjectImage} projectTitle="Heading" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                        <Project image={ProjectImage} projectTitle="Heading" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                        <Project image={ProjectImage} projectTitle="Heading" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                        <Project image={ProjectImage} projectTitle="Heading" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                        <Project image={ProjectImage} projectTitle="Heading" projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    );
}

export default Home;