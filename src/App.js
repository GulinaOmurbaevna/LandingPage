 
import './App.css';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
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
   

    </div>
  );
}

export default App;
