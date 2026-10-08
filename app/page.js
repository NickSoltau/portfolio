'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useSyncExternalStore } from "react";


export default function Home() {

// The theme lives on <html>. The script in layout.js sets it before first
// paint, and React just reads it from there.
const isDarkMode = useSyncExternalStore(
  (onChange) => {
    const observer = new MutationObserver(onChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  },
  () => document.documentElement.classList.contains('dark'),
  () => false // what the server assumes
)

const toggleDarkMode = () => {
  const next = !isDarkMode
  document.documentElement.classList.toggle('dark', next)
  try {
    localStorage.theme = next ? 'dark' : 'light'
  } catch {}
}

  return (
    <>
    <Navbar isDarkMode= {isDarkMode} toggleDarkMode= {toggleDarkMode} />
    <Header isDarkMode= {isDarkMode} />
    <About isDarkMode= {isDarkMode} />
    <Work isDarkMode= {isDarkMode} />
    <Contact isDarkMode= {isDarkMode} />
    <Footer isDarkMode= {isDarkMode} />
    
    </>
  );
}
