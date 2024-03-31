import { Navbar } from "./components";
import './App.scss'
import { About, Header, Work } from "./pages";

export default function Home() {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    {/* 
    <About />
    <Skills />
    <Testimonial />
    <Footer /> */}
  </div>
  );
}
