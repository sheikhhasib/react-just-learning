import React,{Component} from 'react';
class Welcome extends Component{

    constructor(){
        super();
        this.dis={
             name:"hasib",
             vill : "lalnagar",
             thana : "daulatpur",
             dist : {
                 dis1: 'kushtia',
                 dis2 : 'dhaka',
                 dis3 : ['1','2','3']
             }
        }
    }
    render(){
    return <div>
        <h1>My name is : {this.dis.name}</h1>
        <h1>My village name is {this.dis.vill}</h1>
        <h1>My thana name is {this.dis.thana}</h1>
        <h1>My district name is {this.dis.dist.dis3[0]}</h1>
    </div>
    }
}

export default Welcome;