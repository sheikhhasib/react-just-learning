import React, { Component } from 'react';

class Text extends Component {


    constructor(){
        super();
        this.state = {
            desc : "",
        }
    }
    onChangeTextarea=(event)=>{
        // let desc = event.target.name;
        let textvalue = event.target.value;
        this.setState({desc:textvalue})
    }
    render() {
        return (
            <div>
                <textarea name="desc" placeholder="please insert your message" onChange={this.onChangeTextarea}/>
                <p>{this.state.desc}</p>
            </div>
        );
    }
}

export default Text;
