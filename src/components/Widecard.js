import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
            <div class="compdet">
            <center><h3>{this.props.title}</h3></center>
            <center><h4 class="secondtext">{this.props.where}</h4></center>
            <center><h4 class="secondtext">{this.props.gpa}</h4></center>
            <center><h4 class="secondtext">{this.props.from} - {this.props.to}</h4></center>
            </div>
            </div>
            )
        }
    }
    
export default Widecard
    