import React,{useState} from "react";
import style from '../styles/phoneconf.module.css';
import { Link } from "react-router-dom";

export default function Phoneconf() {
    const [value, setValue] = useState();
    return (
        <div className={style.phoneConfContainer}>
            <h1>Enter your phone number</h1>
        </div>
    )
}