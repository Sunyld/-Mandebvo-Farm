import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Operations } from './sections/Operations';
import { Social } from './sections/Social';
import { Gallery } from './sections/Gallery';
import { Plans } from './sections/Plans';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Operations />
        <Social />
        <Gallery />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
