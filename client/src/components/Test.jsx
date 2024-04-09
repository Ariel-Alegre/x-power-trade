/* import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ChangePriceCoins } from '../../Redux/action';

const EditCoinRow = ({ coin, index }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedPrice, setEditedPrice] = useState(coin.pricePurchase);

  const startEditing = () => {
    setEditing(true);
  };

  const saveChanges = async () => {
    try {
      // Llama a tu acción ChangePriceCoins para actualizar el precio en la API
      await dispatch(ChangePriceCoins(coin.id, editedPrice));

      // Después de la actualización exitosa, desactiva la edición
      setEditing(false);
    } catch (error) {
      console.error("Error al cambiar el precio:", error);
      // Maneja el error si es necesario
    }
  };

  const cancelEditing = () => {
    setEditing(false);
    setEditedPrice(coin.pricePurchase); // Restaura el precio original al cancelar la edición
  };

  return (
    <tr>
     <td >
          {/*     <img
            src={coin.image}
            alt=""
            className="img-fluid me-4"
            style={{ width: "5%" }}
          /> 
          <span>{coin.name}</span>
          <span className="ms-3 text-muted">{coin.symbol}</span>
        </td>
        <td>${coin.edited_price_purchase ? coin.edited_price_purchase : coin.pricePurchase && coin.pricePurchase.toLocaleString()}</td>

        <td
          className={
            coin.rating > 0 ? "text-success" : "text-danger"
          }
        >
          {coin.rating && coin.rating.toLocaleString()}
        </td>
      <td>
          ${coin.priceSale && coin.priceSale.toLocaleString()}
        </td>
        <td>
          ${coin.priceSale && coin.priceSale.toLocaleString()}
        </td>
 


      

  
    </tr>
  );
};

export default EditCoinRow;
 */