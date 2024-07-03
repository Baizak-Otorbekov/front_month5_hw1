import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Home=() =>{

  return (
    <div>
    <h1>Home</h1><br/>
    <Link to='/page1'>page1</Link> <br/><br/>
    <Link to='/page2'>page2</Link>
    </div>
  );
}
export default Home;
