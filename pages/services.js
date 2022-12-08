import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ServicesComp from "../components/Services";
export default function Services(props)
{
    return(
        <div className="flex flex-col">
            <Nav></Nav>
            <ServicesComp></ServicesComp>
            <Footer></Footer>
        </div>
    )
}