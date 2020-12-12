import React,{useState,useRef} from 'react';
import {withRouter} from 'react-router-dom';
import {toast} from 'react-toastify';
import { loginUser } from '../../services/useService';
import simpleReactValidator from 'simple-react-validator';
import {Sugar} from 'react-preloaders';
import { Helmet } from 'react-helmet';


const Login=({history})=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [,forceUpdate]=useState();
    const validator=useRef(new simpleReactValidator({messages:{
        required:"پر کردن این فیلد الزامی است",
        min:"کمتر از 5 کلمه مجاز نیست",
        email:"ایمیل نوشته شده صحیح نمی باشد"

    },    element:message=><div style={{color:"red"}}>{message}</div>
}));
    
    const reset=()=>{
        setEmail("");
        setPassword("");
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const user={
            email,
            password
        }
      
        try{
            if(validator.current.allValid()){
                setLoading(true);
                const {status,data}=await loginUser(user);
                console.log(data);
                if(status==200){
                toast.success("کاربر با موفقیت وارد شد",{position:"top-center"});
                 setLoading(false);
                 history.push("/");
                reset();}
                else{
                    validator.current.showMessages();
                    forceUpdate(1);
                }
                }
            
        }
        catch{
            
            toast.error("مشکلی وجود دارد",{position:"top-center"});
            setLoading(false);

            reset();
            
        }
        
        // axios.post("http://localhost:81/toplearn/db.php",JSON.stringify(user),axiosConfig).then(({data,status})=>{toast.success("کاربر با موفقیت ساخته شد",{position:"top-center"});console.log(data);reset()}).catch((ex)=>{console.log(ex);});

        
    }
    return(
    <main className="client-page">
        <div className="container-content">

            <header><h2> ورود به سایت </h2></header>
            <Helmet><title>
            تاپ لرن-ورود کاربر
            </title></Helmet>
            {loading?(<Sugar color={'#fc03d7'} time={0} customLoading={loading}/>):null}
            


            <div className="form-layer">

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                        <input type="text" name="email" className="form-control" placeholder="ایمیل" aria-describedby="email-address" value={email} onChange={event=>{setEmail(event.target.value);validator.current.showMessageFor("email");}}/>
                    </div>
                    {validator.current.message("email",email,"required|email")}

                    <div className="input-group">
                        <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                        <input type="password" name="password" className="form-control" placeholder="رمز عبور " aria-describedby="password" value={password} onChange={event=>{setPassword(event.target.value);validator.current.showMessageFor("password");}}/>
                    </div>
                    {validator.current.message("password",password,"required|min:5")}


                    <div className="remember-me">
                        <label><input type="checkbox" name=""/>  مرا بخاطر بسپار </label>
                    </div>

                    <div className="link">
                        <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                        <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                    </div>
                    
                    <button className="btn btn-success"> ورود به سایت </button>

                </form>
            </div>

        </div>
    </main>
    );
}
export default withRouter(Login);