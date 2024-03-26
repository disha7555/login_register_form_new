import React from 'react';
import './register1.css';
function Register(props){
    const[text3,setText3]=React.useState();
    const[text6,setText6]=React.useState();
    const[text4,setText4]=React.useState();
     const[text5,setText5]=React.useState();
     const[userName,setsetUserName]=React.useState();
     const[password,setPassword]=React.useState();
    const handleChange3=(e)=>{
      console.log(e.target.value);
      setText3(e.target.value);
    }
    
    const handleChange4=(e)=>{
      console.log(e.target.value);
      setText4(e.target.value);
    }
   
    const handleChange5=(e)=>{
      console.log(e.target.value);
      setText5(e.target.value);
    }
    
    const handleChange6=(e)=>{
      console.log(e.target.value);
      setText6(e.target.value);
    }
    const handleButtonClickLogin=()=>{
        
            props.isLogin();        
      }
      const handleButtonClickSubmit=()=>{
        localStorage.setItem('Username',text4);
        localStorage.setItem('Password',text5);
        if(text4===text6)
        {
            alert("password and confirm password is not same");
        }
  }

  const formcontent_style={

    height:'7vw',width:'35vw',marginLeft:'8vw',marginTop:'5vw'
  };
  const mediaQueryStyle1={
    width:"700vw",
    margin:"0vw",
    justifyContent:"center"
  }
  const contentstyle={
    height:'15vw',width:'35vw',marginLeft:'20vw'
  }
  const mediaQueryStyle2={
    width:"700vw",
    margin:"0vw",
    justifyContent:"center"
  }
  const formstyle={
    width:'40vw',border:'5px solid white',padding:'1vw',justifyContent:'center',alignItems:'center',borderRadius:'10px',boxShadow:'inset'
  };
  const mediaQueryStyle3={
    width:"90vw",
    justifyContent:"center",
    textAlign:"center",
    marginLeft:"5vw",
    marginTop:"5vw"
    
  }
  const mediaQueryrow={
    marginLeft:"4px",
    marginRight:"4px"
  }
  const mediaQuerycol={
    paddingLeft:"0"
  }
    return(
        <>
        <div class="content"  style={{...contentstyle, ...(window.innerWidth <= 800 && mediaQueryStyle2)}}>
        <div class="form_content" style={{ ...formcontent_style, ...(window.innerWidth <= 800 && mediaQueryStyle1)}}>
                    
                
                    <form class="form-floating" style={{...formstyle, ...(window.innerWidth <= 800 && mediaQueryStyle3)}}>
                        <div class="title1" style={{textAlign:'center',fontSize:'2.5vw',position:"relative"}}>
                            Registration
                        </div>
                        <div class="row" id="row1" style={{...(window.innerWidth <= 800 && mediaQueryrow)}} >
                            
                            <div class="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                                <div class="form-floating">
                                <input type="text"  className="form-control form-control1" id="full_name" placeholder="Full name" onChange={(e)=>handleChange3(e)}/>
                                <label for="full_name">Full Name</label>
                                </div>
                            </div>
                        <div class="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                            <div class="form-floating">
                            <input type="text"  className="form-control form-control1" id="u_name"  placeholder="User Name" onChange={(e)=>handleChange4(e)}/>
                            <label for="u_name">User Name</label>
                            </div>
                        </div>
                        <div class="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                            <div class="form-floating">
                            <input type="email"  className="form-control form-control1" id="email"  placeholder="Email"/>
                            <label for="email">Email</label>
                            </div>
                        </div>
                    
                    

                        <div class="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                            <div class="form-floating">
                            <input type="text"  className="form-control form-control1" id="p_number"  placeholder="Phone number"/>
                            <label for="p_number">Phone Number</label>
                            </div>
                        </div>

                        <div class="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                            <div class="form-floating">
                            <input type="password"  className="form-control form-control1" id="p"  placeholder="Password" onChange={(e)=>handleChange5(e)}/>
                            <label for="p">Password</label>
                            </div>
                        </div>
                        <div class="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                            <div class="form-floating">
                            <input type="password"  className="form-control form-control1" id="cp"  placeholder="Confirm password" onChange={(e)=>handleChange6(e)}/>
                            <label for="cp">Confirm Password</label>
                            </div>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="sub_button">
                            <input type="submit"  className="form-control form-control1" id="submit" onClick={()=>handleButtonClickSubmit()}/>
                            <label for="submit"></label>
                        </div>
                        </div>
                        <div class="row" id="button_l"><span>Already registered, then: </span><button type="button" name="login_button1" id="login_button1" className="form-control form-control1" onClick={()=>handleButtonClickLogin()}>Login</button></div>

                </form>
                                
            
        </div>
    </div>

        </>
    );
}
export default Register;