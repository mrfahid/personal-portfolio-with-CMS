// import Image from "next/image";
import styles from "./page.module.css";
import './App.scss'
import { Navbar} from "./components";
import { About, Header } from "./pages";


export default function Home() {
  return (
    <div className="app">
    <Navbar />
    <Header />
    <About />
    {/* 
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer /> */}
  </div>
  );
}
