import React, { useEffect, useState } from "react";
import { Container, FormGroup,Button } from "reactstrap";

const AddCourase=()=>{
    useEffect(()=>{
        document.title = "Add Course || Learnjava"
    },[]);
    const[course,setCourse] = useState({});
    //form handler function
    const handelform = (e) =>
    {
        e.preventDefault();  
    }
return(
    <div>
        <h1 className="text-center my-3">Fill Course details</h1>
        <form onSubmit={handelform}>
            <FormGroup>
                <label for="userid">Course id</label>
                <input type="text" placeholder="Enter here" name="userid" id="userid"
                onChange={(e)=>{
                    setCourse({ ...course,id:e.target.value});
                }}
                />
            </FormGroup>
            <FormGroup>
                <label for="title">Course Title</label>
                <input type="text" placeholder="Enter here" name="title" id="title"
                onChange={(e)=>{
                    setCourse({ ...course,title:e.target.value});
                }}
                />
            </FormGroup>
            <FormGroup>
                <label for="description">Course description</label>
                <input type="textarea" 
                placeholder="Enter description here" 
                name="description" 
                id="description" 
                style={{height:150}}
                onChange={(e)=>{
                    setCourse({ ...course,description:e.target.value});
                }}
                />
                
            </FormGroup>
            <Container>
            <Button type="submit" color="success">Add Course</Button>
            <Button color="warning">Clear</Button>
            </Container>
        </form>
    </div>
);
};

export default AddCourase;