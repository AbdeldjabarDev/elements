import ServiceCont from "./ServiceCont";
import TextLine from "./TextLine";

export default function ServicesComp(props)
{
    return(
<div className="relative w-[100%] lg:h-fit h-fit pb-10 mb-20  ml-auto mr-auto  dark:border-white mt-[15vh]" style={{backgroundImage:"url('/images/service-bg.jpg')"}}>
    <div className="float-right">   <div className="flex flex-col h-[10vh] ">
              <div className='flex h-fit mr-5 ml-auto'>
              <div className={'md:w-72 w-0 h-[5px] inline-block justify-end mt-5 ml-4 mr-3 ' +  'bg-white'}></div>
        <p className={'font-bold text-4xl font-sans text-white '}>Services</p>
        
        </div>
        <div  className="float-right text-xl text-white font-[poppins] mr-5 mb-5 ml-auto">There are many variations of passages of Lorem Ipsum available, but the majority</div>
            
        </div></div>

<div className="flex gap-10 w-[100%] lg:h-fit justify-center ml-auto mr-auto flex-wrap ">
<ServiceCont src="/images/s-1.png" index={1} title="Web"/>
<ServiceCont src="/images/s-2.png" index={2} title="Graph Design"/>
<ServiceCont src="/images/s-3.png" index={3} title="Vector Design"/>
<ServiceCont src="/images/s-4.png" index={4} title="Draw"/>
<ServiceCont src="/images/s-5.png" index={5} title="Cloud"/>




</div>
{/* <button className="lg:hidden  w-[10%] bg-black hover:bg-transparent hover:text-black border border-black h-fit p-2 rounded-full text-white ml-auto mr-auto">Read More</button>
<button className="mt-28 hidden w-[10%] bg-black hover:bg-transparent hover:text-black border border-black h-fit p-2 rounded-full text-white ml-auto mr-auto">Read More</button> */}
</div>
    )
}