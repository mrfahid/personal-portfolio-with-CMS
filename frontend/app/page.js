// import Image from "next/image";
import styles from "./page.module.css";
import './App.scss'
import {Navbar} from "./components";
import { About } from "./pages";


export default function Home() {
  return (
    <div className="app">
    <Navbar />
    <About />
    {/* <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer /> */}
  </div>
  );
}
