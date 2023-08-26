import React,{useEffect, useState} from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "../api/bookapi";
import axios from "axios";
import { toast } from "react-toastify";
const Allcourses=()=>{
    useEffect(()=>{document.title="all courses"},[]);
    //function to call server
    const getAllCoursesfromServer = () =>{axios.get(`${base_url}/courses`).then(
        (Response)=>{
            //sucess
            // console.log(Response)
            console.log(Response.data);
            toast.success("course has been loaded",{position:"bottom-center",})
            setCourses(Response.data);
        },
        (Error) => {
            //for error
            console.log(Error);
            toast.error("something went wrong",{position:"bottom-center",})
        }
    );
}; 

    //calling loading course function
    useEffect(()=>{
        getAllCoursesfromServer();
    })
    const[courses,setCourses]=useState([
       
    ])
    return(
        <div>
            <Button onClick={()=>{console.log("testing");
            setCourses([...courses,{title:"Angular Course", description: "this is demo course" },]);

            }}>test</Button>
            <h1>All course</h1>
            <p>List of courses are fallows</p>
            {
                courses.length>0
                ? courses.map((item)=>
                    <Course course={item}/>
                ):"No Courses"
            }
        </div>
        
    )
};

export default Allcourses;