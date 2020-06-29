import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Conditions1 extends Component{

    constructor(){
        super();
        this.state = {
            login: false
        }
    }

    changevalue (v){
        this.setState({login:v});
    }

    render(){
        // if(this.state.login == true){
        //     return (<button onClick={this.changevalue.bind(this,false)} class="btn btn-outline-primary">Log Out</button>);
        // }else{
        //     return (<button onClick={this.changevalue.bind(this,true)} class="btn btn-outline-warning">Log In</button>);
        // }

        return (
            this.state.login ? (<button onClick={this.changevalue.bind(this,false)} class="btn btn-outline-primary">Log Out</button>)
             : 
             (<button onClick={this.changevalue.bind(this,true)} class="btn btn-outline-warning">Log In</button>)
        );
    }
}

export default Conditions1;