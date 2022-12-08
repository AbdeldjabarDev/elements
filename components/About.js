export default function AboutComp(props)
{
   
return(
    <div className='flex ml-auto mr-auto w-[100%]  flex-row mt-20 mb-20 flex-wrap lg:flex-nowrap mt-[15vh]'>
<div className='mt-[10%] lg:w-[50%] w-[100%]'>
<p className='text-black text-opacity-30 block lg:text-lg text-3xl font-semibold mb-[2%]'>ABOUT</p>
<div className='flex'>
<p className='text-black font-bold text-2xl font-sans'>WEB ELEMENTS</p>
<div className='w-[40%] h-[5px] bg-blue-600  mb-10 inline-block justify-end mt-3 ml-5'></div>
</div>
<p className='sm:w-[90%] text-lg mt-[4%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </p>
<button className='mt-10 lg:w-[20%] w-[40%] text-lg bg-black hover:bg-transparent hover:text-black h-fit p-2 rounded-full text-white'>Read more</button>
</div>
<div className='w-[60%] h-[100%] mt-20 lg:mt-0'> 
<img src="/images/about-img.png"></img>
</div>
</div>
)
  
 
}