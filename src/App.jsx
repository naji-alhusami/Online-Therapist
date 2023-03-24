import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import BlogsArticle from './components/Blogs/BlogsArticle';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Thankyoupage from './components/ThankYou';
// import UpdateUserInfo from './Components/UpdateUserInfo/UpdateUserInfo'
// import Profilepic from "./Components/UpdateUserInfo/Profilepic"
// import Bookingtem from './Components/booking/Bookingtem';
// import Bookingradio from './Components/booking/Bookingradio';
// import Note from "./Components/booking/Note"
// import Submit from './Components/booking/Submit';
// import Requestsubmit from './Components/booking/RequestSubmit';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogsArticle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Thank-you" element={<Thankyoupage path="/Thank-you" header="Thank you!" text=" Your email has been added to the mailing list successfully!"/>}/>
        {/* <Route path="/UpdateUserInfo" element={<UpdateUserInfo />}/>
        <Route path="/Profilepic" element={<Profilepic />}/>
       <Route path="/booking1/:id" element={<Bookingtem />}/>
        <Route path="/booking2/:id" element={<Bookingradio />}/>
        <Route path="/bookingnote" element={<Note />} />
        <Route path="/bookingsubmit" element={<Submit />} />
        <Route path="/Requestsubmit" element={<Requestsubmit />} />
          */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
