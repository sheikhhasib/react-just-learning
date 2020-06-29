import React, { Component } from 'react';


class Signup extends Component {

    constructor(){
        super();
        this.state = {
            fname : " ",
            lname : " ",
            email : " ",
            mobile : " ",
            roll : " "

        }
    }
    onChangeHandler=(event)=>{
        let inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({[inputName]:inputValue});

        //first name section
        if(inputName === "fname"){
            let namePettern = /^([a-zA-Z]){2,30}$/;
            if(!namePettern.test(inputValue)){
                this.setState({fname:"first name is not valid"});
            }
        }
        //second section 
        if(inputName === "lname"){
            let namePettern = /^([a-zA-Z]){2,30}$/;
            if(!namePettern.test(inputValue)){
                this.setState({lname:"first name is not valid"});
            }
        }
        //validation for email
        if(inputName === "email"){
            let namePettern = /\S+@\S+\.\S+/;
            if(!namePettern.test(inputValue)){
                this.setState({email:"email is not  valid"});
            }
        }

        if(inputName === "mobile"){
            if(!Number(inputValue)){
                this.setState({mobile:"mobile number is not valid"});
            }
        }

        if(inputName === "roll"){
            if(!Number(inputValue)){
                this.setState({roll:"Roll number is not valid"});
            }
        }
    }
    
    render() {
        return (
            <div className="mt-5">
                <form className="m-auto col-md-5">
                    <input type="text" onChange={this.onChangeHandler} className="form-control" name="fname" placeholder="Enter your first name"></input><br></br>
                    <input type="text" onChange={this.onChangeHandler} className="form-control" name="lname" placeholder="Enter your last name"></input><br></br>
                    <input type="text" onChange={this.onChangeHandler} className="form-control" name="email" placeholder="Enter your email address"></input><br></br>
                    <input type="text" onChange={this.onChangeHandler} className="form-control" name="mobile" placeholder="Enter your mobile number"></input><br></br>
                    <input type="text" onChange={this.onChangeHandler} className="form-control" name="roll" placeholder="Enter your roll"></input><br></br>
                    <input type="button" class="btn btn-primary mb-2" name="submit" value="Save now"></input><br></br>
                </form>


                <div className="col-md-5 m-auto">
                    <div className="card">
                        <div className="card-body text-left">
                            <h5 className="card-title">User info</h5>
                            <h6> My first name is {this.state.fname}</h6>
                            <h6>My last name is {this.state.lname}</h6>
                            <h6>My email address is {this.state.email}</h6>
                            <h6>My phone number is {this.state.mobile}</h6>
                            <h6>My roll number is {this.state.roll}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
