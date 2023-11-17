import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,

  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
 

} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative justify-center items-center text-slate-500 bg-slate-50 z-0 dark:bg-primary dark:text-white">
        
        <div >
          <Navbar />

          <Hero />
        </div>
        <About />

        <Tech />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
       
       <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
