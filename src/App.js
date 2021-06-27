import './App.css';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
      </div>
    </div>
  );
}

export default App;
