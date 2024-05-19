import React from 'react';
import { Navbar } from "./components";
import { About, Header, Work, Skills, Testimonial, Footer } from "./pages";
import './App.scss';
import { ThemeProvider } from 'next-themes';
import ChatInterface from './pages/ChatInterface/ChatInterface';

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <ChatInterface />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
