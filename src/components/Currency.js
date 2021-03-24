  
import React from 'react'

export default function Conn(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    // style={{ display: "none" }}
    <>
     <input style={{ display: "none" }} type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
       
        <option value={currencyOptions[27]}>{currencyOptions[27]}</option>
        <option value={currencyOptions[16]}>{currencyOptions[16]}</option>
        <option value={currencyOptions[1]}>{currencyOptions[1]}</option>
        <option value={currencyOptions[30]}>{currencyOptions[30]}</option>
        <option value={currencyOptions[0]}>{currencyOptions[0]}</option>
            
      </select>
    </>
  )
}