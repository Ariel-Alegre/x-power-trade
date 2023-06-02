import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SideBarItem from "./sidebar-item";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { AiOutlineDashboard } from "react-icons/ai";
import { SiCashapp } from "react-icons/si";
import { GoDesktopDownload } from "react-icons/go";
import { TfiAlignJustify } from "react-icons/tfi";
import { BiPhone, BiBookOpen } from "react-icons/bi";

import "./styles.css";
import logo from "../../assets/images/white-logo.png";
import LogoutIcon from "../../assets/icons/logout.svg";

function SideBar({ menu }) {
  const location = useLocation();

  const [active, setActive] = useState(1);

  useEffect(() => {
    menu &&
      menu.forEach((element) => {
        if (location.pathname === element.path) {
          setActive(element.id);
        }
      });
  }, [location.pathname]);

  const __navigate = (id) => {
    setActive(id);
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="sidebar-container">
          <div className="sidebar-color">
            <Link to="/dashboard" >
              <AiOutlineDashboard className="icons"/>
              <spam >Panel de control</spam>
            </Link>
            <Link to="/my-wallet/deposit">
              <AccountBalanceWalletIcon className="icons" />
              <spam >Depósito</spam>
            </Link>
            <Link to="">
              <GoDesktopDownload className="icons" />
              <spam >Hacer trading ahora</spam>
            </Link>
            <Link to="/my-wallet/withdraw">
              <SiCashapp className="icons"/>
              <spam >Retirar fondos</spam>
            </Link>
            <Link to="/account-support">
              <BiPhone className="icons" />
              <spam >Atención al cliente</spam>
            </Link>
            <Link to="/regulation" target="__blanck">
              <BiBookOpen className="icons" />
              <spam >Reglamento</spam>
            </Link>
          </div>
          <div className="sidebar-footer">
            <span className="sidebar-item-label">Cerrar sesión</span>
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="sidebar-item-icon"
            />
          </div>

        </div>
      </div>
    </nav>
  );
}

export default SideBar;
