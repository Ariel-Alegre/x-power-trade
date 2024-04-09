import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Identify from "../Identify/Identify";
import AccountMenu from "../AccountMenu/AccountMenu";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./Deposit.css";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { PaymentDeposite } from "../../Redux/action";
import DepositCoin from "./DepositCoin/DepositCoin";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

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

export default function BasicTabs() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState({
    amount: "",
  });
  const [redirected, setRedirected] = React.useState(false); // Nu

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const token = useSelector((state) => state.token);
  const [buttonPressed, setButtonPressed] = React.useState(false);

  const handleChangeAmount = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAmount = (e) => {
    e.preventDefault();
    setButtonPressed(true);
  };

  React.useEffect(() => {
    if (buttonPressed) {
      axios
        .post("http://localhost:3001/payment", data, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          window.location.href = response.data.redirect_url;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [buttonPressed]);
  React.useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
          {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress color="primary"  />
        </div>
      ) : (
        <Box>
        <Identify />
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="container-deposit"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            className="tabs-deposit"
            aria-label="basic tabs example"
          >
            <Tab label="Pagos online" {...a11yProps(0)} />
            <Tab label="Transferencia" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <form onSubmit={handleSubmitAmount}>
          <CustomTabPanel value={value} index={0}>
            <Input
              onChange={handleChangeAmount}
              size="large"
              placeholder="Introduzca la cantidad del depósito"
              prefix={"USD"}
              type="number"
              name="amount"
              value={data.amount}
            />

            <Button type="submit" variant="contained" sx={{ marginTop: "2em" }}>
              Continuar
            </Button>
          </CustomTabPanel>
        </form>
        <CustomTabPanel value={value} index={1}>
          <h1 className="title-banca">Depósito mediante transferencia</h1>
          <div className="data-container">
            <DepositCoin />
          </div>
        </CustomTabPanel>
      </Box>
      )}

    </div>
  );
}
