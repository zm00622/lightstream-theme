import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="col-home">
            <h1 className="subtopic">Contact Me</h1>
            <p className="contact-text">
            <h3><center>Email  :   zarymanning@gmail.com</center></h3>
            <h3><center>Phone   :   (912) 574-0033</center></h3>
            </p>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    