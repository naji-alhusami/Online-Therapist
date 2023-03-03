import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Team from './components/Team/Team';
import Careers from './components/Careers/Careers';
// import Login from "./components/login/Login";
// import Signup from './Components/Signup';
// import Thankyoupage from './Components/blogs/Thankyoupage';
// import Blogarticle from './Components/blogs/Blogarticle';
// import UpdateUserInfo from './Components/UpdateUserInfo/UpdateUserInfo'
// import Profilepic from "./Components/UpdateUserInfo/Profilepic"
// import Bookingtem from './Components/booking/Bookingtem';
// import Bookingradio from './Components/booking/Bookingradio';
// import Note from "./Components/booking/Note"
// import Submit from './Components/booking/Submit';
// import Requestsubmit from './Components/booking/RequestSubmit';
// import Fotter from "./Components/fotter/Fotter"
// import ContactUs from './Components/contactus/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/login" element ={<Login/>}/> */}
        {/* <Route path="/signup" element ={<Signup/>}/>
        <Route path="/blog/:id" element={<Blogarticle/>}/>
        <Route path="/UpdateUserInfo" element={<UpdateUserInfo />}/>
        <Route path="/Profilepic" element={<Profilepic />}/>
       <Route path="/booking1/:id" element={<Bookingtem />}/>
        <Route path="/booking2/:id" element={<Bookingradio />}/>
        <Route path="/bookingnote" element={<Note />} />
        <Route path="/bookingsubmit" element={<Submit />} />
        <Route path="/Requestsubmit" element={<Requestsubmit />} />
         <Route path="/Thank-you" element={<Thankyoupage path="/Thank-you" header="Thank you!" text=" Your email has been added to the mailing list successfully!"/>}/>
         <Route path='/contactus' element={<ContactUs />}/> */}
      </Routes>
    </>
  );
}

export default App;
