import React, { useEffect, useState } from "react";

const BitcoinPriceApp = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        if (!response.ok) {
          throw new Error("Failed to fetch bitcoin price");
        }
        const data = await response.json();
        setBitcoinPrice(data.bpi.USD.rate);
      } catch (error) {
        console.error("Error fetching bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();

    const intervalId = setInterval(fetchBitcoinPrice, 60000); // Обновление цены каждую минуту

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Bitcoin Price</h1>
      {bitcoinPrice ? <p>Current Price: ${bitcoinPrice}</p> : <p>Loading...</p>}
    </div>
  );
};

export default BitcoinPriceApp;
