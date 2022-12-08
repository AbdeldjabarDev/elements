import NewsCont from "./NewsCont";

export default function NewsComp(props)
{
    return(
<div className="relative flex flex-col ml-auto mr-auto lg:w-[80%] w-[100%] border-[2px] border-black mt-[25%]">
<div className='flex absolute mb-10 w-[100%]' style={{top:"0",right:"5%"}}>
<div className='w-[52%] h-[5px] bg-blue-600  mb-10 inline-block justify-end mt-5 mr-3'></div>
<p className='text-black font-bold text-3xl font-sans'>Latest News</p>
</div>
<div className="flex lg:gap-8 mt-10 flex-col lg:flex-row">
<NewsCont src="/images/n-1.jpg"></NewsCont>
<NewsCont src="/images/n-2.jpg"></NewsCont>
<NewsCont src="/images/n-3.png"></NewsCont>
</div>

</div>
    )
}