import React from "react";
import CoinRow from "./CoinRow";
import styles from './Coins.module.css'
import Table from 'react-bootstrap/Table';

const titles = ["Simbolo", "Compra", "Rating", "Venta", "Editar"];


const TableCoins = ({ coins, search }) => {


  if (!coins) return <div>no coins</div>

  return (
    <div className={styles.tableContainer}>

<table className="table">


      <thead>
        <tr>
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
    </div>

  );
};

export default TableCoins;
