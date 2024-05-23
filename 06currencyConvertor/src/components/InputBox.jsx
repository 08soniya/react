import React, {useId} from 'react'

function InputBox({
    label,
    ammount,
    onAmountChange,
    onCurrencyChange,
    currentCurrency = 'usd',
    currencyOption = [],
    ammountDisable = false,
    currencyDisable = false
}) {
    const id = useId()
    return (
        <>
        <div className="grid gap-6 md:grid-cols-2 bg-white border border-gray-300 text-gray-500 text-sm font-medium rounded-lg p-2 my-2">
            <div>
                <label htmlFor={id} className="block mb-2 text-left">{label}</label>
                <input type="number" id={id} className="rounded-lg block w-full p-2.5" 
                value={ammount} 
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled={ammountDisable} 
                />
            </div>
            <div>
                <label htmlFor={id} className="block mb-2 text-left">Currency Type</label>
                <select id={id} className="bg-gray-100 rounded-lg block w-full p-2.5" 
                value={currentCurrency}
                disabled={currencyDisable} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
          </div>
          </>
        
    )
}

export default InputBox
