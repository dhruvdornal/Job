import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
  return (
    <div>
      {/* <Typography sx={{ margin:"5%" }} variant="h3" align="center">
        Get Hired or Hire people for free!
      </Typography> */}
      <h1 class="line-1 anim-typewriter">Get Hired or Hire people for free!</h1>
      <div>
        <ul className="ul">
          <li>
          <Link to="/employer/dashboard"><button class="buttonnn">
  <span class="label">Hire A Talent</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
</button></Link>
          </li>
          <br/>
          <li>
          <Link to="/employee/feed"><button class="buttonnn">
  <span class="label">Get A Job now!!</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
