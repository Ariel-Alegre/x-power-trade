import Footer from '../../Footer/Footer';
import Buttons from '../../Regulation/Button/Button';
import NavBar from '../../Regulation/Navbar/NavBar';
import BGimage from '../AboutUs/BGimage/BGimage';
import Accordions from './Accordion';
export default function Faq() {
    return(
        <div>
            <NavBar/>
            <BGimage/>
            <div > 
                <Accordions/>
            </div>
            <Footer/>
        </div>
    )
}