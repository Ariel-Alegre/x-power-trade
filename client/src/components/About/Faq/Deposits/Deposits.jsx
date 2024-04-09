import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./Deposits.module.scss";
import { useTranslation } from "react-i18next";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: ` 1.2px solid `,
  width: "750px",
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

export default function Deposits() {
  const [t, i18n] = useTranslation("global");

  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2> {t("Deposits.Tittle")}</h2>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Deposits.Question1")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Deposits.Res1")} <a href="/">{t("Deposits.Method")}</a>{" "}
              {t("Deposits.Res1_0")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Deposits.Question2")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Deposits.Res2")}</p>
            <p>
              {t("Deposits.Item1")}

              <br />
              {t("Deposits.Item2")}

              <br />
              {t("Deposits.Item3")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Deposits.Question3")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Deposits.Res3")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("Deposits.Question4")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Deposits.Res4")}</p>
            <p>
              {t("Deposits.item1")}

              <br />
              {t("Deposits.item2")}

              <br />
              {t("Deposits.item3")}

              <br />
              {t("Deposits.item4")}

              <br />
              {t("Deposits.Is_possible")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Deposits.Question5")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Deposits.Res51")}</p>
            <p>{t("Deposits.Res52")}</p>
            <p>{t("Deposits.Res53")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Deposits.Question6")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Deposits.Res6")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Deposits.Question7")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Deposits.Res7")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Deposits.Question8")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Deposits.Res8")}</p>
            <p>
              {t("Deposits.Res81")}

              <br />
              {t("Deposits.Res82")}

              <br />
              {t("Deposits.Res83")}

              <br />
              {t("Deposits.Res84")}
            </p>
          </AccordionDetails>
        </Accordion>
        <div className={styles.LoadsMores}>
          <a href="/about/faq/deposits-withdrawals">
            <strong>
              {t("Deposits.Load_more")}

              <div className={styles.Linea}></div>
            </strong>
          </a>
        </div>
      </div>
    </div>
  );
}
