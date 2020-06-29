import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Rendom_dom extends Component {

    myFunc(){
        let container = document.getElementById('myid');
        let element = <h1>my name is sheikh</h1>
        let calback = function(){
            alert("this from calback");
        }
        // ReactDOM.hydrate(element,container,calback);
        ReactDOM.render(element,container,calback);

    }

    render() {
        return (
            <div>
                <button onClick = {this.myFunc}>Change this</button>
                <h3 id="myid">My name is hasib</h3>
            </div>
        );
    }
}

export default Rendom_dom;
