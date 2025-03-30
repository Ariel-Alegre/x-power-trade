import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { buyCoins, sellCoins, Wallet } from '../../Redux/action'; // Asegúrate de importar la acción de compra adecuada
import styles from './Coins.module.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Input } from "antd";
import CircularProgress from "@mui/material/CircularProgress";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth:"100%",

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const StylesCoin = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth:"100%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PaymentCoin = ({ amount, coin, handleBuyCoins, wallet }) => {
  const [openFinish, setOpenFinish] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  /*   const [messageApi, contextHolder] = message.useMessage(); */

  /*   const error = () => {
      messageApi.open({
        type: "error",
        content: "el correo y/o la contraseña no coinciden",
      });
    }; */
  const handleOpen = () => {
    setOpenFinish(true);

  };

  const handleClose = () => setOpenFinish(false);
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };
  const handleBuy = () => {
    setLoading(true);

    setTimeout(() => {
      try {
        if (amount > wallet.balance) {
          throw new Error('Saldo insuficiente');
        }
        handleBuyCoins();
        alert(`Compraste $${amount} de ${coin.symbol} exitosamente `)

      } catch (error) {
        console.log(error);
        alert('Saldo insuficiente');


      } finally {
        setLoading(false);
        /*       handleClose();
              error() */
      }
    }, 3000);

  };


  return (
    <div>
      <Button variant="contained" onClick={handleOpen} disabled={amount <= 0}>Comprar</Button>

      <Modal
        open={openFinish}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={StylesCoin}>
          <div>
            <div>
              {/*  <div className={styles.modal_img}>
                <img src={coin.image} alt='not found' />
              </div> */}
              <div>
                <ul className={styles.ul_modal}>
                  <li>
                    Vas a comprar <strong>${amount}</strong> de <strong>{coin.symbol}</strong>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <input
                      type='checkbox'
                      checked={checkboxChecked}
                      onChange={handleCheckboxChange}
                    /> {" "}
                    Acepto comprar la moneda y el monto requerido.
                  </li>
                </ul>
              </div>
            </div>
            <Typography sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: '2em' }}>
              <Button variant="contained" sx={{ background: 'red', ':hover': { background: 'red' } }} onClick={handleClose}>Cancelar</Button>
              <Button
                variant="contained"
                onClick={handleBuy}
                disabled={!checkboxChecked}
              >
                {loading ? (
                  <CircularProgress size={20} thickness={5} sx={{ color: '#fff' }} />
                ) : (
                  'Comprar'
                )}
              </Button>
            </Typography>
          </div>
        </Box>
      </Modal>
      <div>

      </div>
    </div>
  )
}




const CoinRow = ({ coin, index }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token); // Obtén el token de tu estado de autenticación
  const [open, setOpen] = useState(false);
  const wallet = useSelector(state => state.wallet);
  const [amount, setAmount] = useState(null);
  useEffect(() => {
    dispatch(Wallet(token))
  }, [dispatch, token]);
  const handleOpen = () => {
    if (wallet.balance > 0) {
      setOpen(true);
    } else {
      alert('Saldo insuficiente');
    }
  };


  const handleClose = () => setOpen(false);

  const handleBuyCoins = async () => {

    const amountNumber = parseFloat(amount);
    try {
      await dispatch(buyCoins(token, { coinId: coin.id, amount: amountNumber }));
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };



  const handleAmountChange = (e) => {
    const newValue = e.target.value;
      // Si el valor no cumple con la expresión regular (no comienza con 0), actualizar el estado
      setAmount(newValue);
  };



  return (
    <>
      <tr>
        <td >
          {/*     <img
            src={coin.image}
            alt=""
            className="img-fluid me-4"
            style={{ width: "5%" }}
          /> */}
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
          ${coin.edited_price_sale ? coin.edited_price_sale : coin.priceSale && coin.priceSale.toLocaleString()}
        </td>


        <td>
          <Button variant="contained" onClick={handleOpen} >Ver</Button>

        </td>

      </tr>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleBuyCoins}>

          <Box sx={style}>
            <div>
              <div>
                <div className={styles.modal_img}>
                  {/* <img src={coin.image} alt='not found' /> */}
                </div>
                <div>

                  <ul className={styles.ul_modal}>

                    <li>
                      Cuanto de <strong>{coin.symbol}</strong> desea comprar?
                    </li>
                    <li>
                      <Button sx={{ margin: "auto", display: 'grid' }} >Compra

                        <div  >$
                          {parseFloat(coin.price).toFixed(3)} {/* Mostrará máximo 3 decimales */}
                          {parseFloat(coin.price).toFixed(3).endsWith('0') ? parseFloat(coin.price).toFixed(2) : null} {/* Mostrará mínimo 2 decimales si el tercer decimal es 0 */}
                        </div>

                      </Button>


                    </li>

                  </ul>
                </div>
                <div>
                  <div>
                    <Input
                      size="large"
                      placeholder="Introduzca la cantidad"
                      prefix={"USD"}
                      type="number"
                      name="amount"
                      value={amount}
                      onChange={handleAmountChange}
                      required
                    />

                  </div>

                </div>
              </div>


              <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: '2em' }}>
                <Button variant="contained" sx={{ background: 'red', ':hover': { background: 'red' } }} onClick={handleClose}>Cancelar</Button>

                <PaymentCoin amount={amount} coin={coin} handleBuyCoins={handleBuyCoins} wallet={wallet} />

              </Typography>
            </div>
          </Box>

        </form>
      </Modal>
    </>

  );
};

export default CoinRow;
