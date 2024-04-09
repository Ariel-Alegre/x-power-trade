import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./About.module.scss";
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

export default function About() {
  const [t, i18n] = useTranslation("global");

  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2>{t("All_About_Trading.Tittle")}</h2>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("All_About_Trading.Question1")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("All_About_Trading.Res1")}
              <br />
              {t("All_About_Trading.Res2")}
              <br />
              {t("All_About_Trading.Res3")}
              <br />
              {t("All_About_Trading.Res4")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("All_About_Trading.Question2")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("All_About_Trading.Response2")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("All_About_Trading.Question3")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("All_About_Trading.Response3")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("All_About_Trading.Question4")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("All_About_Trading.Response4")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("All_About_Trading.Question5")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("All_About_Trading.Response5")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("All_About_Trading.Question6")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("All_About_Trading.Response6")}{" "}
              <a href=""> {t("All_About_Trading.Instruments")}</a>{" "}
              {t("All_About_Trading.Home")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("All_About_Trading.Question7")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("All_About_Trading.Response7")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("All_About_Trading.Question8")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("All_About_Trading.Response8")}
              <a href=""> {t("All_About_Trading.Accounts")}</a>
              {t("All_About_Trading.Link")}
            </p>
          </AccordionDetails>
        </Accordion>
        <div className={styles.LoadsMores}>
          <a href="/about/faq/all-about-trading">
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
