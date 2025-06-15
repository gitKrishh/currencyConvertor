import { useState, useRef, useEffect, useId } from "react";
import './InputBox.css'


function InputBox({
    label,
    amount,
    onAmountChange,
    selectCurrency,
    onCurrencyChange,
    amountDisable,
    currencyOptions = []

}) {
    // console.log("InputBox rendered");


    return (
        <div id="mainInputBox">
            <div id="from">
                <label htmlFor="inputId">
                    {label}
                </label>
                <input
                    type="text"
                    id="inputId"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div id="chooseCurrency">
                <label htmlFor="choosecurr">Currency Type</label>
                <select
                    id="choosecurr"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option
                            value={currency}
                            key={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox