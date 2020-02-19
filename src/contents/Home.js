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
            <p className="themes">
                <a href="https://zm00622.github.io/creative-theme/">| Default Creative Theme |</a>
                <a href="https://zm00622.github.io/canyon-theme/"> Canyon Theme |</a>
                <a href="https://zm00622.github.io/cartoon-theme/"> Cartoon Theme |</a>
                <a href="https://zm00622.github.io/ink-theme/"> Ink Theme |</a>
                <a href="https://zm00622.github.io/lightstream-theme/"> Lightstream Theme |</a>
                <a href="https://zm00622.github.io/dark-green-theme/"> Dark Green Theme |</a>
                <a href="https://zm00622.github.io/geometric-theme/"> Geometric Theme |</a>
            </p>
            </div>
            )
        }
    }
    
export default Home
    