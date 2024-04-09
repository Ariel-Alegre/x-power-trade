import styles from "./Support.module.css";
import image from "../../image/trading2png.avif";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Identify from '../Identify/Identify'
import CircularProgress from "@mui/material/CircularProgress";

export default function Support() {
  const [loading, setLoading] = React.useState(true);

  const theme = useTheme();
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [personName, setPersonName] = React.useState([]);
  const names = [
    "Preguntas relacionadas con depósito/retiros",
    "Preguntas relacionadas con verificacíon de cliente",
    "Preguntas relacionadas con operaciones",
    "Problemas técnicos",
    "Solicitar una llamada telefónica",
    "Otro",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
        <>
      <Identify/>
      <div className={styles.SupportContainer}>
        <h1>Soporte al cliente</h1>
        <img src={image} alt="" />
        <div className={styles.btnContainer}>
          <div>
            <button>
              <AiOutlineMail className={styles.icons} />
              Envienos un correo
            </button>
          </div>
          <div>
            <button>
              <BsTelephone className={styles.icons} />
              Reciba una llamada
            </button>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.emailContainer}>
            <p>Su correo electrónico</p>

            <input type="text" placeholder="Introduzca su correo electrónico" />
          </div>
          <div className={styles.asuntoContainer}>
            <p>Asunto</p>
          </div>
          <FormControl>
            <Select
              className={styles.formSelect}
              displayEmpty
              value={personName}
              onChange={handleChange}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Introduzca el título de su mensaje</em>;
                }

                return selected.join(", ");
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              {names.map((name) => (
                <MenuItem
                  className={styles.selectP}
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={styles.message}>
            <p>Su mensaje</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Introduzca su mensaje"
            ></textarea>
          </div>
          <button className={styles.btn}>Enviar</button>
        </div>
      </div>
      </>

      )}

    </div>
  );
}
