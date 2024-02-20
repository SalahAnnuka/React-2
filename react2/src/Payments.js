import React from "react";
import './Payments.css';
import './Home.css'
class Payments extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Payments">
                <a href="#" className="submit" id="pay">Click to pay</a>
                <div className="balance">Balance Left: $<b id="balance">40</b></div>
            </div>
        );
    } 
}
export default Payments; 