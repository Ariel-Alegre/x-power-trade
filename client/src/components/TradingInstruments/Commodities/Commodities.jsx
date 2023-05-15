import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import BGimage from "./BGimage/BGimage";
import InvestCommodities from "./InvestCommodities/InvestCommodities";
import AdventageCommodities from "../Commodities/AdventageCommodities/AdventageCommodities";
import Learn from '../Forex/Learn/Learn';
import QuestionsCommodities from "./QuestionsCommodities/QuestionsCommodities";


export default function Commodities() {
    return (
        <div>
            <NavBar/>
            <div>
                <BGimage/>
                <InvestCommodities/>
                <AdventageCommodities/>
                <Learn/>
                <QuestionsCommodities/>
            </div>
            <Footer/>
        </div>
    )
}