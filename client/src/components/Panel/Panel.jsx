import Identify from "../Identify/Identify";
import styles from "./Panel.module.css";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { DataCoinsPurches, Wallet, sellCoins } from "../../Redux/action";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxWidth: "100%",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const sample = [
  ["Frozen yoghurt", 159, 6.0, 24, 4.0],
  ["Ice cream sandwich", 237, 9.0, 37, 4.3],
  ["Eclair", 262, 16.0, 24, 6.0],
  ["Cupcake", 305, 3.7, 67, 4.3],
  ["Gingerbread", 356, 16.0, 49, 3.9],
];
export default function Panel() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingSeell, setLoadingSeell] = useState(false);

  const token = useSelector((state) => state.token);
  const wallet = useSelector((state) => state.wallet);
  const dataCoinsPurches = useSelector((state) => state.dataCoinsPurches);
  const [open, setOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleOpen = (coin) => {
    setSelectedCoin(coin);

    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };
  useEffect(() => {
    dispatch(Wallet(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(DataCoinsPurches(token));
  }, [dispatch, token]);

  const formattedBalance =
    wallet && wallet.balance !== null && typeof wallet.balance !== "undefined"
      ? wallet.balance.toFixed(2)
      : "";

  const formattedoOpen =
    wallet && wallet.pl_open !== null && typeof wallet.pl_open !== "undefined"
      ? wallet.pl_open.toFixed(2)
      : "";

  const formattedNeto =
    wallet && wallet.neto !== null && typeof wallet.neto !== "undefined"
      ? wallet.neto.toFixed(2)
      : "";

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSell = async (e) => {
    setLoadingSeell(true);
    setTimeout(async () => {
      try {
        await dispatch(
          sellCoins(token, {
            coinId: selectedCoin.coinId,
            amount: selectedCoin.amount,
          })
        );
        alert("Venta completada exitosamente");
      } catch (error) {
        alert("Error al vender moneda digital");

        console.error("Error al vender moneda digital:", error);
      } finally {
        setLoadingSeell(false);
        setOpen(false);
      }
    }, 3000);
  };
  const theme = useTheme();
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div className={styles.panelContainer}>
          <Identify />
          <div className={styles.btn_image}>
            <div className={styles.btn_text}>
              <h3>¡Ya estas listo, confía mira el mercado!</h3>
              <Link to="/platforms">
                <Button variant="contained" className={styles.btn}>
                  {" "}
                  HACER TRADING!
                </Button>
              </Link>
            </div>
          </div>

          <div className={styles.summary}>
            <h5>Resumen financiero de la cuenta</h5>
            <div className={styles.card_moneys}>
              <Card sx={{ display: "flex", width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      P/L Abierto
                    </Typography>
                    <Typography component="div" variant="h5">
                      ${formattedoOpen || 0.0}{" "}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
              <Card sx={{ display: "flex", width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Saldo
                    </Typography>
                    <Typography component="div" variant="h5">
                      ${formattedBalance}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
              <Card sx={{ display: "flex", width: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Patrimonio Neto
                    </Typography>
                    <Typography component="div" variant="h5">
                      ${formattedNeto || 0.0}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </div>
          </div>

          <div className={styles.containerButton}>
            <Link to="/my-wallet/deposit " style={{ color: "#000" }}>
              <Button variant="contained" sx={{ width: 300, height: 100 }}>
                Depósito
              </Button>
            </Link>

            <Link to="/platforms" style={{ color: "#000" }}>
              <Button variant="contained" sx={{ width: 300, height: 100 }}>
                Hacer trading ahora
              </Button>
            </Link>
            <Link to="/my-wallet/withdraw" style={{ color: "#000" }}>
              <Button variant="contained" sx={{ width: 300, height: 100 }}>
                retirar
              </Button>
            </Link>
          </div>

          <div className={styles.positionClosed}>
            {dataCoinsPurches.length > 0 ? (
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
                          <th>Instrumento</th>
                          <th>Tipo</th>
                          <th>Importe</th>
                          <th>Precio de apertura</th>
                          <th>Precio de cierre</th>
                          <th>Vender</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataCoinsPurches &&
                          dataCoinsPurches.map((data, index) => (
                            <tr key={index}>
                              <td>
                                <span>{data.coinId}</span>
                                <span className="ms-3 text-muted">
                                  {data.symbol}
                                </span>
                              </td>
                              <td>Venta</td>
                              <td>{data.pipValue.toFixed(2)}</td>
                              <td>
                                {parseFloat(data.payAmount).toFixed(3)}{" "}
                                {parseFloat(data.payAmount)
                                  .toFixed(3)
                                  .endsWith("0")
                                  ? parseFloat(data.payAmount).toFixed(2)
                                  : null}
                              </td>
                              <td>
                                {parseFloat(data.priceSale).toFixed(3)}{" "}
                                {parseFloat(data.priceSale)
                                  .toFixed(3)
                                  .endsWith("0")
                                  ? parseFloat(data.priceSale).toFixed(2)
                                  : null}
                              </td>
                              <td>
                                <Button
                                  sx={{ color: "red" }}
                                  onClick={() => handleOpen(data)}
                                >
                                  Vender
                                </Button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className={styles.position_closed}>
                <Card>
                  <h4>Posiciones abiertas</h4>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto", width: "100%" }}>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        <div className={styles.notTrading}>
                          <p>
                            No comenzó a hacer trading, por lo que no tenemos
                            posiciones cerradas para presentar aquí.
                          </p>
                          <Link to="/my-wallet/deposit">
                            <Button variant="contained" sx={{ width: "100%" }}>
                              Haga un depósito y comience a hacer trading!
                            </Button>
                          </Link>
                        </div>
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </div>
            )}
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <form>
              <Box sx={style}>
                <div>
                  <div>
                    <div className={styles.modal_img}>
                      {/* <img src={selectedCoin?.image} alt="not found" /> */}
                      <strong>{selectedCoin?.coinId}</strong>
                    </div>
                    <div>
                      <ul className={styles.ul_modal}>
                        <li>
                          Queres vender{" "}
                          <strong>%{selectedCoin?.percentage}</strong> de{" "}
                          <strong>{selectedCoin?.coinId}</strong>?
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            checked={checkboxChecked}
                            onChange={handleCheckboxChange}
                          />{" "}
                          Acepto vender{" "}
                          <strong>%{selectedCoin?.percentage}</strong> de{" "}
                          <strong>{selectedCoin?.coinId}</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      gap: "2em",
                    }}
                  >
                    <Button
                      sx={{
                        color: "bluelight",
                      }}
                      onClick={handleClose}
                    >
                      Cancelar
                    </Button>
                    <Button
                      disabled={!checkboxChecked}
                      sx={{ color: "red" }}
                      onClick={handleSell}
                    >
                      {loadingSeell ? (
                        <CircularProgress
                          size={20}
                          thickness={5}
                          sx={{ color: "red" }}
                        />
                      ) : (
                        "Vender"
                      )}
                    </Button>
                  </Typography>
                </div>
              </Box>
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
}
