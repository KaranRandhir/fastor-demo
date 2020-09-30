import React,{Component} from 'react'
import logo from '../../assets/logo.png'
import OtpInput from 'react-otp-input';
import './Otp.css'
 
export default class Otp extends Component {
  state = { otp: '' };
 
  handleChange = otp => {
    this.setState({ otp });
 
  } 
 
  render() {
    if(this.state.otp=="123456"){
        this.props.history.push("/home")
    }
      console.log(this.state.otp)
    return (

        <div>
             <div class="ui menu">
        <div class="header item">
         Otp
        </div>
        </div>
        <div className="otp">
        <img src={logo} style={{height:"20vh", width:"auto",marginTop:"3rem",marginBottom:"3rem"}}/>
        <div className="otp-text"style={{marginBottom:"3vh"}}>
            ENTER OTP
        </div>
        <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span> &nbsp;</span>}
        inputStyle={{borderBottom:" 1px solid #c4c4c4",
        borderTop:"0",
        borderLeft:"0",
        borderRight:"0",
        padding:"0.5rem",
        height:"2rem",
        width:"2rem"}}
       focusStyle={null}
       disabledStyle={null}
       isInputNum
    
      />
</div>
</div>

    );
  }
}
