import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bgimage from "../assets/02.png";
import collegelogo from "../assets/collegelogo.png"



function Home() {

    const navigate = useNavigate();

    const studentHandler = () => {
        navigate('/studentLoginPage');
    }

    const adminHandler = () => {
        navigate('/adminLoginPage');
    }

    const facultyHandler = () => {
        navigate('/facultyLoginPage');
    }

    const myStyle = {
        backgroundImage: `url(${bgimage})`,

    };

    return (
        <div className="relative w-full h-screen   ">
            <div style={myStyle} className="bg-cover  bg-center h-screen blur-sm absolute -z-10 w-full overflow-hidden  " > </div>
            <img src={collegelogo} className="absolute top-6 right-6 size-20 rounded-md"></img>
            <div className=" absolute top-0 right-0 bottom-0 left-0  flex flex-col justify-center items-center ">

                <h2 className="bg-yellow-400 flex text-center text-[30px] mt-2 mx-3 px-5 py-3 font-semibold rounded-md">  Indian Institute  of Engineering Science And Technology,Shibpur</h2>

                <h1 className="bg-blue-950 text-center text-[60px] font-semibold mt-20 mx-3 px-5 py-3 text-white rounded-md">STUDENT FEEDBACK SYSTEM</h1>
                <p className="text-white text-[25px] mt-5  ">Login As</p>
                <div className="flex w-4/12 justify-between  mt-5 mx-auto">
                    <button className="bg-yellow-400 text-center text-black  font-semibold rounded-3xl py-2 px-3 text-[35px] hover:bg-yellow-500 hover:text-blue-800 transition-all duration-300 " onClick={studentHandler}>Student</button>
                    <button className="bg-yellow-400 text-center text-black  font-semibold rounded-3xl py-2 px-3 text-[35px]  hover:bg-yellow-500 hover:text-blue-800 transition-all duration-300 " onClick={adminHandler}>Admin</button>
                    <button className="bg-yellow-400 text-center text-black  font-semibold rounded-3xl py-2 px-3 text-[35px]  hover:bg-yellow-500 hover:text-blue-800 transition-all duration-300 " onClick={facultyHandler}>Faculty</button>
                </div>
            </div>
        </div >
    )
}
export default Home;