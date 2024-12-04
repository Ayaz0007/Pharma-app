import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BestSellers } from './components/BestSellers';
import { MedicineCatalog } from './components/MedicineCatalog';
import { Products } from './components/Products';
import { Research } from './components/Research';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BestSellers />
      <MedicineCatalog />
      <Products />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;