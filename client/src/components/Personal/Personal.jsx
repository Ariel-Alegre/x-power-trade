import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Personal.module.scss";
import Identify from "../Identify/Identify";
import { useEffect, useState } from "react";
import { DataPersonal  } from '../../Redux/action';
import {useSelector, useDispatch} from 'react-redux';
import CircularProgress from "@mui/material/CircularProgress";

export default function Personal() {
  const dispatch = useDispatch();
  const dataPersonal = useSelector(state => state.dataPersonal);
  const token = useSelector(state => state.token);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
     setTimeout(async () => {
       setLoading(false);
     }, 2000);
   }, []);
  

  useEffect(() => {
    dispatch(DataPersonal(token))
  }, [token, dispatch]);

  
    
    
    return (
      <>
                    {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress color="primary"  />
        </div>
      ) : (
      <div>
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
                value={dataPersonal.name}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
                  }, 
                }}
                />
            </div>
            <div className={styles.data}>
              <label htmlFor="">Apellido(s)</label>
              <TextField
                id="outlined-basic"
                name="lastName"
                value={dataPersonal.lastName}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
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
                value={dataPersonal.email}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
                  }, 
                }}
                />
            </div>
            <div className={styles.data}>
              <label htmlFor="">Contraseña</label>
              <TextField
                id="outlined-basic"
                name="password"
                value={dataPersonal.password}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
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
                value= {dataPersonal.country}
                
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
                  }, 
                }}
              />
            </div>
            <div className={styles.data}>
              <label htmlFor="">Ciudad</label>
              <TextField
                id="outlined-basic"
                name="city"
                value={dataPersonal.city}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
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
                value={dataPersonal.street}
                disabled 
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
                  }, 
                }}
                />
            </div>

            <div className={styles.data}>
              <label htmlFor="">Código postal</label>
              <TextField
                id="outlined-basic"
                name="postal_code"
                value={dataPersonal.postal_code}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
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
                value={dataPersonal.phone}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
                  }, 
                }}
                />
            </div>
            <div className={styles.data}>
              <label htmlFor="">Fecha de nacimiento</label>

              <TextField
                id="outlined-basic"
                name="birthdate"
                value={dataPersonal.birthdate}
                disabled
                sx={{                     
                  m: 1,    
                  width: 400,
                  background:"#E2E2E2EF",      
                  "@media (max-width: 768px)": {
                    width: "100%", // Ancho completo en pantallas pequeñas
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
      )}

                </>
  );
}
