import styles from "./Register.module.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from "../../Logos/logo-1.png";
import { useState, useEffect } from "react";
import Image from "../../image/image-video.jpg";
import { Register } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allUser } from "../../Redux/action";
import Alert from "@mui/material/Alert";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const check = useSelector((state) => state.CheckEmail);

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    street: "",
    postal_code: "",
    password: "",
    phone: "",
    birthdate: "",
  });

  const validate = (input) => {
    let errores = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(input.email)) {
      errores.email = "El correo electrónico es válido";
    }

    return errores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(Register(user));
    navigate("/auth/login");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(
      validate({
        ...user,
        [e.target.name]: [e.target.value],
      })
    );
  };

  return (
    <div className={styles.RegisterContainer}>
      <div className={styles.ImgContainer}>
        <img src={Image} alt="Not found" />
      </div>
      <div className={styles.LogoContainer}>
        <a href="/">
          <img src={Logo} alt="Not found" />
        </a>
      </div>
      <div className={styles.loginRedes}>
        <h1>Registro</h1>
        <p>
          ¿Ya tiene una cuenta? <a href="/auth/login">Iniciar sesión </a>
        </p>
        <p>Conectarse con las redes sociales</p>
      </div>

      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            margin: "20px",
          },
        }}
        autoComplete="off"
        display="grid"
        justifyContent="center"
        validate="true"
      >
        <div className={styles.inputContainer}>
          <div className={styles.data}>
            <label htmlFor="">Nombre</label>
            <TextField
              id="outlined-basic"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
          <div className={styles.data}>
            <label htmlFor="">Apellido(s)</label>
            <TextField
              id="outlined-basic"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.data}>
            <label htmlFor="">Correo electrónico</label>
            <TextField
              id="outlined-basic"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
            {/*       {errors.email && (
               <p className={styles.error}>{errors.email}</p>
             )
             } */}
          </div>
          <div className={styles.data}>
            <label htmlFor="">Contraseña</label>
            <TextField
              id="outlined-basic"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.data}>
            <label htmlFor="">País residencial</label>
            <TextField
              id="outlined-basic"
              name="country"
              value={user.country}
              onChange={handleChange}
              required
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
          <div className={styles.data}>
            <label htmlFor="">Ciudad</label>
            <TextField
              id="outlined-basic"
              name="city"
              value={user.city}
              onChange={handleChange}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.data}>
            <label htmlFor="">Calle</label>
            <TextField
              id="outlined-basic"
              name="street"
              value={user.street}
              onChange={handleChange}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>

          <div className={styles.data}>
            <label htmlFor="">Código postal</label>
            <TextField
              id="outlined-basic"
              name="postal_code"
              value={user.postal_code}
              onChange={handleChange}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.data}>
            <label htmlFor="">Teléfono</label>
            <TextField
              id="outlined-basic"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
          <div className={styles.data}>
            <label htmlFor="">Fecha de nacimiento</label>
            <TextField
              type="date"
              id="outlined-basic"
              name="birthdate"
              value={user.birthdate}
              onChange={handleChange}
              sx={{
                "& > :not(style)": {
                  m: 1,
                  height: "40px",
                  width: "200px",
                },
              }}
            />
          </div>
        </div>
        <Button type="submit" variant="contained">
          Registrarse
        </Button>
      </Box>
    </div>
  );
}
