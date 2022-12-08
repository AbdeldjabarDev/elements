import TextLine from "./TextLine"
export default function ContactComp(props)
{
    return(
    <div className="flex flex-col w-[80%] ml-auto mr-auto   mt-20 h-[80%]">
        
    <div className="mr-auto w-[100%] lg:w-[40%] ml-auto mb-10"><TextLine text="Contact Us" color="bg-blue-700"></TextLine></div>
    <div className="flex flex-wrap gap-6">
    <div className="float-left flex flex-col gap-6 mt-16 w-[100%] lg:w-[45%] ">
    <input className="w-full border-b border-b-black focus:outline-none pl-2" placeholder="Name"></input>
    <input className="w-full border-b border-b-black focus:outline-none pl-2" placeholder="Email" type="email"></input>
    <input className="w-full border-b border-b-black focus:outline-none pl-2" placeholder="Phone Number" type={"tel"}></input>
    <input className="w-full border-b border-b-black focus:outline-none pl-2 mt-10"  placeholder="Message"></input>
    <div className="w-[40%] lg:w-[15%] bg-blue-600 text-white hover:bg-blue-700 rounded-full text-center mt-[15%] lg:mt-[3%] ml-4 pt-3 pb-3 ">Send</div>
</div>
<div className="lg:w-[45%] w-[100%] mt-20 lg:mt-0">
<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="300" frameBorder="0" style={{"border":"0", "width": "100%"}} allowFullScreen=""></iframe>
</div>
</div>


    </div>)
}