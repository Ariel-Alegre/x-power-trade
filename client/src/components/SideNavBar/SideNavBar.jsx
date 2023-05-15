import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import styles from "./SideNavBar.module.scss";
import { AiOutlineDashboard } from "react-icons/ai";
import { SiCashapp } from "react-icons/si";
import { GoDesktopDownload } from "react-icons/go";
import { TfiAlignJustify } from "react-icons/tfi";
import { BiPhone, BiBookOpen } from "react-icons/bi";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

export default function SideNavBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "350px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <TfiAlignJustify />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton
            sx={{
              fontSize: "30px",
              ":hover": { background: "#1976d2", color: "#ffff" },
            }}
            href="/dashboard"
          >
            <AiOutlineDashboard />
            <ListItem sx={{ fontSize: "15px" }}>Panel de control</ListItem>
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ marginTop: "-40px" }}>
        <ListItem>
          <ListItemButton
            sx={{
              fontSize: "30px",
              ":hover": { background: "#1976d2", color: "#ffff" },
            }}
            href="/my-wallet/deposit"
          >
            <AccountBalanceWalletIcon />
            <ListItem sx={{ fontSize: "15px" }}>Depósito</ListItem>
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ marginTop: "-40px" }}>
        <ListItem>
          <ListItemButton
            sx={{
              fontSize: "30px",
              ":hover": { background: "#1976d2", color: "#ffff" },
            }}
          >
            <GoDesktopDownload />
            <ListItem sx={{ fontSize: "15px" }}>Hacer trading ahora</ListItem>
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ marginTop: "-40px" }}>
        <ListItem>
          <ListItemButton
            sx={{
              fontSize: "30px",
              ":hover": { background: "#1976d2", color: "#ffff" },
            }}
            href="/my-wallet/withdraw"
          >
            <SiCashapp />
            <ListItem sx={{ fontSize: "15px" }}>Retirar fondos</ListItem>
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ marginTop: "-40px" }}>
        <ListItem>
          <ListItemButton
            sx={{
              fontSize: "30px",
              ":hover": { background: "#1976d2", color: "#ffff" },
            }}
            href="/account-support"
          >
            <BiPhone />
            <ListItem sx={{ fontSize: "15px" }}>Atención al cliente</ListItem>
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ marginTop: "-40px" }}>
        <ListItem>
          <ListItemButton
            sx={{
              fontSize: "30px",
              ":hover": { background: "#1976d2", color: "#ffff" },
            }}
            href="/regulation"
            target="__blanck"
          >
            <BiBookOpen />
            <ListItem sx={{ fontSize: "15px" }}>Reglamento</ListItem>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className={styles.sidebar}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={styles.btn} onClick={toggleDrawer(anchor, true)}>
            <TfiAlignJustify className={styles.toggleDrawer} />
          </Button>
          <Box sx={{ width: 500 }}>
            <div className={styles.iconos}>
              <Tooltip title="Panel de control" placement="right-start">
                <a href="/dashboard">
                  <AiOutlineDashboard className={styles.icons} />
                </a>
              </Tooltip>
              <Tooltip title="Depósito" placement="right-start">
                <a href="/my-wallet/deposit">
                  <AccountBalanceWalletIcon className={styles.icons} />
                </a>
              </Tooltip>
              <Tooltip title="Hacer trading ahora" placement="right-start">
                <a href="/platforms">
                  <GoDesktopDownload className={styles.icons} />
                </a>
              </Tooltip>
              <Tooltip title="Retirar fondos" placement="right-start">
                <a href="/my-wallet/withdraw">
                  <SiCashapp className={styles.icons} />
                </a>
              </Tooltip>
              <Tooltip title="Atención al cliente" placement="right-start">
                <a href="/account-support">
                  <BiPhone className={styles.icons} />
                </a>
              </Tooltip>
              <Tooltip title="Reglamento" placement="right-start">
                <a href="/regulation" target="__blanck">
                  <BiBookOpen className={styles.icons} />
                </a>
              </Tooltip>
            </div>
          </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
