import React from 'react';
import { Navbar } from "./components";
import { About, Header, Work, Skills, Testimonial, Footer } from "./pages";
import './App.scss'; // Import the SCSS file
import { ThemeProvider } from './components/ThemeProvider';
import ChatInterface from './pages/ChatInterface/ChatInterface';



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
      <ChatInterface />
      <Footer />
      </ThemeProvider>
    </div>

  );
}
