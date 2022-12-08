import ImgContainer from "./ImgContainer";
import TextLine from "./TextLine";

export default function PortfolioComp(props)
{
    return(
<div className="w-[100%] lg:w-[80%] ml-auto mr-auto mt-[15vh]">
<TextLine direction={1} text="Portfolio" subline="There are many variations to " color="bg-black"></TextLine>
<div className="flex flex-col flex-wrap w-full lg:flex-row" style={{}}>
<ImgContainer src="/images/p-1.jpg"/>
<ImgContainer src="/images/p-2.jpg"/>
<ImgContainer src="/images/p-3.jpg"/>
<ImgContainer src="/images/p-4.jpg"/>
<ImgContainer src="/images/p-5.jpg"/>
<ImgContainer src="/images/p-6.jpg"/>
</div>
</div>
    )
}