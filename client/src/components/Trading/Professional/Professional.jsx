import Footer from "../../Footer/Footer";
import Buttons from "../../Regulation/Button/Button";
import NavBar from "../../Regulation/Navbar/NavBar";
import BGImage from "./BGImage/BGImage";
import Check from "./Check/Check";
import TakeALook from "./TakeALook/TakeALook";
import TradingPro from "./TradingPro/TradingPro";

export default function Professional() {
    return (
        <div>
            <NavBar/>
            <BGImage/>
            <div>
                <TradingPro/>
                <TakeALook/>
                <Check/>
            </div>

            <Footer/>
        </div>
    )
}