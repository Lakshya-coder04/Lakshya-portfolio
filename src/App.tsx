import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

export default function App() {
  return (
    <div className='min-h-screen bg-neutral-50 text-neutral-900 antialiased dark:bg-neutral-950 dark:transition-colors duration-300 dark:text-neutral-100'>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
