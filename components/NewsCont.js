export default function NewsCont(props)
{
    return(
    <div className="flex h-[90%] lg:w-[30%] w-[100%] mt-10 flex-col ">
    <img className="w-full h-[40%]" src={props.src}></img>
    <div className="flex gap-8 mt-2 mr-6 ml-auto">
        <img className="" src="/images/like.png"></img>
        <img className="" src="/images/comment.png"></img>
        <img className="" src="/images/share.png"></img>
        
    </div>
    <h1 className="font-bold text-2xl ml-4">Elements Good Design</h1>
    <p className="w-[95%] font-sans ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta alias repudiandae dolorum veritatis tempora ut accusamus sit magni, maxime temporibus atque modi nesciunt quod pariatur culpa possimus facilis unde!</p>
    <p className="cursor-pointer font-semibold text-blue-600 hover:text-black text-lg mt-8 ml-4">Read more</p>
    </div>)
}