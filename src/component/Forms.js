import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';


class Forms extends Component {

    constructor(){
        super();
        this.state = {
            name : "",
        }
    }

    onChange =(event)=>{
        let newname = event.target.value;
        this.setState({name:newname})
    }

    onSubmit = ()=>{
        alert(this.state.name);
    }
    render() {
        return (
            <div>
                <form className="mt-5" onSubmit={this.onSubmit}>
                    <p>My new forms</p>
                    <p>{this.state.name}</p>
                    <input type="text" onChange={this.onChange} placeholder="enter your name"></input>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Forms;
