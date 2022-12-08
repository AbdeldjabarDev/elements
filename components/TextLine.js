export default function TextLine(props)
{
   if(props.direction === 1)
   {
    return(
        <div className="flex flex-col h-[10vh] ">
              <div className='flex h-fit'>
        <p className={'font-bold text-3xl font-sans' }>{props.text}</p>
        <div className={'md:w-72 w-0 h-[5px] inline-block justify-end mt-5 ml-4 mr-3 ' +  'bg-blue-700'}></div>
        </div>
        <div className={props.color==="bg-white" ? "text-white" : "text-black"}>{props.subline}</div>
            
        </div>
      )
   }
   else
   {
    return(
        <div className="flex flex-col h-[10vh]  ">
        <div className='flex'>
        <div className={'lg:w-72 w-[40%] h-[5px] inline-block justify-end mt-5 ml-4 mr-3 ' + props.color || 'bg-blue-700'}></div>
  <p className='text-black font-bold text-3xl font-sans'>{props.text}</p>
  </div>
      <div className={props.color==="bg-white" ? "text-white" : "text-black"}>{props.subline}</div></div>
        )
   }
}