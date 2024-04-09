import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ChangePriceCoins } from '../../Redux/action';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";

import { Input } from "antd";
import styles from './Coins.module.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const EditCoinRow = ({ coin, index }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newPricePurcahase, setNewPricePurcahase] = useState(coin.edited_price_purchase || coin.pricePurchase);
  const [newPriceSale, setNewPriceSale] = useState(coin.edited_price_sale || coin.priceSale);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      try {
        dispatch(ChangePriceCoins(coin.id, newPricePurcahase, newPriceSale));

      } catch (error) {
        console.log(error);
        alert('Hay un error');


      } finally {
        alert("Precio editado")
        setLoading(false);
    setOpen(false);


      }
    }, 3000);

  };
  return (
    <tr>
      <td>
        <span>{coin.name}</span>
        <span className="ms-3 text-muted">{coin.symbol}</span>
      </td>
      <td>${coin.edited_price_purchase ? coin.edited_price_purchase : coin.pricePurchase && coin.pricePurchase.toLocaleString()}</td>
      <td className={coin.rating > 0 ? "text-success" : "text-danger"}>
        {coin.rating && coin.rating.toLocaleString()}
      </td>
      <td>${coin.priceSale && coin.priceSale.toLocaleString()}</td>
      <td>
        <Button variant="contained" onClick={handleOpen}>Editar</Button>
      </td>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} className={styles.edit_container}>
            <div>
              <div>Editar valor de la compra</div>
              <Input
                size="large"
                placeholder="Introduzca la cantidad del depósito"
                prefix={"USD"}
                type="number"
                value={newPricePurcahase}
                onChange={(e) => setNewPricePurcahase(parseFloat(e.target.value))}
                required
              />
            </div>
            <div>
              <div>Editar valor de la venta</div>
              <Input
                size="large"
                placeholder="Introduzca la cantidad del depósito"
                prefix={"USD"}
                type="number"
                value={newPriceSale}
                onChange={(e) => setNewPriceSale(parseFloat(e.target.value))}
                required
              />
            </div>
            <div>
              <Button type="submit" variant="contained">
                {loading ? (
                  <label>Editando  {" "}

                    <CircularProgress size={15} thickness={5} sx={{ color: '#fff' }} />
                  </label>
                ) : (
                  'Editar'
                )}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </tr>
  );
};


export default EditCoinRow;