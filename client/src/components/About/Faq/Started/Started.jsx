import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useTranslation } from "react-i18next";
import styles from "./Started.module.scss";

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

export default function Started() {
  const [t, i18n] = useTranslation("global");

  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.AccordionContainer}>
      <div className={styles.BoxContainer}>
        <h2> {t("Getting_Started.Tittle")}</h2>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Getting_Started.Res")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("Getting_Started.Question1")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res1")}{" "}
              <a href="">{t("Getting_Started.Link")}</a>{" "}
              {t("Getting_Started.Register")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question2")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res2")}{" "}
              <a href="">{t("Getting_Started.here")}</a>.
              {t("Getting_Started.res2.0")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("Getting_Started.Question3")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Getting_Started.Res3")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question4")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res4")} “{" "}
              <a href="">{t("Getting_Started.Change")}</a>”{" "}
              {t("Getting_Started.Res4_0")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question5")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res5")} <a href="#6">support@ezinvest.com</a>{" "}
              {t("Getting_Started.Res2_0")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question6")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res6")} <a href="#2">support@ezinvest.com</a>{" "}
              {t("Getting_Started.Res6_0")}
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question7")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Getting_Started.Res7")}</p>

            <p>
              "{t("Getting_Started.1")}
              <br />
              {t("Getting_Started.2")}"
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question8")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res8")} <a href="*">support@ezinvest.com</a>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("Getting_Started.Question10")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res10")} <a href="">support@ezinvest.com</a>.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question11")} </strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Getting_Started.Res11")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question12")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Getting_Started.Res12")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel13"}
          onChange={handleChange("panel13")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong> {t("Getting_Started.Question13")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>{t("Getting_Started.Res13")}</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel14"}
          onChange={handleChange("panel14")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <strong>{t("Getting_Started.Question14")}</strong>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t("Getting_Started.Res14")}{" "}
              <a href="">{t("Getting_Started.here")}</a>{" "}
              {t("Getting_Started.Res14_0")}{" "}
              <a href="">{t("Getting_Started.Professional")}</a>{" "}
              {t("Getting_Started.()")}
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
