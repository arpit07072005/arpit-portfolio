
import './App.css';
import { useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
const contactref = useRef(null);
const heroref = useRef(null);
const skillsref = useRef(null);
const projectref = useRef(null);

const scrolltotrigger = ()=>{
   contactref.current?.scrollIntoView({ behavior: 'smooth' });
}
const scrolltohero = ()=>{
   heroref.current?.scrollIntoView({ behavior: 'smooth' });
}
const scrolltoskills = ()=>{
   skillsref.current?.scrollIntoView({ behavior: 'smooth' });
}
const scrolltoproject = ()=>{
   projectref.current?.scrollIntoView({ behavior: 'smooth' });
}
  return (
   <>
   <Navbar scrolltoTrigger ={scrolltotrigger} scrolltoproject={scrolltoproject} scrolltoskills={scrolltoskills} scrolltohero={scrolltohero}/>
   <div ref={heroref}>
   <Hero/>
   </div>
   <div ref={skillsref}>
  <Skills/>
   </div>
   <div ref={projectref}>
<Projects/>
   </div>
<div ref={contactref}>
<Contact/>
</div>
   </>
  );
}

export default App;
