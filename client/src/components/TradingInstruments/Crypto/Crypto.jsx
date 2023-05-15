import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import AdventagesInvest from "./AdventagesInvest/AdventagesInvest";
import BGimage from "./BGimage/BGimage";
import Description from "./Description/Description";
import InvestCrypto from './InvestCrypto/InvestCrypto'

export default function Crypto() {
    return (
        <div>
           <NavBar/>
            <div>
                <BGimage/>
                <InvestCrypto/>
                <AdventagesInvest/>
                <Description/>

            </div>
            <Footer/>
        </div>
    )
}