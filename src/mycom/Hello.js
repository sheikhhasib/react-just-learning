import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Hello extends Component {

    constructor(){
        super();
        this.state = {
            name : "hasib",
        }
    }
    ChangeName(a){
        this.setState({name:a});
    }
    render(){
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.ChangeName.bind(this,"tutul")} class="btn btn-outline-warning">Change value</button>
        </div>
    }
}

export default Hello;