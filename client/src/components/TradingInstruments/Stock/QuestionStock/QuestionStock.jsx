import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./QuestionStock.module.scss";

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

export default function QuestionStock() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2>Preguntas frecuentes sobre Acciones</h2>
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
                ¿Qué es el mercado de valores-acciones?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Una acción es un instrumento financiero que representa la
                propiedad de una empresa o corporación y un derecho proporcional
                a sus activos y ganancias.
                <br />
                Los traders compran y venden acciones para capitalizar las
                fluctuaciones diarias de los precios.
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
              <strong>¿Cómo puedo hacer trading de acciones?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Con EZInvest, comprar acciones es realmente fácil. Usted entra
                en su cuenta, busca las acciones con las que desea hacer trading
                , introduce el número de acciones que desea comprar y hace clic
                en comprar o ejecuta la orden de compra, como dirían los traders
                de verdad. Después de comprar las acciones, debe seguir su plan
                o estrategia de inversión. Puede planear conservar las acciones
                durante mucho tiempo o venderlas de inmediato, una vez que vea
                un aumento en su precio. Algunos traders pueden fijar el precio
                objetivo al que quieren vender la acción con beneficios o
                utilizar el stop-loss para fijar un precio al que quieren vender
                la acción en caso de comienzo de pérdidas.
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
              <strong>
                ¿A qué hora abre y cierra el mercado de valores/acciones?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                El horario habitual para hacer trading en el mercado de valores
                estadounidense (incluyendo la Bolsa de Nueva York y el Nasdaq)
                es de 9.30 a 16.00, hora del Este (EST) los días laborables.
                Pero a veces también se puede hacer trading fuera del horario
                normal de la bolsa.
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
              <strong>¿Cuáles son las acciones de primera línea?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                En cuanto a su rendimiento en el mercado, algunos valores
                reciben el estatus de “blue-chip”, que suelen obtener las
                empresas que obtienen los mejores resultados en el mercado.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
