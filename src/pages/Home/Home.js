import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Intro from '../../components/Intro/Intro';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="sections">
                <Intro />
            </div>
        </div>
    );
}

export default Home;