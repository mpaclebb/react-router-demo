import {useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import "./App.css";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Review from "../Review/Review";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";


function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
   // Fetch the review data from the server. 
    fetch('https://api.nomoreparties.co/emoji-critic-ens').then((res) => {
      return res.json();
    }).then((data) => {
      // Pass the parsed response body to the setter function
      setReviews(data);
    })
    .catch(console.error);
    // component launces 
  },[]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews } />} />
        <Route path="/reviews/:reviewId" element={ <Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} >
          <Route path="sitehistory" element={<SiteHistory />} />
          <Route path="sitemission" element={<SiteMission />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
