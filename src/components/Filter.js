import { useState } from "react";
import { Button, Form, FormCheck } from "react-bootstrap";
//import { CartState } from "../context/Context";
import Rating from "./Rating";
import { CartState } from "../components/context/Context";


const Filter=()=>{
    const[rate,setRate]=useState(3);
    return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          />
          </span>
          <span>
            <FormCheck
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            />
          </span>
          <span>
            <FormCheck
            inline
            label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            />
          </span>
          <span>
            <FormCheck
            inline
            label="fast delivery only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            />
          </span>
          <span>
            <label style={{paddingRight1:10}}>Rating</label>
            <Rating rating={rate} 
            onClick={()=>setRate(i)} 
            style={{cursor:"pointer"}}/>

          </span>
          <Button variant="light">ClEAR fILTERS</Button>
          </div>
    );
};
          


export default Filter;