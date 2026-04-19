import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-darker min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Skills />
      <WorkExperience />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;