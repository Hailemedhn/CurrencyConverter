import React from "react";
import "./Field.css";
import axios from "axios";

const Field = ({props}) =>{
    return(
        <div className="inputContainer">
        <select  onChange={props} >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="ETB">ETB</option>
        </select>
        <input type="number" onChange={props} />
        </div>
    )
}
export default Field;