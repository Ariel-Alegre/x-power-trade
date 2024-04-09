import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./QuestionsForex.module.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: ` 1.2px solid `,
  width: "70rem",
  "": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#1976d2" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function QuestionsForex() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2>Preguntas frecuentes sobre Forex</h2>
        <div className={styles.BoxAccordion}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong className={styles.Focus}>
                ¿Qué es el trading de divisas?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Forex significa cambio de divisas, por lo que el trading de
                divisas en línea no es más que el trading de moneda extranjera.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>¿Cómo invertir en forex?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                El hacer trading de divisas se basa en el hecho fundamental de
                que si se envía dinero a otro país en una condición de mercado
                específica, y luego se recibe el dinero de vuelta en una
                condición diferente, se terminará obteniendo una ganancia o una
                pérdida de capital. Así que, finalmente, a través de esto, la
                gente hace trading con sus dólares para obtener un beneficio.
              </p>
              <p>
                El trading de divisas es tanto accesible, interesante, como
                educativo y ofrece a los traders un sinfín de oportunidades.
                Comience a hacer trading de divisas, uno de los mercados más
                dinámicos del mundo en términos de transacciones.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>¿Cuál es el horario del mercado de Forex?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                El mercado de Forex está abierto desde las 22:00 GMT del domingo
                (apertura de la sesión de trading australiana) hasta las 22:00
                GMT del viernes (cierre de la sesión de trading de EE. UU.).
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>¿Cuáles son las posiciones largas y cortas?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Una posición larga es una posición de compras, lo que significa
                que esta posición tendrá ganancias si el tipo de cambio sube.
                Una posición corta es una posición de venta, lo que significa
                que esta posición tendrá ganancias si la tasa de cambio baja.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
