import styles from "./Support.module.css";
import image from "../../image/trading2png.avif";
import * as React from "react";
import { useTheme } from "@mui/material/styles";

import Identify from '../Identify/Identify'
import CircularProgress from "@mui/material/CircularProgress";
import { SuportSend } from "../../Redux/action";
import { useDispatch } from "react-redux";

export default function Support() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  const theme = useTheme();

  const [data, setData] = React.useState({
email: "",
affair: "",
message: "",
  });
  const names = [
    "Preguntas relacionadas con depósito/retiros",
    "Preguntas relacionadas con verificacíon de cliente",
    "Preguntas relacionadas con operaciones",
    "Problemas técnicos",
    "Solicitar una llamada telefónica",
    "Otro",
  ];
 
  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await dispatch(SuportSend(data))
    } catch (error) {
      alert('Error al comunicarse')
      console.log(error)
    }
  }
  const handleChange = (event) => {
    event.preventDefault();

    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  };

  React.useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
                   {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress color="primary"  />
        </div>
      ) : (
        <>
      <Identify/>
      <div className={styles.SupportContainer}>
        <div>

        <h1>Soporte al cliente</h1>
        <img src={image} alt="" />
        </div>
     
          <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <div className={styles.emailContainer}>
            <p>Su correo electrónico</p>

            <input
              name="email"
              value={data.email}
              onChange={handleChange}
             type="text"
              placeholder="Introduzca su correo electrónico" />
          </div>

         <br />
          <div className={styles.emailContainer}>
            <p>Asunto</p>

            <input 
                name="affair"
                value={data.affair}
                onChange={handleChange}
            type="text"
             placeholder="Introduzca su asunto"
              />
          </div>
          <div className={styles.message}>
            <p>Su mensaje</p>
            <textarea
              name="message"
              id=""
              value={data.message}
              onChange={handleChange}

              cols="30"
              rows="10"
              placeholder="Introduzca su mensaje"
            ></textarea>
          </div>
          <button className={styles.btn}>Enviar</button>
        </div>
        </form>

      </div>
      </>

      )}

    </div>
  );
}
