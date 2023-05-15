import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import styles from "./Personal.module.scss";
import Identify from "../Identify/Identify";
import SideNavBar from "../SideNavBar/SideNavBar";
import AccountMenu from "../AccountMenu/AccountMenu";
import { useEffect, useState } from "react";

export default function Personal() {
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

  
    
    
    return (
      <div>
        <SideNavBar/>
        <Identify/>
        <AccountMenu/>
      <h1 className={styles.h1}>Informacion personal</h1>
      <div className={styles.PersonalContainer}>

        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              margin: "20px",
            },
            
        }}
        autoComplete="off"
        display="grid"
        justifyContent="center"
        validate
        >
          <div className={styles.inputContainer}>
            <div className={styles.data}>
              <label htmlFor="">Nombre</label>
              <TextField
                id="outlined-basic"
                name="name"
                value={user.name}
                disabled
                sx={{
                    "& > :not(style)": {
                        m: 1,
                        height: "40px",
                        width: "350px",
                        background:"#E2E2E2EF",

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
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

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
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

                  },
                }}
              />
            </div>
            <div className={styles.data}>
              <label htmlFor="">Contraseña</label>
              <TextField
                id="outlined-basic"
                name="password"
                value={user.password}
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

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
                value= {user.country}
                
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

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
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

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
                disabled 
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

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
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

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
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"
                  },
                }}
              />
            </div>
            <div className={styles.data}>
              <label htmlFor="">Fecha de nacimiento</label>

              <TextField
                id="outlined-basic"
                name="birthdate"
                value={user.birthdate}
                disabled
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    height: "40px",
                    width: "350px",
                    background:"#E2E2E2EF"

                  },
                }}
              />
            </div>
          </div>
          <Button type="submit" variant="contained">
            Actualizar
          </Button>
        </Box>
      </div>
    </div>
  );
}
