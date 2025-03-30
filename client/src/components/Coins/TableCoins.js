import React from "react";
import CoinRow from "./CoinRow";
import styles from './Coins.module.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const titles = ["Simbolo", "Compra", "Rating", "Venta", "Ver"];

const TableCoins = ({ coins, search }) => {

  const filteredCoins = coins.filter((coin) =>
    coin.symbol && coin.symbol.toLowerCase().includes((search ?? '').toLowerCase())
  );




  if (filteredCoins.length === 0) return <div>no coins</div>
  return (
    <Card sx={{ display: "flex", width: "100%" }}>
      <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
    <div className={styles.table}>
      <table className="table">
        <thead
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "#fff",
          }}
        >
          <tr>
            {titles.map((title, i) => (
              <td key={i}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => (
            <CoinRow key={coin.id} coin={coin} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
    </CardContent>
    </Card>
  );
};

export default TableCoins;
