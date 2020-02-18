import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Navitem extends Component {
    render() {
                return (
                    <div class="col-nav-item">
                    <li id={this.props.item} class="nav-li">
                    <Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
                    </li>
                    </div>
                    )
            }
        }
        
        export default Navitem
        