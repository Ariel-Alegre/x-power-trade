import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { DashboardOutlined } from "@ant-design/icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "./styles.css";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { DataPersonal } from "../../Redux/action";
import UploadIcon from '@mui/icons-material/Upload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./styles.css";



const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const dataPersonal = useSelector((state) => state.dataPersonal);
  const token = useSelector((state) => state.token);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setMobileOpen(false);

  };
  React.useEffect(() => {
    dispatch(DataPersonal(token));
  }, [dispatch, token]);

  const handleDrawerToggle = () => {
    setMobileOpen(true);
  };


  const drawer = (
    <div>
      <div className="img-panel">
        <img src={require("./../../Logos/logo-1.png")} alt="Not found" />
      </div>
      <Divider />
      <List>
        <Link className="decoration" to="/dashboard">
          <ListItem
            disablePadding
            onClick={() => handleMenuItemClick("dashboard")}
            sx={{ backgroundColor: selectedItem === "dashboard" ? "#D6D6D6" : "" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Panel de control</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/my-wallet/deposit" className="decoration">
          <ListItem
            disablePadding
            onClick={() => handleMenuItemClick("deposit")}
            sx={{ backgroundColor: selectedItem === "deposit" ? "#D6D6D6" : "" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText>Depósito</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/platforms" className="decoration">
          <ListItem
            disablePadding
            onClick={() => handleMenuItemClick("trading")}
            sx={{ backgroundColor: selectedItem === "trading" ? "#D6D6D6" : "" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <InstallDesktopIcon />
              </ListItemIcon>
              <ListItemText>Hacer Trading ahora</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/my-wallet/withdraw" className="decoration">
          <ListItem
            disablePadding
            onClick={() => handleMenuItemClick("withdraw")}
            sx={{ backgroundColor: selectedItem === "withdraw" ? "#D6D6D6" : "" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText>Retirar fondos</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/account-support" className="decoration">
          <ListItem
            disablePadding
            onClick={() => handleMenuItemClick("support")}
            sx={{ backgroundColor: selectedItem === "support" ? "#D6D6D6" : "" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText>Atencion al cliente</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>

        {/* Resto de las opciones del menú con la misma lógica */}
      </List>
    </div>
  );
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
      {/*     <Typography variant="h6" noWrap component="div">
            X POWER TRADE
          </Typography> */}
        </Toolbar>
        <Box className="navbar-menu">
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ backgroundColor: dataPersonal.backgroundColor }}>
                {dataPersonal.name ? dataPersonal.name[0].toUpperCase() : null}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
         <Link to='/my-account' className="decoration">
            <MenuItem onClick={handleCloseUserMenu}>
            <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
              Mi cuenta
            </MenuItem>
            </Link>
              <Link to="/account-settings" className="decoration">
            <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Ajustes personales
            </MenuItem>
              </Link>
         
            <Link to="/kyc-upload" className="decoration">
              <MenuItem onClick={handleCloseUserMenu}>
              <ListItemIcon>
                  <UploadIcon fontSize="small" />
                </ListItemIcon>
                 Subir documentos
              </MenuItem>
            </Link>
            <Divider />
   
            <MenuItem
              onClick={() => {
                localStorage.clear();
                navigate("/auth/login");
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Cerrar sesión
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
