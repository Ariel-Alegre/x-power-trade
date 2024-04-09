import React from "react";
import CoinRow from "./CoinRow";
import styles from './Coins.module.css';

const titles = ["Simbolo", "Compra", "Rating", "Venta", "Ver"];

const TableCoins = ({ coins, search }) => {

  const filteredCoins = coins.filter((coin) =>
    coin.symbol && coin.symbol.toLowerCase().includes((search ?? '').toLowerCase())
  );




  if (filteredCoins.length === 0) return <div>no coins</div>
  return (
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

  );
};

export default TableCoins;
