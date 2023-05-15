import Footer from "../../Footer/Footer";
import NavBar from "../../Regulation/Navbar/NavBar";
import AdventageStock from "./AdventageStock/AdventageStock";
import BGImage from "./BGImage/BGImage";
import InvestStock from "./InvestStock/InvestStock";
import Learn from "../Forex/Learn/Learn";
import QuestionStock from "./QuestionStock/QuestionStock";

export default function Stock() {
  return (
    <div>
      <NavBar />
      <div>
        <BGImage />
        <InvestStock />
        <AdventageStock />
        <Learn />
        <QuestionStock />
      </div>
      <Footer />
    </div>
  );
}
