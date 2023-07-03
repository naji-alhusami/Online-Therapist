import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Requirements from './components/Requirements/Requirements';
import ErrorPart from './components/Home/ErrorPart';
import About from './components/About/About';
import Team from './components/Team/Team';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import BlogsArticle from './components/Blogs/BlogsArticle';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Thanks from './components/Thanks/Thanks';
import UpdateUserProfile from './components/UpdateUserProfile/UpdateUserProfile';
import SavedCards from './components/PaymentCards/SavedCards';
import AddCards from './components/PaymentCards/AddCards';
import PurchaseTickets from './components/PurchaseTickets/PurchaseTickets';
// import Profilepic from "./Components/UpdateUserInfo/Profilepic"
// import Bookingtem from './Components/booking/Bookingtem';
// import Bookingradio from './Components/booking/Bookingradio';
// import Note from "./Components/booking/Note"
// import Submit from './Components/booking/Submit';
// import Requestsubmit from './Components/booking/RequestSubmit';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Footer/Footer';
import { loadUser } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);

  useEffect(() => {
    const load = () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            loadUser({ uid: user.uid, emailVerified: user.emailVerified })
          );
        } else {
          dispatch(loadUser(null));
        }
      });
    };

    load();
  }, [dispatch]);

  if (loading) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{ minHeight: '100vh' }}
      >
        <ClipLoader
          color="#2DD3E3" // Customize the color of the spinner
          size={60} // Adjust the size of the spinner as desired
          loading={loading}
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/homeError" element={<ErrorPart />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogsArticle />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updateUserProfile" element={<UpdateUserProfile />} />
        <Route path="/savedCards" element={<SavedCards />} />
        <Route path="/addCards" element={<AddCards />} />
        <Route path="/purchaseTickets" element={<PurchaseTickets />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route element={<RequireAuth />} />

        {/* </Route> */}

        {/* <Route path="/Thank-you" element={<Thankyoupage path="/Thank-you" header="Thank you!" text=" Your email has been added to the mailing list successfully!"/>}/> */}
        {/* <Route path="/Profilepic" element={<Profilepic />}/>
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
