import Footer from "../../Footer/Footer";
import Buttons from "../../Regulation/Button/Button";
import NavBar from "../../Regulation/Navbar/NavBar";
import AccountsCatered from "./AccountsCatered/AccountsCatered";
import BgAccounts from "./BgAccounts/BgAccounts";
import Info from "./Info/Info";

export default function Accounts() {
    return (
        <div>
            <NavBar/>
            <div>
                <BgAccounts/>
                <Info/>
                <AccountsCatered/>
            </div>
            <Footer/>
        </div>
    )
}