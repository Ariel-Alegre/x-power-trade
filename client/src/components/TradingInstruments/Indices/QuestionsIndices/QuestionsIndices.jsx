import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./QuestionsIndices.module.scss";

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

export default function QuestionsIndices() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2>Preguntas frecuentes sobre índices</h2>
        <div className={styles.BoxAccordion}>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong className={styles.Focus}>¿Qué son los índices?</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Probablemente sepa que un índice bursátil es una parte sumamente
              importante del mundo financiero, pero no es más que un número que
              representa los
              <br />
              principales valores de una bolsa determinada.
            </p>
            <p>
              Hacer trading con índices permite a los inversores beneficiarse de
              los picos colectivos de lo que es una versión más pequeña de todo
              un mercado. Dependiendo del índice seleccionado, el índice
              representa una tendencia global del mercado que podría no ser
              percibida en una sola acción. Esto significa que los riesgos están
              repartidos. En general, se sabe que cada uno de estos índices
              genera un beneficio global con mucha más frecuencia de lo que se
              cree.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>¿Cómo decidir con qué índices hacer trading?</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Al decidir sobre el índice o índices con los que le gustaría hacer
              trading, es importante que comprenda cómo y por qué se mueven los
              precios dentro de un mercado elegido. Las noticias e
              investigaciones de mercado pueden ayudarle a identificar ciertas
              tendencias y detectar oportunidades para hacer trading
              correctamente.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>¿Por qué hacer trading en índices?</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Si quiere invertir en los principales centros financieros del
              mundo y explorar diversas estrategias de inversión, es el momento
              de acceder a los principales índices bursátiles internacionales.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
</div>
  );
}
