import React from 'react';
import courses from '../../fakeData';
import Course from '../Course/Course';
import './Courses.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [cart,setCart]=useState([]);
    
    const handleAddCourse=(course)=>{
       const newCart=[...cart,course];
       setCart(newCart);
    }
    return (
        <div className="courses container">
            <div className="course-container">
                {
                    courses.map(course=><Course handleAddCourse={handleAddCourse} course={course} key={course.title}></Course>)

                }
            </div>
            <div className="cart mt-5">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Courses;