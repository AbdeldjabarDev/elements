export default function TextLine(props)
{
   if(props.direction === 1)
   {
    return(
        <div className="flex flex-col h-[10vh] w-[100vw] lg:w-fit ">
        <div className='flex h-fit w-full '>
        <p className={'font-bold text-2xl lg:text-3xl font-sans' }>{props.text}</p>
        <div className={'lg:w-72 w-[57%] h-[5px] inline-block justify-end lg:mt-5 mt-3 ml-4 mr-3 ' +  'bg-blue-700'}></div>
        </div>
        <div className={props.color==="bg-white" ? "text-white" : "text-black"}>{props.subline}</div>
            
        </div>
      )
   }
   else
   {
    return(
        <div className="flex flex-col h-[10vh] w-[100vw] lg:w-fit  ">
        <div className='flex'>
        <div className={'lg:w-72 w-[57%] h-[5px] inline-block justify-end lg:mt-5 mt-3 lg:ml-4 lg:mr-3 mr-2 ' + props.color || 'bg-blue-700'}></div>
  <p className='text-black font-bold text-2xl lg:text-3xl font-sans'>{props.text}</p>
  </div>
      <div className={props.color==="bg-white" ? "text-white" : "text-black"}>{props.subline}</div></div>
        )
   }
}