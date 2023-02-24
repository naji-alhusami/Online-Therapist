import React from 'react';
import { Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Login from "./components/login/Login";
// import Home from "./Components/Home/Home";
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
// import Team from './Components/about/Team';
// import About from './Components/about/About';
// import ContactUs from './Components/contactus/Contact';
// import Careers from './Components/about/Careers';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
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
         <Route path='/team' element={<Team />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/contactus' element={<ContactUs />}/>
         <Route path='/careers' element={<Careers />}/> */}
      </Routes>
    </>
  );
}

export default App;
