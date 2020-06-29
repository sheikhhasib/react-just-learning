import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

class Finddomnode extends Component {


    Changeimge(){
        let imageid = document.getElementById('imageid');
        var firstimage = document.getElementById('imageid').getAttribute('src');
        let image;
        if(firstimage == "https://i.pinimg.com/236x/c9/5e/c8/c95ec80454e1f33e2550638eec2b8c13.jpg"){
            image = "https://i.pinimg.com/236x/11/31/3f/11313fecee137002b09e3c0771c33b79.jpg";
        }else{
            image = "https://i.pinimg.com/236x/c9/5e/c8/c95ec80454e1f33e2550638eec2b8c13.jpg";
        }
        ReactDOM.findDOMNode(imageid).src=image; 
    }
    render() {
        return (
            <div>
                <button onClick={this.Changeimge} className="btn btn-outline-primary my-5">Change Image</button><br></br>
                <img id="imageid" src="https://i.pinimg.com/236x/c9/5e/c8/c95ec80454e1f33e2550638eec2b8c13.jpg"></img>
            </div>
        );
    }
}

export default Finddomnode;
