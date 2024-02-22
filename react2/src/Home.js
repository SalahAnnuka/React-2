import React from "react";
import './Home.css';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.formRef = React.createRef();
    }

    submit(){
        this.formRef.submit();
    }

    render(){
        return(
            <div className="Home">
                <h1 className="title">Login</h1>
                <form className="login" ref={this.formRef} >
                    <input required type="text" placeholder="Username" className="field"/>
                    <input required type="password" placeholder="Password" className="field"/>
                    <a onClick={this.submit} type="submit" className="submit" href="#">Login</a>
                </form>
            </div>
        );
    } 
}
export default Home; 