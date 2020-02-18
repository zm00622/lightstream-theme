import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/MyPic.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="col-home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Zary Manning','Your next web developer!']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
export default Home
    