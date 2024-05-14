import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  const stockList = stocks.map(stock =>{
    return <Stock key={stock.id} stock={stock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stockList}
    </div>
  );
}

export default StockContainer;
