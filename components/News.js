import NewsCont from "./NewsCont";
import TextLine from "./TextLine";
export default function NewsComp(props)
{
    return(
<div className="relative flex flex-col ml-auto mr-auto lg:w-[80%] w-[100%]  mt-[10%]">
<div className='flex absolute mb-10 w-[100%]' style={{top:"0",right:"5%"}}>
<div className="mr-[2%] ml-auto w-[90%] lg:w-fit">
<TextLine text="Latest News" color="bg-blue-700" ></TextLine>
</div>
</div>
<div className="flex lg:gap-8 mt-10 flex-col lg:flex-row">
<NewsCont src="/images/n-1.jpg"></NewsCont>
<NewsCont src="/images/n-2.jpg"></NewsCont>
<NewsCont src="/images/n-3.png"></NewsCont>
</div>

</div>
    )
}