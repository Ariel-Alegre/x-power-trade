import { useState, useEffect } from "react";
import styles from "./Withdraw.module.scss";
import Identify from "../Identify/Identify";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { Wallet, DataPersonal } from "../../Redux/action";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Input, Checkbox } from "antd";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from 'axios';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Withdraw() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const dataPersonal = useSelector((state) => state.dataPersonal);
  const token = useSelector((state) => state.token);
  const [data, setData] = useState({
    name: "",
    lastName:"",
    email: "",
    amount: 0,
    ruc: "",
    accountNumber: "",
  });

  console.log(data)
  const [loading, setLoading] = useState(true);
  const [agreement, setAgreement] = useState(false);


  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      name: dataPersonal.name,
      lastName: dataPersonal.lastName,
      email: dataPersonal.email,
     
      accountNumber: dataPersonal.accountNumber,
    }));
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(Wallet(token));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(DataPersonal(token));
  }, [dispatch, token]);

  const handleChange = (e) => {
    setData( ({
      ...data,
     [e.target.name]:e.target.value
   
    }));
  };

  const handleCheckboxChange = (e) => {
    setAgreement(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreement) {
      alert('Debe aceptar los términos y condiciones.');
      return;
    }
    try {
      const response = await axios.post('https://x-power-trade-production.up.railway.app/retirar', data);
      if (response.data.success) {
        alert('Solicitud de retiro enviada con éxito');
      } else {
        alert('Hubo un problema al enviar la solicitud de retiro');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de retiro:', error);
      alert('Error al enviar la solicitud de retiro');
    }
  };

  const formattedBalance =
    wallet && wallet.balance !== null && typeof wallet.balance !== "undefined"
      ? wallet.balance.toFixed(2)
      : "";

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
        <>
          <Identify />
          <div className={styles.withdrawContainer}>
            <h2>Crear nueva solicitud de retiro</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.withdraw}>
              <p>Quiero retirar fondos</p>
     <span>Ruc</span>
              <Input
                  onChange={handleChange}
                  size="large"
                  placeholder="RUC"
                  name="ruc"
                  value={data.ruc}
                />
        
     <span>Monto</span>
              
                <Input
                  onChange={handleChange}
                  size="large"
                  placeholder="Introduzca la cantidad del depósito"
                  prefix={"USD"}
                  type="number"
                  name="amount"
                  value={data.amount}
                  min={0}
                  max={wallet.balance && wallet.balance}
                  required
                />

                <p> • Min: $ 0.00 • Max: ${formattedBalance}</p>
              </div>
              <div className={styles.minAndMax}>
                <input
                  type="range"
                  value={data.amount}
                  name="amount"
                  onChange={handleChange}
                  min={0}
                  max={wallet.balance && wallet.balance}
                />
                <p>min</p>
              </div>
  
              <div className={styles.list}>
                <p>Su retiro se dividirá de la siguiente manera:</p>
                <ul>
                  <li>
                    Si el importe de su retiro es menor o igual al importe total
                    de su depósito, recibirá su dinero de vuelta mediante el
                    método de pago con el que realizó el depósito.
                  </li>
                  <li>
                    Si el importe de su retiro es mayor que su depósito, el
                    importe de su depósito se retribuirá mediante el mismo modo
                    de pago utilizado para el depósito y la ganancia se le
                    transferirá mediante métodos de pago alternativos.
                  </li>
                </ul>
              </div>
              <div className={styles.checkContainer}>
                <div className={styles.check}>
                  <Checkbox
                    checked={agreement}
                    onChange={handleCheckboxChange}
                  />
                  <label>
                    Entiendo que existe la posibilidad de que, si tuviera
                    posiciones abiertas, mi retiro pueda causar una interrupción
                    en mi cuenta.
                  </label>
                </div>
                <Button variant="contained" type="submit">
                  Solicitar
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
