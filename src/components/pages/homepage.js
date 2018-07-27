import React, { Component } from 'react';
import { Container, } from 'reactstrap';

class Homepage extends Component{
  
    render() {
        return (

            <div className="wrap">


            <Container>
            <p>
            <h1>Register and create a valid account with us today!</h1>
            </p>
            <center>
            <img className="img1" src="/image/hobbies.jpg" alt=""/>
          
            </center>
            </Container>
            <center>
            <h2>About Us</h2>
            <p>
    At my hobbies we provide our customers with the insight and usefulness of numerous hobbies.
            </p>
            <h2>Contact Us</h2>
            <p>
    For more information,send an email to alexolajide197@gmail.com
            </p>
            </center>
            </div>
     );    
   }
}
export default Homepage;