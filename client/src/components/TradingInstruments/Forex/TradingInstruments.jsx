import NavBar from '../../Regulation/Navbar/NavBar';
import Footer from '../../Footer/Footer';
import BgImage from './BGimage/BGimge';
import ForexTrading from './ForexTrading/ForexTrading';
import Advantages from './Advantages/Advantages';
import Learn from './Learn/Learn';
import QuestionsForex from './QuestionsForex/QuestionsForex'

export default function TradingInstruments() {
    return (
        <div>
            <NavBar/>
            <div>
                <BgImage/>
                <ForexTrading/>
                <Advantages/>
                <Learn/>
                <QuestionsForex/>
            </div>
            <Footer/>
        </div>
    )
}