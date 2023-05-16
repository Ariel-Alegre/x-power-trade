import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./General.module.scss";
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
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#1976d2", }}  />
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

export default function General() {
  const [t, i18n] = useTranslation("global");
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2> {t("Faq.General")}</h2>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Faq.Located")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Faq.Description_Located")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Faq.Question2")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Faq.Description_Question2")} <a href="">+27 210 548 369</a>
              {t("Faq.Email")}
              {"  "}
              <a href="#6">support@ezinvest.com</a>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("Faq.Question3")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Faq.Name_trading")}</p>
            <p> {t("Faq.You_can")}</p>
            <p>{t("Faq.Trading")}</p>
            <p>– {t("Faq.Items1")}.</p>
            <p>– {t("Faq.Items2")}.</p>
            <p>– {t("Faq.Items3")}.</p>
            <p>– {t("Faq.Items4")}.</p>
            <p>– {t("Faq.Items5")}.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Faq.Question4")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Faq.Description_Question4")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Faq.Question5")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Faq.Res1")} <a href="">{t("Faq.here")}</a>. {t("Faq.Res1")}{" "}
              <a href="">{t("Faq.here")}</a>.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Faq.Question6")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Faq.Res6")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("Faq.Question7")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Faq.Res7")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Faq.Question8")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Faq.Res8")}
              <a href="#6"> {t("Faq.Policies")}</a>.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.RequestSupport}>
        <h6>Support</h6>
        <h3>Request Support</h3>
        <p>
          We’re here to help. No matter what financial questions you have, we’re
          here to work with you on your terms.
        </p>
        <div className={styles.BtnContainer}>
          <button>
            <span>CONTACT US</span>
          </button>
        </div>
        <div className={styles.SubTittles}>
          <strong>Headquarter</strong>
          <p>South Africa</p>
          <strong>Location</strong>
          <p>17 Midas Avenue, Olympus, Pretoria, Gauteng,0081 South Africa</p>
          <strong>Phone</strong>
          <p>+27 210 548 369</p>
          <strong>Email</strong>
          <p>support@sanusfinancial.com</p>
          <strong>Compliance email</strong>
          <p>compliance@sanusfinancial.com</p>
        </div>
      </div>
    </div>
  );
}
