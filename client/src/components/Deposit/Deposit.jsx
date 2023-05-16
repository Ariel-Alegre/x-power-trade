import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import styles from "./Deposit.module.css";
import Box from "@mui/material/Box";
import { BiTransfer } from "react-icons/bi";
import { ImPrinter } from "react-icons/im";
import Button from "@mui/material/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Identify from "../Identify/Identify";
import SideNavBar from "../SideNavBar/SideNavBar";
import AccountMenu from "../AccountMenu/AccountMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function TabPanel(props) {
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

TabPanel.propTypes = {
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

export default function Deposit() {



  const [user, setUser] = useState({});

  const token = useSelector((state) => state.token);
  
  console.log(user);

  useEffect(() => {
    
    
    fetch("http://localhost:3001/user", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la petición");
      }
      return response.json(); // Convertir la respuesta a formato JSON
    })
    .then((data) => {
      setUser(data); // Asignar los datos del usuario al estado
    })
    .catch((error) => {
      console.error(error);
    });
    
  }, [token]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <SideNavBar/>
        <Identify />
        <AccountMenu/>
      <div className={styles.DepositsContainer}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              onChange={handleChange}
              className={styles.PaymentsAndTransfer}
            >
              <Tab label="Pagos online" {...a11yProps(0)} />
              <Tab label="Pagos alternativos" {...a11yProps(1)} />
              <Tab label="Tranferencia bancaria" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className={styles.deposites}>
              <h2>Deposite fondos en su cuenta</h2>
              <p>Beneficiario: {user.name} {" "} {user.lastName}</p>
              <div className={styles.EnterDeposit}>

                <input
                  placeholder="Introduzca la cantidad de depósito"
                  type="text"
                />
              </div>
              <Button variant="contained" className={styles.btn}>
                Continuar
              </Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={styles.alternative}>
              <h2>
                Seleccione su método de pago preferido y cargue fondos en su
                cuenta
              </h2>
              <p>Beneficiario: Ariel Alegre</p>
              <div className={styles.EnterDeposit}>
                <label>USD</label>
                <input
                  placeholder="Introduzca la cantidad de depósito"
                  type="text"
                />
              </div>
              <Button variant="contained" className={styles.btn}>
                Continuar
              </Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={styles.Transfers}>
              <h2>Depósito mediante transferencia bancaria</h2>
              <div className={styles.Gap}>
                <h5>
                  AB Mano Bankas{" "}
                  <Button>
                    <ImPrinter className={styles.buttonIcons} />
                  </Button>
                </h5>
                <div className={styles.nameBank}>
                  <p>Nombre del banco:</p>
                  <b>AB Mano Bankas</b>
                </div>
                <div className={styles.BankAddress}>
                  <p>Dirección del banco:</p>
                  <b>S. Moniuskos str. 27, LT-o8115 Vilnius, Lithuania</b>
                </div>
                <div className={styles.Beneficiary}>
                  <p>Beneficiario:</p>
                  <b>BREINROCK LIMITED</b>
                </div>
                <div className={styles.BeneficiaryAddress}>
                  <p>Dirección Beneficiaria:</p>
                  <b>Address 1 Yong St 1801, Ontario Toronto, Canada</b>
                </div>
                <div className={styles.Swift}>
                  <p>SWIFT:</p>
                  <b>KUSRLT24</b>
                </div>
                <div className={styles.Reference}>
                  <p>Nombre de cuenta de referencia:</p>
                  <b>1303473995</b>
                </div>

                <div className={styles.select}>
                  <p>Divisa</p>
                  <p>IBAN</p>
                </div>
              </div>

              <div className={styles.EurAndLt}>
                <p>EUR</p>
                <p>LT145030120000000439</p>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
