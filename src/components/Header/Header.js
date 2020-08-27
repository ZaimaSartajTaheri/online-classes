import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Online Learning Platform</h1>
            <br/>
            <form className="search-bar form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search Courses" aria-label="Search"/>
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
           </form>
        </div>
    );
};

export default Header;