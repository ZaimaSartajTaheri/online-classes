import React from 'react';

const CartCourse = (props) => {
    console.log(props.course)
    const {title,image,price}=props.course;
    return (
        <div className="course">
            <div className="course-image">
                <img src={image} alt=""/>
            </div>
            <div className="course-details">
               <h1 className="text-primary">{title}</h1>
               <h3>Price: ${price}</h3>
            </div>
        </div>
            
        
    );
};

export default CartCourse;