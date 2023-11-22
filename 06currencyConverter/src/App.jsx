import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import { useState } from "react"

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onCurrenycChange={(currency) => setAmount(currency)}
                currenyOptions={options}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrenycChange={(currency) => setTo(currency)}
                currenyOptions={options}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
