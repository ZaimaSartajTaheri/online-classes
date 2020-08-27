import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartCourse from '../Cart-course/CartCourse';

const Cart = (props) => {
    console.log(props.cart);
    let totalAmount=props.cart.reduce((totalAmount,course)=>{ 
        return totalAmount+course.price;
    },0);
    return (
        <div className="container">
            <h1 className="text-primary">Order Summary</h1>
            <h3>Added Courses:{props.cart.length}</h3>
            <h3>Total Amount: ${totalAmount}</h3>
            {
                props.cart.map(course=><CartCourse course={course}></CartCourse>)
            }
            
        </div>
    );
};

export default Cart;