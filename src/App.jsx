import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import Signup from './Components/Signup';
import Thankyoupage from './Components/blogs/Thankyoupage';
import Blogarticle from './Components/blogs/Blogarticle';
import UpdateUserInfo from './Components/UpdateUserInfo/UpdateUserInfo'
import Profilepic from "./Components/UpdateUserInfo/Profilepic"
import Bookingtem from './Components/booking/Bookingtem';
import Bookingradio from './Components/booking/Bookingradio';
import Note from "./Components/booking/Note"
import Submit from './Components/booking/Submit';
import Requestsubmit from './Components/booking/RequestSubmit';
import Fotter from "./Components/fotter/Fotter"
import Team from './Components/about/Team';
import About from './Components/about/About';
import ContactUs from './Components/contactus/Contact';
import Careers from './Components/about/Careers';
import TherapistAccount from './Components/therapist/TherapistAccount';
import Requirement from "./Components/therapist/requirement"
import Navbar from "./Components/Home/NavBar/navbarresposive"

function App() {
  return (
    <BrowserRouter>
     
     <Navbar />
      <Routes>
        
        <Route path="/login" element ={<Login/>}/>
        <Route path="/" element ={<Home/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/blog/:id" element={<Blogarticle/>}/>
       <Route path="/UpdateUserInfo" element={<UpdateUserInfo />}/>
       <Route path="/Profilepic" element={<Profilepic />}/>
       <Route path="/booking1/:id" element={<Bookingtem />}/>
       <Route path="/booking2/:id" element={<Bookingradio />}/>
       <Route path="/bookingnote" element={<Note />} />
       <Route path="/bookingsubmit" element={<Submit />} />
       <Route path="/Requestsubmit" element={<Requestsubmit />} />        
       <Route path="/Thank-you" element={<Thankyoupage path="/Thank-you" header="Thank you!" text=" Your email has been added to the mailing list successfully!"/>}/>
       <Route path="/signup-thanks" element={<Thankyoupage path="/signup-thanks" header="Thank you!" text=" Your Sign Up request has been received, you will soon receive a confirmation email. Please follow the steps in the email to complete and activate your account."/>}/>
       <Route path="/contact-thanks" element={<Thankyoupage path="/contact-thanks" header="Thank you!" text="Your request has been sent, a member of the support team will get in contact with you through the email you provided as soon as possible."/>}/>
       <Route path="/therapist-thanks" element={<Thankyoupage path="/therapist-thanks" header="Thank you!" text="Thank you for your interest in working with Healing, we have recieved your application.You will receive an email guiding you for the next steps soon after your information is reviewed."/>}/>
       <Route path='/Requirement' element={<Requirement />}/>
        <Route path="/edit-thanks" element={<Thankyoupage path="/edit-thanks" header="Thank you!" text=" Request submitted, you will soon receive an email confirming your changes after they are reviewed."/>}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/careers' element={<Careers />}/>
        <Route path='/TherapistAccount' element={<TherapistAccount />}/>
      </Routes>

      <Fotter/> 

    </BrowserRouter>
  )

}

export default App;