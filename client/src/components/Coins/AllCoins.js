import { useEffect, useState } from "react";
import TableCoins from "./TableCoins";
import { Coins } from '../../Redux/action';
import { useSelector, useDispatch } from 'react-redux'
import styles from './Coins.module.css';



function AllCoins() {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(Coins());
  }, [dispatch]);




  return (
    <div className={styles.container_table}>
      <div >
      
        <TableCoins coins={coins}  />
        
      </div>
  
    </div>
  );
}

export default AllCoins;
