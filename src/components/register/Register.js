import React,{useState,useRef} from 'react';
import {toast} from 'react-toastify';
import {withRouter} from 'react-router-dom'; 
import { registerUser } from '../../services/useService';
import simpleReactValidator from 'simple-react-validator';
import {Sugar} from 'react-preloaders';
import { Helmet } from 'react-helmet';

const Register=({history})=>{
    const [fullname,setFullname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [policy,setPolicy]=useState();
    const [loading,setLoading]=useState(false);
    const [,forceUpdate]=useState();
    const validator=useRef(new simpleReactValidator({messages:{
        required:"پر کردن این فیلد الزامی است",
        min:"کمتر از 5 کلمه مجاز نیست",
        email:"ایمیل نوشته شده صحیح نمی باشد"

    },    element:message=><div style={{color:"red"}}>{message}</div>
}));


    const reset=()=>{
        setFullname("");
        setEmail("");
        setPassword("");
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const user={
            fullname,
            email,
            password
        }
       
        try{
            if(validator.current.allValid()){
                setLoading(true);
                const {status,data}=await registerUser(user);
                // const x=setTimeout(function(){
                console.log(data);
                if(status==200){

                toast.success("کاربر با موفقیت ساخته شد",{position:"top-center"});
                setLoading(false);
                history.push("/login");
                reset();}
                // }, 3000);
                
                // }
            }
            else{
                validator.current.showMessages();
                forceUpdate(1);
            }
        }
        catch{
            ;
            toast.error("مشکلی وجود دارد",{position:"top-center"});
            setLoading(false);
            reset();
        }
        
        // axios.post("http://localhost:81/toplearn/db.php",JSON.stringify(user),axiosConfig).then(({data,status})=>{toast.success("کاربر با موفقیت ساخته شد",{position:"top-center"});console.log(data);reset()}).catch((ex)=>{console.log(ex);});

        
    }

    return(
        <main className="client-page">
        <div className="container-content">

            <header><h2> عضویت در سایت </h2></header>
            <Helmet><title>
            تاپ لرن-عضویت کاربر
            </title></Helmet>
            {loading?(<Sugar color={'#fc03d7'} time={0} customLoading={loading}/>):null}

            <div className="form-layer">

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                        <input type="text" name="fullname" className="form-control" placeholder="نام و نام خانوادگی" aria-describedby="username" value={fullname} onChange={event=>{setFullname(event.target.value);validator.current.showMessageFor("fullname");}}/>
                    </div>

                    {validator.current.message("fullname",fullname,"required|min:5")}


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


                    <div className="accept-rules">
                        <label><input type="checkbox" value={policy} name="policy" onChange={event=>{setPolicy(event.target.checked);validator.current.showMessageFor("policy");}}/>  قوانین و مقررات سایت را میپذیرم </label>
                    </div>
                    {validator.current.message("policy",policy,"required")}


                    <div className="link">
                        <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                        <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                    </div>
                    
                    <button className="btn btn-success"> عضویت در سایت </button>

                </form>
            </div>

        </div>
    </main>
    );
}
export default withRouter(Register);