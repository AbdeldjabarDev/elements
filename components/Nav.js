import Link from "next/link";
import { useRef, useState } from "react";

function Nav(props)
{
    let parentRef = useRef();
    let [isOpened,setIsOpened] = useState(false);
return(
<div className="shadow-sm w-[100%] h-fit bg-indigo-800 fixed z-50" style={{transition:"all 0.5s linear"}}>
<div className="flex w-full h-full k">
<div className="flex  h-fit "><div className="w-20 h-20 ml-0 absolute translate-y-[30%]   "><img src="/images/logo.png" className="ml-10 "></img></div><div className=" ml-[6vw] absolute text-white text-4xl lg:text-2xl translate-y-[50%] lg:translate-y-[70%] translate-x-[50%] font-semibold">Elements</div></div>
<ul className="lg:flex lg:flex-row hidden text-xl gap-14 mt-[1.6%] flex-wrap h-0 lg:h-full flex-col lg:mr-[20vw] mr-[10vw] ml-auto  ">
<li className="text-white lg:w-fit  text-opacity-80 hover:text-opacity-100"><Link href="/">Home</Link></li>
<li className="text-white lg:w-fit  text-opacity-80 hover:text-opacity-100"><Link href="/services">Services</Link></li>
<li className="text-white lg:w-fit  text-opacity-80 hover:text-opacity-100"><Link href="/portfolio">Portfolio </Link></li>
<li className="text-white lg:w-fit  text-opacity-80 hover:text-opacity-100"><Link href="/about">About</Link></li>
<li className="text-white lg:w-fit  text-opacity-80 hover:text-opacity-100 pb-10"><Link href="/news">News</Link></li> 
</ul>
<div className="w-20 h-[60%] mr-8 ml-auto mt-[0.5%] lg:hidden"><img className="w-full h-full" src="/images/menu.png" onClick={(e)=>{if(isOpened === true)
{
    console.log("close");
  // e.target.style.transform = "rotateX(-90deg)"
    parentRef.current.style.height ="0px"
    parentRef.current.style.paddingBottom="0px";
    setIsOpened(false)
}
if(isOpened === false)
{
    console.log("open");
    //e.target.style.transform = "rotateX(0deg)"
    parentRef.current.style.height="fit-content";
    parentRef.current.style.paddingBottom="40px";
    setIsOpened(true);
}

}}></img></div>
    </div>

<ul className="h-0 text-xl mt-2 lg:hidden gap-14 flex flex-col overflow-hidden" ref={parentRef} >
<li className="text-white lg:w-fit w-fit ml-auto mr-auto text-opacity-80 hover:text-opacity-100"><Link href="/">Home</Link></li>
<li className="text-white lg:w-fit w-fit ml-auto mr-auto text-opacity-80 hover:text-opacity-100"><Link href="/services">Services</Link></li>
<li className="text-white lg:w-fit w-fit ml-auto mr-auto text-opacity-80 hover:text-opacity-100"><Link href="/portfolio">Portfolio </Link></li>
<li className="text-white lg:w-fit w-fit ml-auto mr-auto text-opacity-80 hover:text-opacity-100"><Link href="/about">About</Link></li>
<li className="text-white lg:w-fit w-fit ml-auto mr-auto text-opacity-80 hover:text-opacity-100"><Link href="/news">News</Link></li> 
</ul>
</div>
    )
}
export default Nav;