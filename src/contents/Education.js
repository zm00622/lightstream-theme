import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="col-home">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Anthropology | B.A." where="Georgia Southern University" gpa="3.74 GPA | Magna Cum Laude" from="July 2013" to="December 2015"/>
            <Widecard title="Philosophy" where="College of Coastal Georgia" from="2011" to="2013"/>
            </div>
            )
        }
    }
    
export default Education
    