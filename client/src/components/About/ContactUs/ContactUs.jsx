import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import BGimage from './BGimage/BGimage'
import Contact from "./Contact/Contact";


export default function ContactUs() {
  return (
    <div>
        <NavBar />
        
      <div>
        <BGimage/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
