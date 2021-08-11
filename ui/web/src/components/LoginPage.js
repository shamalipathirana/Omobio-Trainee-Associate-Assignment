import React,{Component} from "react";
import './loginPage.css';
import axios from 'axios';

export default class Insert extends Component{
    constructor(props){
        super(props);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);   
        this.onSubmit=this.onSubmit.bind(this);
       

        this.state={
            email:'',
           password:'',
           error:'',
        }
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }

    
    
    onSubmit(e){
       e.preventDefault();
        const obj={
            email:this.state.email,
            password:this.state.password,
        };
        console.log(obj);
        axios.post("http://localhost/Omobio-Trainee-Associate-Assignment/bizlogic/login.php",obj)
    .then(res=>{
        console.log(res);
        console.log(res.status);
        if(res.status===201){

            window.sessionStorage.setItem("isLoggin","login");
            window.location.href="/home";

        }else if(res.status===200){
            this.setState({
                error:"Invalid email or password!"
            })
            
        }
     
    }).catch(
        {/* err=>{
             this.setState({
                 error:true
             });

        */}
    )
       
      {/* .catch(err=>alert(err));*/}
        
       
    }
    render(){
        return(
            <div className="login-body">
                <div className="login">
                    <div className="login-container">
                    <h1 className="title">Welcome Back</h1> 
            
                    <form onSubmit={this.onSubmit}>
            
                    <div className="form-group">
                        <label for="InputEmail" className="input-label">Email Address</label>
                        <input type="email" className="form-control" 
                        id="InputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter Your Email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword" className="input-label">Password</label>
                        <input type="password" className="form-control" 
                        id="InputPassword" 
                        placeholder="Enter Your Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}/>
                    </div>
                    { this.state.error? 
                    <p className="errormsg">{this.state.error}</p>:<div></div>
                    }
                    <button type="submit" className="login-button">Sign In</button>
                
                    </form>
           
                </div>
                </div>
            </div>
            
        
        )
    }
}