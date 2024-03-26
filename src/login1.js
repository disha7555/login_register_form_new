import React from 'react';
import './login.css';
function Login1(){
    const[text,setText]=React.useState();
    const[text2,setText2]=React.useState();

    const handleChange1=(e)=>{
      console.log(e.target.value);
      setText(e.target.value);
    }
    const handleChange2=(e)=>{
      console.log(e.target.value);
      setText2(e.target.value);
    }
    const handleButtonClickLoginSubmit=()=>{
        let username1=localStorage.getItem('Username');
        let password1=localStorage.getItem('Password');
        if(text===username1 && text2===password1)
        {
            alert("Login successful");
        }
        else{
            alert("login failed, please check your credentials");
        }
        
        
  }


  const formcontent_style={

    // height:'500px',width:'500px',marginLeft:'485px',marginTop:'200px'
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
    // border:'5px solid white',padding:'20px',justifyContent:'center',alignItems:'center',borderRadius:'10px',boxShadow:'inset'};
    width:'40vw',border:'5px solid white',padding:'1vw',justifyContent:'center',alignItems:'center',borderRadius:'10px',boxShadow:'inset'
  
}
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

 const mediaQueryinput={
    width:"100%"
 }
  
  return(
        <>
        <div className="content"  style={{...contentstyle, ...(window.innerWidth <= 800 && mediaQueryStyle2)}}>
        <div className="form_content" style={{ ...formcontent_style, ...(window.innerWidth <= 800 && mediaQueryStyle1)}}>
                    
                
                    <form className="form-floating" style={{...formstyle, ...(window.innerWidth <= 800 && mediaQueryStyle3)}}>
                        <div className="title1" style={{textAlign:'center',fontSize:'30px'}}>
                            Login
                        </div>
                        <div className="row" id="row1" style={{...(window.innerWidth <= 800 && mediaQueryrow)}}>
                            
                            
                        <div className="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                            <div className="form-floating">
                            <input type="text"  className="form-control form-control2" style={{...(window.innerWidth <= 800 && mediaQueryinput)}} id="u_name"  placeholder="User Name" onChange={(e)=>handleChange1(e)}/>
                            <label for="u_name">User Name</label>
                            </div>
                        </div>
                        </div>
                        <div className="row" id="row1" style={{...(window.innerWidth <= 800 && mediaQueryrow)}}>
                    

                       

                        <div className="col-md-5" style={{...(window.innerWidth <= 800 && mediaQuerycol)}}>
                            <div className="form-floating">
                            <input type="password"  className="form-control form-control2" style={{...(window.innerWidth <= 800 && mediaQueryinput)}} id="p"  placeholder="Password" onChange={(e)=>handleChange2(e)}/>
                            <label for="p">Password</label>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="row">
                        <div className="sub_button">
                            <input type="submit"  className="form-control form-control2" id="submit" onClick={()=>handleButtonClickLoginSubmit()}/>
                            <label for="submit"></label>
                        </div>
                        </div>
                        
                </form>
                
            
        </div>
    </div>

        </>
    );
}
export default Login1;