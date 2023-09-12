// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {

  const [curr2, setCurr1] = useState(0)
  const [amount, setAmount] = useState(0)

  const curr1 = curr2/amount;

  useEffect(function () {

    async function() {
      try {
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${curr1}&to=${curr2}`);

        if(!res.ok)
        throw new Error('Something went wrong with fetching currencies')

        const data = await res.json()

        set
      } catch (err) {
        console.log(err.message)
      }
    }
  }, []);

  return (
    <div>
      <input type="text" />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
