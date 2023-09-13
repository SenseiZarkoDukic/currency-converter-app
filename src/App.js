// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  // const [currencies, setCurrencies] = useState([]);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("USD");
  // const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCurrencies() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${curr1}&to=${curr2}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching currencies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Currency not found");
          curr2 === "USD" && setOutput(data.rates.USD);
          curr2 === "EUR" && setOutput(data.rates.EUR);
          curr2 === "CAD" && setOutput(data.rates.CAD);
          curr2 === "INR" && setOutput(data.rates.INR);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
          }
          console.log(err.message);
        }
      }

      if (curr1 === curr2) return;
      fetchCurrencies();

      return function () {
        controller.abort();
      };
    },
    [amount, curr1, curr2]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select onChange={(e) => setCurr1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setCurr2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
