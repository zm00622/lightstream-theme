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
            <h1 className="subtopic">My Projects</h1>
            <p className="projects"><a href="https://zarymanning.com/" target="_blank">Alternative Portfolio (WordPress)</a></p>
            <p className="projects"><a href="https://zm00622.github.io/stock-tracker/" target="_blank">React Stock Market App (Utilizing API)</a></p>
            <p className="projects"><a href="https://www.riseoverlimits.com/" target="_blank">React Book Recommendation App</a></p>
            <p className="projects"><a href="https://funhoot.com/" target="_blank">Things to Do Website (WordPress)</a></p>
            <p className="projects"><a href="https://zm00622.github.io/react-challenges/" target="_blank">React Coding Challenges</a></p>
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
    