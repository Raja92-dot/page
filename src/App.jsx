import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Gallery from "./Component/Gallery";
import Faq from "./Component/Faq";
import Login from "./Component/Login";
import Signup from "./Component/Signup";



function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header />
  
     <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
