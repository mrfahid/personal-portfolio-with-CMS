import React from 'react';
import { Navbar } from "./components";
import { About, Header, Work, Skills, Testimonial, Footer } from "./pages";
import './App.scss'; // Import the SCSS file
import { ThemeProvider } from './components/ThemeProvider';



export default function Home() {
  return (
    <div className="app">
       <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      </ThemeProvider>
    </div>

  );
}
