import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NewsComp from "../components/News";
export default function News(props)
{
    return(
       <div className="flex flex-col">
        <Nav />
        <NewsComp></NewsComp>
        <Footer />
       </div>

    )
}