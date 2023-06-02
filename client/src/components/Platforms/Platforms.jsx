import React, { useState, useEffect } from "react";
import "./Platforms.module.scss";
import Identify from '../Identify/Identify';
import SideBar from '../Sidebar/index';
import { Markets } from '../../Redux/action/index'
import {useSelector, useDispatch} from 'react-redux';

const Platforms = () => {
  const dispatch = useDispatch();
  const markets = useSelector(state => state.AllMarkets);

  useEffect(() => {
    dispatch(Markets())
  }, [dispatch]);

  return (
    <div>
      <SideBar/>
      <Identify/>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {markets.map((crypto) => (
            <tr key={crypto.id}>
              <td>
                <img src={crypto.image} alt="Not found" />{" "}
              </td>
              <td>{crypto.name}</td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td
                className={
                  crypto.price_change_percentage_24h < 0 ? "red" : "green"
                }
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Platforms;
