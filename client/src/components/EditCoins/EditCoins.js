import { useEffect, useState } from "react";
import TableCoins from "./TableCoins";
import { Coins, ChangePriceCoins } from '../../Redux/action';
import { useSelector, useDispatch } from 'react-redux'

function EditCoins() {
  const dispatch = useDispatch(); 
  const coins = useSelector((state) => state.coins);



  const [search, setSearch] = useState("");


  useEffect(() => {
    dispatch(Coins());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
   

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default EditCoins;
