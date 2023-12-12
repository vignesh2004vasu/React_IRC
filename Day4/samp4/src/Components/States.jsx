import { useState,useEffect } from "react";
import Navbar from "./Navbar";

function States()
{
const[visible,setVisible]=useState(true);

const[data,setData]=useState({

    username:'',
    password:''

})

const HandleChange =(e)=>{

    setData({...data,[e.target.id]:e.target.value})
}

const Login=(e)=>{
    e.preventDefault();
        alert(data.username +" "+data.password)
}



    return(

      
    )
}

export default States;