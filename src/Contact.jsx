import React,{useState} from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Contact=()=>{
    const[data,setdata]=useState({
        fullname:"",
        email:"",
        phone:"",
        message:"",

    });


    const changeevent=(event)=>{
        const {name,value}=event.target;
        setdata((prev)=>{
            return{
                ...prev,
                [name]: value,
            }
        })

    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`my Name is  ${data.fullname} My Mobile Number Is ${data.phone} `);
    }
    return(
        <>
        <div className="my-5 text-center">
            <h1 classname="font-weight-bold">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Full Name</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="fullname" value={data.fullname} onChange={changeevent}></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" name="email" value={data.email} onChange={changeevent}/>
                    </div>
                    
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" name="phone" value={data.phone} onChange={changeevent}/>
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Mesaages</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={changeevent}></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        
        )
}
export default Contact;
