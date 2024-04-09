import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./QuestionsCommodities.module.scss";

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

export default function QuestionsCommodities() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2>Preguntas frecuentes sobre materias primas</h2>
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
                ¿Qué es el mercado de materias primas?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                El trading de materias primas es muy popular, ya que ofrece un
                gran número de opciones y la oportunidad de invertir en una
                amplia gama de productos. Se trata de un mercado físico o
                virtual para comprar, vender y hacer trading de materias primas
                o productos primarios. Para los objectivos de los inversores,
                existen actualmente unos 50 grandes mercados de materias primas
                en todo el mundo que facilitan la inversión en casi 100
                productos primarios.
              </p>
              <p>
                Las materias primas se dividen en dos tipos: materias primas
                duras y blandas. Las materias primas duras son típicamente
                recursos naturales que deben extraerse (oro, caucho, petróleo,
                etc.), mientras que las materias primas blandas son productos
                agrícolas o ganaderos (maíz, trigo, café, azúcar, soja, carne de
                cerdo, etc.)
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
              <strong>¿Cómo invertir en materias primas?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Hay muchas maneras de invertir en materias primas. Un inversor
                puede comprar acciones de empresas cuya actividad depende de los
                precios de las materias primas o adquirir fondos de inversión,
                fondos indexados o fondos cotizados (ETF) centrados en empresas
                relacionadas con las materias primas. La forma más directa de
                invertir en materias primas es la compra de un contrato de
                futuros.
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
              <strong>¿Qué son los contratos de futuros?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Un contrato de futuros es un acuerdo entre dos partes para
                comprar o vender un activo en un momento determinado del futuro
                y por un precio
                <br />
                determinado. Normalmente se hacen por medio de bolsa. La bolsa
                especifica ciertas características estandarizadas del contrato.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
