import NavBar from '../../Regulation/Navbar/NavBar';
import Footer from '../../Footer/Footer';
import BGimage from './BGimage/BGimage';
import Invest from './Invest/Invest';
import AdventagesInvest from "./AdventagesIndices/AdventagesInvest";
import Learn from '../Forex/Learn/Learn'
import QuestionsIndices from './QuestionsIndices/QuestionsIndices';

export default function Indices() {
    return (
        <div>
            <NavBar/>
            <div>
                <BGimage/>
                <Invest/>
                <AdventagesInvest/>
                <Learn/>
                <QuestionsIndices/>

            </div>
            <Footer/>
        </div>
    )
}

