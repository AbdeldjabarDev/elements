import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PortfolioComp from "../components/Portfolio";

export default function Portfolio(props)
{
return (<div className="flex flex-col">
    <Nav></Nav>
    <PortfolioComp></PortfolioComp>
    <Footer></Footer>
</div>

)  
}