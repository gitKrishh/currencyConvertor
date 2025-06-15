import { useState,useRef, useEffect, useId } from "react";
import './InputBox.css'


function InputBox({
    label,
    amount,
    onAmountChange
    
}){
    // console.log("InputBox rendered");
    
    const inputId = useId();
    return(
    <div id="mainInputBox">
        <div id="from">
            <label htmlFor={inputId}>
                {label}
            </label>
            <input 
            type="text" 
            id={inputId}
            placeholder="Amount"
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
             />
        </div>
        <div id="chooseCurrency">
            <label htmlFor="choosecurr">Currency Type</label>
            <select id="selectInput"></select>
        </div>
    </div>
    )
}

export default InputBox