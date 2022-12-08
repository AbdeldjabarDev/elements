import { useRef } from "react"

export default function ImgContainer(props)
{
const conRef = useRef();
return(
<div className="relative w-[100%]  h-[80%] lg:w-fit"onMouseEnter={(e)=>{conRef.current.style.transform ="scale(1,1)"}} onMouseLeave={(e)=>{conRef.current.style.transform ="scale(0,0)"}}>
<div className="absolute flex w-[80%] h-[85%] ml-[10%] mr-[5%] mt-[5%] mb-[5%]  bg-blue-600 p-1 rounded-md opacity-80"  style={{top:"0",left:"0",transition:"transform 0.25s",transform:"scale(0,0)"}} ref={conRef}>
<div className="w-[15%] h-[15%] ml-auto mr-auto mt-[30%] cursor-pointer bg-white rounded-full opacity-100">  <img src="/images/link.png" className=" ml-auto mr-auto mt-[10%]"></img></div>
</div>
<img src={props.src} className="m-3 w-full lg:w-fit" ></img>
</div>
)
}