 
import Footer from './components/Footer';
import './App.css';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
import Network from './components/Network';
import Plan from './components/Plan';
import User from './components/User';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <User />
       <Hero2 />
       <Plan />
       <Network />
    
      <Footer />

    </div>
  );
}

export default App;
