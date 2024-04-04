import React from 'react';
import { Navbar } from "./components";
import { About, Header, Work, Skills, Testimonial, Footer } from "./pages";
import './App.scss'; // Import the SCSS file

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}
