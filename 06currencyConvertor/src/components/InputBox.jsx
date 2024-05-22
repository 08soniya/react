import React from 'react'

function InputBox({
    label,
    ammount,
    onAmountChange,
    onCurrencyChange,
    currencyOption
}) {
    return (
        <>
        <div className="grid gap-6 md:grid-cols-2 bg-white border border-gray-300 text-gray-500 text-sm font-medium rounded-lg p-2 my-2">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-left">{label}</label>
                <input type="text" id="first_name" className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value="0" />
            </div>
            <div>
                <label htmlFor="first_name" className="block mb-2 text-left">Currency Type</label>
                <select id="countries" className="bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>usd</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
            </div>
          </div>
          </>
        
    )
}

InputBox.propTypes = {

}

export default InputBox
