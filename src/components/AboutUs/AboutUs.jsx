
import "./AboutUs.css";
import { Outlet, Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="Links">
        <li>
          <Link to="sitehistory">... </Link>
        </li>
        <li>
          <Link to="sitemission"></Link>
        </li>
      </ul>
      <p>You can find out more information about our site here.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
