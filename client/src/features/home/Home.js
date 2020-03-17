import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <br/><br/><br/><br/>
      <h1>Home Page</h1>
      <br/>
      <Link to="/agent-page">Agent page</Link>
    </div>
  );
}

export default Home;
