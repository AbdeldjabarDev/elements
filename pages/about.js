import AboutComp from "../components/About"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default function About(props)
{
 return(<div className="flex flex-col ">
 <Nav></Nav>
 <AboutComp></AboutComp>
 <Footer></Footer>
 </div>) 
}