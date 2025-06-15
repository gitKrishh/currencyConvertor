import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [converted, setconverted] = useState(0)
  const currencyOptions = useCurrencyInfo(from)
  const option = Object.keys(currencyOptions)

  const convert = () => {
    setconverted(amount * currencyOptions[to])
  }

  return (
    <>
    
      <div id="background">
        <h1 id='heading'>Currency Converter</h1>
      <InputBox
      label = "From"
      amount = {amount}
      onAmountChange={(amount)=> setamount(amount)}
      selectCurrency={from}
      onCurrencyChange={(currency)=> setfrom(currency)}
      currencyOptions={option}
      />
      
      
      <InputBox
      label = "To"
      amount = {converted}
      selectCurrency={to}
      onCurrencyChange={(currency)=> setto(currency)}
      currencyOptions={option}
      />

      <button 
      id="convert"
      onClick={convert}

      >
        Convert

      </button>

      </div>
    </>
  )
}

export default App
