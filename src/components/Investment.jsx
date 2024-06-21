import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import "./Investment.css";

const  Investment = () => {
  return (
    <> <Navbar/>
    <div className='incontainer' >
    <Link to="/Equity" className="button-link">
      <button className='Equity'>Equity</button>
      </Link>
      <Link to="/Gold" className="button-link">
        <button className='Gold'>Gold</button>
      </Link>
    
    </div>
  </>
  );   
}

export default Investment;
