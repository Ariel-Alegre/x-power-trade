import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import styles from "./LoadMoreAbout.module.scss";
import Buttons from "../../../../Regulation/Button/Button";
import NavBar from "../../../../Regulation/Navbar/NavBar";
import BGimage from "../../../AboutUs/BGimage/BGimage";
import Footer from "../../../../Footer/Footer";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: ` 1.2px solid `,
  width: "1150px",
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

export default function LoadMoreAbout() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Buttons />

      <NavBar />
      <BGimage />
      <div className={styles.AccordionContainer}>
        <div className={styles.BoxContainer}>
          <h2>All About Trading</h2>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I open a new Live/demo account?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Login to your account
                <br />
                2. Select ‘trading platforms accounts’ tab within the My Account
                page
                <br />
                3. Click ‘Open now live account’or ‘free demo account’
                accordingly
                <br />
                4. Fill in the required details and click ‘Submit’.
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
              <strong>Can a friend/family member trade for me?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                No. Only the person who registers for the account can trade.
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
              <strong>What type of trading account did I open?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                In the My Account section you can see all your live, demo
                investment accounts.
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
              <strong>How many trading accounts can I open?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>As many as you wish under the subaccount options.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What currency can I open an account in?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>In EUR, GBP or USD.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What assets are available for trading?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You can find a full list of all the
                <a href="">Trading Instruments</a>
                we offer our home page.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Is headging available?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Yes.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What spreads do you offer?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You can find full information on our ‘{" "}
                <a href="">‘Trading Accounts‘</a> page.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What kind of leverage do you offer?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Leverage is fixed based on the asset and limited with 1:30
                maximum for retail clients.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What types of lots do you offer?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Standard, Mini and Micro.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What is the maximum volume I can trade?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Maximum volume per trade is 25.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What is a swap?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                This is a fee charged for keeping positions open on each
                instrument over a certain period of time (Overnight charge).
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>When are swaps calculated?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Between 23:59:45 – 00:00:00 (EET), from Monday to Friday.</p>
              <p>
                Any orders held from Wednesday to Thursday are charged three
                times as much due to the inclusion of weekend fees.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What are your Margin Call and Stop Out levels?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You can check out the different Margin Call and Stop Out Levels
                depending on the account type <a href="">here.</a>
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                Why can't I log in to my trading account on the MT4 platform?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Message: “no connection’ means you’ve selected the wrong server.
              </p>
              <p>
                Message: “invalid account” means you’ve entered the wrong
                ID/password.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel16"}
            onChange={handleChange("panel16")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What are your trading hours?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>24/5</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel17"}
            onChange={handleChange("panel17")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                What are the trading session times for all markets?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Asia: 00:00 – 9:00 (GMT)</p>
              <p>Europe: 08:00 – 17:00 (GMT)</p>
              <p>New York: 13:00 – 22:00 (GMT)</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel18"}
            onChange={handleChange("panel18")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                Can I trade during news releases and volatile markets?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Yes, however trading can be extremely risky at that time.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel19"}
            onChange={handleChange("panel19")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Do your spreads change during news releases?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Spreads are known to increase during volatile conditions, this
                does not happen from our side but depends on our liquidity
                providers.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel20"}
            onChange={handleChange("panel20")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What Market Analysis do you offer?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>– Live Economic Calendar.</p>
              <p>– Market News feed</p>
              <p>– Analyst views</p>
              <p>– WebTV</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel21"}
            onChange={handleChange("panel21")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Are trading signals available?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Yes, for specific accounts we offer daily independent third
                party analysis and signals.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel22"}
            onChange={handleChange("panel22")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I add a new indicator on MT4?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>For Windows PC:</p>
              <p>
                1. Download and install the indicator and log in to your trading
                platform.
                <br />
                2. Select the ‘Open data folder’ from the ‘File’ tab.
                <br />
                3. Click ‘MQL4’ and then ‘Indicators’ and drag the indicator
                from your desktop to the new folder that opens.
                <br />
                4. Exit your platform and log in again.
                <br />
                Check your Navigator Window to find your new indicator.
              </p>
              <p>For MAC/OS X:</p>
              <p>
                1. Go to the ‘Applications’ folder and right click (Command +
                click) on the trading platform icon.
                <br />
                2. Select ‘Show Package Contents’ and click ‘Drive C’.
                <br />
                3. Navigate to ‘Program Files’ and then to the relevant trading
                platform folder.
                <br />
                4. Select ‘MQL4’ and then click ‘Indicators’.
                <br />
                5. Drag and drop your indicator to the window that opens.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel23"}
            onChange={handleChange("panel23")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I open a new trade/position on MT4?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Select ‘Tools’ and then ‘New Order’ from within your trading
                platform.
              </p>
              <p>Complete the required information in the new window.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel24"}
            onChange={handleChange("panel24")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I close an open position on MT4?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Right/Double click on the trade you wish to close. 2. Once
                the order window opens, click ‘Close’ and then ‘OK’. You can
                view all closed positions in the ‘Account History’ tab.
                <br />
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel25"}
            onChange={handleChange("panel25")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                What should I do if there's a problem with a specific trade?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Contact us either by chat or email to{" "}
                <a href="">support@ezinvest.com </a> or{" "}
                <a href="">dealing@ezinvest.com</a>
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel26"}
            onChange={handleChange("panel26")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I place/change a Stop Loss/Trade Profit order on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You can set your Stop Loss/Take Profit in the new order window.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel27"}
            onChange={handleChange("panel27")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Why does my trade open with a negative value?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Because of the spread and commission being applied.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel28"}
            onChange={handleChange("panel28")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Why is my order greyed out when I open it on MT4?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Possible reasons:</p>
              <p>Your account is set to read-only.</p>
              <p>You are logged in using your read-only password.</p>
              <p>
                Your read-only password is the same as your trading account
                password.
              </p>
              <p>
                You haven’t made the minimum deposit required for that account.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel29"}
            onChange={handleChange("panel29")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                Can I long and short an instrument at the same time?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Yes, this is called ‘hedging’.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel30"}
            onChange={handleChange("panel30")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                What happens to my positions if I leave them open overnight?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Your position will remain open and will be rolled over (at a
                swap charge) to the next trading day.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel310"}
            onChange={handleChange("panel310")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                I suspect that someone has been placing trades on my behalf.
                What should I do?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                The first thing you should do is change your trading account
                password .
              </p>
              <p>Then you should take a look at your trading history:</p>
              <p>
                1. Click on the ‘Journal’ tab in your MT4 platform.
                <br />
                2. Within the ‘Journal’ tab, right click anywhere and select
                ‘Open’.
                <br />
                3. View your trading activity.
                <br />
                Please note that if you’re using the MT4 platform on more than
                one device, you will have to retrieve all log files in order to
                your entire
                <br />
                history.
                <br />
                If you need any help, please contact Customer Support.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel31"}
            onChange={handleChange("panel31")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How is my trading account equity calculated?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Equity = Balance + Credit + Profit/loss + Swap + Commission</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel320"}
            onChange={handleChange("panel320")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I calculate margin?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Margin = Notional value / Leverage</p>
              <p>Example: 1 lot EUR/USD at 1:500 Leverage:</p>
              <p>100,000 EUR / 500 = 200 EUR</p>
              <br />
              <br />
              <p>For metals = Volume * Contract Size * Open Price / Leverage</p>
              <p>Example: 1 lot XAUUSD: 1 * 100 * 1,263.14 / 500 = $252.63</p>
              <p>For shares = Volume * Contract Size * Open Price * Margin %</p>
              <p>For shares = Volume * Contract Size * Open Price * Margin %</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel32"}
            onChange={handleChange("panel32")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I calculate margin?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Free Margin = Equity – Used Margin</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel33"}
            onChange={handleChange("panel33")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How is the margin level calculated?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Margin Level = Equity/Margin Used x 100</p>
              <p>
                You can also calculate your margin level using our{" "}
                <a href="">Margin Calculator</a>.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel34"}
            onChange={handleChange("panel34")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I calculate swaps?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Swaps = Pip value x Number of lots x Swap rate x Number of
                nights
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel35"}
            onChange={handleChange("panel35")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I calculate the value of a pip?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                0.0001 or 0.01 x notional value (depends on the currency – 4th
                decimal for 5 decimal currencies and 2nd for 3 decimal
                currencies)
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel61"}
            onChange={handleChange("panel61")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What trading platforms are available?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>We offer the MT4, mobile tading and EZInvest Webtrader</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel36"}
            onChange={handleChange("panel36")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>What operating system (OS) do I need for the MT4?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Windows: Windows 7 and onwards.</p>
              <p>Mac: Mac OS X and onwards.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel37"}
            onChange={handleChange("panel37")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How to install the MT4 platform?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Select the trading platform in the ‘Trading Platforms’
                section in and click <a href="">Launch</a>.
                <br />
                2. Save the downloaded file and double click to open.
                <br />
                3. Click ‘Run’ and allow the program to run.
                <br />
                4. Read and accept the terms and conditions
                <br />
                5. Click ‘Next’ to finalise the installation
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel38"}
            onChange={handleChange("panel38")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                What should I do if I get the error 'Unidentified developer -
                app cannot be opened'?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Go to the ‘Security and Privacy’ section in System
                Preferences.
                <br />
                2. Click on the lock icon and enter your pc username and
                password.
                <br />
                3. Click on the ‘General’ tab and select ‘Anywhere’ in the
                ‘Allow applications downloaded from’ setting.
                <br />
                4. Click on ‘Allow from anywhere’ in the pop-up window that
                appears.
                <br />
                5. Re-run the application.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel39"}
            onChange={handleChange("panel39")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>Can I save a second MT4 platform on my computer?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Yes you can, by installing it to a different location.</p>
              <p>
                After following the first 4 steps from ‘How to install the MT4
                on a Windows PC’ continue with the steps below:
              </p>
              <p>
                1. Instead of ‘Next’ click on ‘Settings’.
                <br />
                2. Click ‘Browse’ and select a different/new folder to save your
                platform and click ‘OK’.
                <br />
                3. It is recommended that you change the name of your folder
                from the ‘Program Group’ field.
                <br />
                4. Click ‘Next’ to finalise the installation.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel59"}
            onChange={handleChange("panel59")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                Where can I find my trading account login details for MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                You can find your trading account number and password in the
                email you received after opening the account.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel40"}
            onChange={handleChange("panel40")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I log into my trading platform on MT4?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Select the ‘Login’ option in the ‘File’ menu after opening
                your platform.
                <br />
                2. Enter your account number and password.
                <br />
                3. Select the appropriate server and click ‘Login’.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel57"}
            onChange={handleChange("panel57")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I see all instruments on the trading platform on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Simply select any currency symbol from the Market Watch window
                and then select ‘Show All’.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel58"}
            onChange={handleChange("panel58")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                What is the 'Volume' option in the 'New order' box for on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                For entering the size of the position you want to enter. Volume
                is measured in lots.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel55"}
            onChange={handleChange("panel55")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                Why do I get the error message 'not enough money' on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>Because you don’t have enough free margin.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel42"}
            onChange={handleChange("panel42")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                Why do I get the error message 'invalid parameters' on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                The selected Lot size and Stop Loss/Take Profit is incorrect.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel43"}
            onChange={handleChange("panel43")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>How can I enable news on my platform on MT4?</strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Login to the platform and go to the ‘Tools’ section.
                <br />
                2. Click ‘Options’ then ‘Server’.
                <br />
                3. Select the ‘Enable News’ box and click ‘OK’.
                <br />
                Please note that news tab may require additional CPU usage,
                which could potentially slow down your platform, during periods
                of heavy
                <br />
                economic announcements.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel44"}
            onChange={handleChange("panel44")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I view and save my trading account history on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Log in to your trading platform and press Ctrl+T.
                <br />
                2. In the ‘Terminal’ window that appears select ‘Account
                History’ and right click anywhere in the new window.
                <br />
                3. Select or customise the timeframe.
                <br />
                To save your history:
                <br />
              </p>
              <p>
                1. Select ‘Save as Report’ or ‘Save as Detailed Report’ after
                right clicking on the ‘Account History’ window.
                <br />
                2. Choose the file destination and click ‘Save’.
                <br />
                Please note that your history will be saved as an .html file and
                it can be viewed by dragging the file into your browser window.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel45"}
            onChange={handleChange("panel45")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I get the quote history for a particular currency pair
                on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                1. Open the MT4 platform and click ‘Tools’.
                <br />
                2. Select ‘History Center’ and double click on the currency
                pair.
                <br />
                If you the currency pairs don’t appear double click on one of
                the on one of the currency categories (FX Majors, FX Minors, FX
                Exotics).
                <br />
                3. Click ‘Download’.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel46"}
            onChange={handleChange("panel46")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I view the full history on a specific chart on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>First you need to enable chart auto-scroll:</p>
              <p>
                1. Right click anywhere on the chart and select ‘Properties’.
                <br />
                2. From the ‘Common’ tab select the ‘Chart auto-scroll’ option
                and click ‘OK’.
                <br />
                To view the full history:
              </p>

              <p>
                1. Select ‘Options’ in the ‘Tools’ tab.
                <br />
                2. In the ‘Charts’ you will see a field ‘Max bars in chart’.
                <br />
                3. Enter the number 9999999999999 in the field and press ‘OK’.
                <br />
                You will then be able to scroll through the history with either
                the ‘PgUp’ button or the left arrow key.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel47"}
            onChange={handleChange("panel47")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I download my MT4 trading platform to my iPhone/iPad?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                iPhone/iPad: Search for the platform within the App Store and
                click ‘Get’.
              </p>
              <p>
                Android: Search for the platform within the Play Store and click
                ‘Install’ then ‘Accept’.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel48"}
            onChange={handleChange("panel48")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                What does the error message 'Authorisation Failed' mean on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>That your user ID/password is incorrect.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel51"}
            onChange={handleChange("panel51")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I download my MT4 trading platform to my iPhone/iPad?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                iPhone/iPad: Search for the platform within the App Store and
                click ‘Get’.
              </p>
              <p>
                Android: Search for the platform within the Play Store and click
                ‘Install’ then ‘Accept’.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel49"}
            onChange={handleChange("panel49")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I close/modiy my order on my iPhone/iPad on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                From the ‘Trade’ tab, press and hold the order. Then, select the
                action you want to take from the pop-up box that appears.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel50"}
            onChange={handleChange("panel50")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <strong>
                How can I view more trading instruments on my mobile on MT4?
              </strong>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Select the ‘+’ symbol on the top of your application select the
                category and trading instruments you want to view.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
