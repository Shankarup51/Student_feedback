import React from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimage from "../assets/02.png";

function AdminLoginPage(){
    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    
    }
    const myStyle = {
            backgroundImage: `url(${bgimage})`,
    
        };
    

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
        navigate("/admindashboard")
    }

    return(<div className="relative w-full h-screen  ">
        <div style={myStyle} className="bg-cover  bg-center h-screen blur-sm absolute -z-10 w-full overflow-hidden top-0 left-0 right-0 bottom-0 "> </div>
        <div className=" absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 h-full">
             <form onSubmit={submitHandler} className="flex flex-col justify-center items-center w-6/12 border border-white rounded-md p-5 shadow-xl shadow-black h-auto">
         <h1 className="text-black bg-yellow-400 text-center text-[30px] py-2 px-3 rounded-md mb-2 font-semibold ">
            Admin Login Page
            </h1>
            <label className="text-zink-500 flex flex-col justify-center items-center text-[20px] w-full">Admin Email-id :
                <input
                className="border rounded-lg border-yellow-400 text-center  hover:border-yellow-500 hover:border-[3px] mt-2"
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter Email-id"
                />
            </label>

        <label className="text-zink-500 flex flex-col justify-center items-center text-[20px] w-full relative"  >Admin Password :
            <input
            className="border rounded-lg border-yellow-400  hover:border-yellow-500 hover:border-[3px] mt-2 transition-all duration-300 ease-in-out text-center"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"

            />

            
             <p className="text-zink-500 flex flex-col justify-center items-center text-[20px] absolute top-11 right-[300px]" onClick={()=>setShowPassword(!showPassword)}>
                {
                    showPassword ? <IoIosEye/> : <IoIosEyeOff />
                }
            </p>
            </label>

            <button className="bg-indigo-500 text-center text-[30px] font-semibold px-3 w-4/12 mt-4 rounded-xl text-white py-2 hover:bg-indigo-600 transition-all duration-300 ease-in-out border-white border-2 hover:border-indigo-600 shadow-lg shadow-black" 
               
            >Login</button>
           
       </form>
       <p className="text-zink-500 text-[20px] mt-5 text-white" >or</p>

            <button className="w-6/12 border border-white rounded-md p-5 shadow-xl shadow-black h-auto mt-3 text-center bg-red-500 text-[30px]" onClick={()=>{navigate("/") }} >Goto Home Page</button>
      
        </div>
    </div>)
}
export default AdminLoginPage;