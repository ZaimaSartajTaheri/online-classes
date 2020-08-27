import React from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {title,image,price}=props.course;
    return (
        <div className="course">
            <div className="course-image">
                <img src={image} alt=""/>
            </div>
            <div className="course-details">
               <h1 className="text-primary">{title}</h1>
               <h3>Price: ${price}</h3>
               <button className="btn btn-outline-primary" onClick={()=>{props.handleAddCourse(props.course)}}><FontAwesomeIcon icon={faShoppingCart } />Add Friend</button>
            </div>
        </div>
    );
};

export default Course;