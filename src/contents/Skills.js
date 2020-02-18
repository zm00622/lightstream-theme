import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','REACT JS','GIT', 'WORDPRESS', 'PHOTOSHOP']
        };
    }

    render() {
        return (
            <div className="col-home">
            <h1 className="subtopic">My Skills</h1>
            <p className="about">
            {this.state.myskills.map((value)=>{
                return <p><center>{value}</center></p>
            })}
            </p>
            </div>
            )
        }
    }
    
    export default Skills


            // Original Skills list from the default theme

            // <ul>
            // {this.state.myskills.map((value)=>{
            //     return <li>{value}</li>
            // })}
            // </ul>
    