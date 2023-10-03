import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <Navbar />
          <div className="relative z-0 ">
          <Hero />  
        <About />
        <Tech />
          <Experience />
          <StarsCanvas />
        </div>
        
         <Feedbacks />
        <div className="relative z-0">
          <Works />
          
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
