import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Panel from "./components/Panel/Panel";
import Deposit from "./components/Deposit/Deposit";
import Withdraw from './components/Withdraw/Withdraw';
import Support from './components/Support/Support';
import Platforms from "./components/Platforms/Platforms";
import Regulation from "./components/Regulation/Regulation";
import Policies from "./components/Regulation/Policies/Policies";
import Legal from "./components/Regulation/Legal/Legal";
import AboutUs from "./components/About/AboutUs/AboutUs";
import Ezinvest from "./components/About/Ezinvest/Ezinvest";
import ContactUs from "./components/About/ContactUs/ContactUs";
import Faq from "./components/About/Faq/Faq";
import LoadMoreDeposit from "./components/About/Faq/Deposits/Load More Deposit/LoadMoreDeposit";
import LoadMoreAbout from "./components/About/Faq/About/Load More About/LoadMoreAbout";
import Safety from "./components/Trading/Safety/Safety";
import Deposits from './components/Trading/Deposit/Deposit';
import Accounts from "./components/Trading/Accounts/Accounts";
import Professional from "./components/Trading/Professional/Professional";
import TradingInstruments from "./components/TradingInstruments/Forex/TradingInstruments";
import Indices from "./components/TradingInstruments/Indices/Indices";
import Commodities from "./components/TradingInstruments/Commodities/Commodities";
import Crypto from "./components/TradingInstruments/Crypto/Crypto";
import Stock from "./components/TradingInstruments/Stock/Stock";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Personal from './components/Personal/Personal';
import DocumentSection from '../src/components/Document/Document';
import Test from './components/Test';
import HomeAdmin from './AdminPage/pages/home/HomeAdmin';
import LoginAdmin from './AdminPage/pages/login/LoginAdmin';
import List from './AdminPage/pages/list/List';
import Single from './AdminPage/pages/single/Single';
import New from './AdminPage/pages/new/New';
import Users from "./AdminPage/pages/list/List";
import DetailsUsers from "./AdminPage/pages/detailsUsers/DetailsUsers";




function App({ isAuthenticated, token }) {

  return (
    <div>
   
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/admin">
            <Route index element={<HomeAdmin />} />
              <Route path="user/:UserId" element={<DetailsUsers />} />
          
  
          </Route>
        
          <Route exact path="/test" element={<Test />} />

          <Route exact path="/auth/register" element={<Register />} />

            <Route exact path="/auth/login" element={<Login />} />
            <Route exact path="/dashboard" element={<Panel/>} isAuthenticated={isAuthenticated} token={token} />
            <Route exact path="/my-wallet/deposit" element={<Deposit />} />
            <Route exact path="/my-wallet/withdraw" element={<Withdraw />} />
            <Route exact path="/account-support" element={<Support />} />
            <Route exact path="/platforms" element={<Platforms />} />
            <Route exact path="/account-settings" element={<Personal />} />
            <Route exact path="/kyc-upload" element={<DocumentSection />} />


            
            <Route exact path="/" element={<Home />} />
            <Route exact path="/regulation" element={<Regulation />} />
            <Route exact path="/regulation/policies" element={<Policies />} />
            <Route exact path="/regulation/legal-information" element={<Legal />} />
            <Route exact path="/about/about-us" element={<AboutUs />} />
            <Route exact path="/about/why-xpowertrade" element={<Ezinvest />} />
            <Route exact path="/about/contact-us" element={<ContactUs />} />
            <Route exact path="/about/faq" element={<Faq />} />
            <Route exact path="/about/faq/deposits-withdrawals" element={<LoadMoreDeposit />} />
            <Route exact path="/about/faq/all-about-trading" element={<LoadMoreAbout />} />
            <Route exact path="/trading/safety-of-funds" element={<Safety />} />
            <Route exact path="/trading/trading-accounts/deposit-withdrawal" element={<Deposits />} />
            <Route exact path="/trading/trading-accounts" element={<Accounts />} />
            <Route exact path="/trading/professional-traders" element={<Professional />} />
            <Route exact path="/trading/trading-instruments/trading-forex" element={<TradingInstruments />} />
            <Route exact path="/trading/trading-instruments/trading-indices" element={<Indices />} />
            <Route exact path="/trading/trading-instruments/trading-commodities" element={<Commodities />} />
            <Route exact path="/trading/trading-instruments/trading-crypto" element={<Crypto />} />
            <Route exact path="/trading/trading-instruments/trading-stocks" element={<Stock />} />

          </Routes>
        </BrowserRouter>
      </div>
    
    </div>
  );
}

export default App;
