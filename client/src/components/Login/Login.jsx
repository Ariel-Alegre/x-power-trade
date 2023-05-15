import styles from "./Login.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from "../../Logos/logo-1.png";
import { useState } from "react";
import Image from "../../image/image-video.jpg";
import { loginUser } from '../../Redux/action/';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginError } from '../../Redux/action';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import GoogleLogin from 'react-google-login';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);


 const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post("http://localhost:3001/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    dispatch(loginSuccess(response.data.token));
    navigate("/");
  } catch (error) {
    dispatch(loginError());
  }
};




  const responseGoogle = async (e) => {
    e.preventDefault();
console.log(e);
 
  }

  return (
    <div>
        <div className={styles.ImgContainer}>
          <img src={Image} alt="Not found" />
        </div>
        <div className={styles.LogoContainer}>
          <a href="/">
          <img src={Logo} alt="Not found" />
          </a>
      </div>
      <div>
        <GoogleLogin
    clientId="995759871583-n65ceorovh77fhnl34rv4sgu4ses1nog.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      </div>
      <div className={styles.loginRedes}>
        <h1>Iniciar sesión</h1>
        <p>
          ¿Aún no tiene una cuenta? <a href="/auth/register">Regístrese</a>
        </p>
        <p>Conectarse con las redes sociales</p>
      </div>
      <hr className={styles.hr} />
        <Box
         onSubmit={handleSubmit}
         component="form"
         sx={{
           "& > :not(style)": { m: 1, width: "450px" },
          }}
          noValidate
          autoComplete="off"
          display="grid"
          justifyContent="center"
          gap="20px"
          >
            <Stack sx={{ width: '100%' }} spacing={2}>

          <TextField
            id="outlined-basic"
            label="Correo electrónico"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <TextField
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
             {error && (
               <Alert severity="error">{error}</Alert>
             )
             }
            
            </Stack>
          <Button
            type="submit"
            variant="contained"
            display="flex"
            justifyContent="center"
            >
            Ingresar
          </Button>
        </Box>
      
    </div>
  );
}


