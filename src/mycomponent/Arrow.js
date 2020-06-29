import React from 'react';

const Alertme = (a) =>{
    alert(a);
}

const Arrow = (props)=>{
    return (
    <button onClick={Alertme.bind(this,'this is arrow function')} className="btn btn-outline-primary">{props.name}</button>
    );
}

export default Arrow;