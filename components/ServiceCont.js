export default function ServiceCont(props)
{
    return(
    <div className="h-[25vh] lg:h-[80%] lg:w-[15%] w-[40%] ml-[30%] mr-[30%] lg:mr-0 lg:ml-10 mt-[5%] flex flex-col  ">
        <div className="relative bg-white w-full h-[23vh] ">
        <img src={props.src} className="lg:w-fit lg:h-fit w-[40%] h-[40%] ml-auto mr-auto  absolute " style={{top:"50%",left:"50%"
        ,transform:"translate(-50%,-50%)"}} onMouseEnter={(e)=>{ 
    e.target.src = "/images/"+"s" + props.index  + "-blue.png";
}}

onMouseLeave={(e)=>{
    e.target.src ="/images/" +"s-" + props.index  + ".png";
}}></img>
        </div>
    <div className="lg:text-xl font-semibold ml-auto mr-auto  text-3xl mt-0 text-white">{props.title}</div>
    </div>)
}