// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  // const [currencies, setCurrencies] = useState([]);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  useEffect(
    function () {
      //     const controller = new AbortController();

      async function fetchCurrencies() {
        // try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        //           { signal: controller.signal }
        //         );
        //         if (!res.ok)
        //           throw new Error("Something went wrong with fetching currencies");

        const data = await res.json();
        setConverted(data.rates[toCur]);
        //         if (data.Response === "False") throw new Error("Currency not found");
        //         curr2 === "USD" && setOutput(data.rates.USD);
        //         curr2 === "EUR" && setOutput(data.rates.EUR);
        //         curr2 === "CAD" && setOutput(data.rates.CAD);
        //         curr2 === "INR" && setOutput(data.rates.INR);
        //       } catch (err) {
        //         if (err.name !== "AbortError") {
        //           console.log(err.message);
        //         }
        //         console.log(err.message);
        //       }
      }

      if (fromCur === toCur) return setConverted(amount);
      fetchCurrencies();

      //     return function () {
      //       controller.abort();
      //     };
    },
    [amount, fromCur, toCur]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}
