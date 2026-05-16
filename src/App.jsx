import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Archive from './components/Archive';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Manifesto />
      <Archive />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;
