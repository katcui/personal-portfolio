import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => { console.log(data) })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
