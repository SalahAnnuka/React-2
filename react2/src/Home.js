import React from "react";
import './Home.css';


class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="home">
                <h1 className="title">Login</h1>
                <form className="login">
                    <input type="text" placeholder="Username" className="field"/>
                    <input type="password" placeholder="Password" className="field"/>
                    <a className="submit">Login</a>

                </form>
            </div>
        );
    } 
}
export default Home; 