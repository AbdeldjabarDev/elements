import { useRef, useState } from "react";
export default function Carouseler(props) {
  let conRef = useRef();
  let [itemIndex, setItemIndex] = useState(0);
  let children = [
    <div className="w-full h-full " key={1}>
      <img src="/images/slider-img.jpg" className="w-full h-full -z-10"></img>
    </div>,
    <div className="w-full h-full " key={2}>
      <img src="/images/slider-img.jpg" className="w-full h-full -z-10"></img>
    </div>,
    <div className="w-full h-full  "  key={3}>
      <img src="/images/slider-img.jpg" className="w-full h-full -z-10"></img>
    </div>,
    <div className="w-full h-full  "  key={4}>
      <img src="/images/slider-img.jpg" className="w-full h-full -z-10"></img>
    </div>,
  ];
  let controls = [
    <div
      className="lg:w-10 lg:absolute  lg:h-10 w-[50px] h-[50px]  lg:ml-0 lg:top-[calc(58%-50px)] lg:left-[48.5vw] ml-[55%] translate-y-[-50%] lg:mt-0 rounded-full bg-blue-700 absolute flex content-center  "
      style={{
        backgroundImage: "url('/images/next.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>,
    <div
      className="lg:w-10 lg:h-10 w-[50px] lg:absolute h-[50px] lg:mt-0  lg:ml-0 lg:top-[58%] lg:left-[47.5vw] ml-[40%] translate-y-[-50%] rounded-full bg-white flex content-center absolute  z-20"
      style={{
        backgroundImage: "url('/images/prev.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>,
  ];
  if (controls) {
    return (
      <div className={" " + props.tailwind}>
        <div className="flex flex-col lg:flex-row">
          {props.before}
          <div
            className="z-20"
            onClick={(e) => {
              console.log("control clicked : right");
              if (itemIndex < 0) {
                setItemIndex(0);
                return;
              }
              if (itemIndex == children.length - 1) {
                return;
              }
              setItemIndex(itemIndex + 1);
            }}
          >
            {controls[0]}
          </div>
          <div
            className="z-20"
            onClick={(e) => {
              console.log("control clicked : left ");
              if (itemIndex < 0) {
                setItemIndex(0);
                return;
              }
              setItemIndex(itemIndex - 1);
            }}
          >
            {controls[1]}
          </div>
        </div>
        <div className="flex flex-col w-full h-full overflow-hidden">
          <div
            className="flex  h-full "
            ref={conRef}
            style={{
              width: children.length * 100 + "%",
              transition: "transform .5s ease-out",
              transform: `translateX(-${(itemIndex / children.length) * 100}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {/* <div className="absolute font-bold text-xl z-30" style={{top:"3%",left:"4%"}}>{itemIndex}</div> */}
      </div>
    );
  }
  return (
    <div className="flex">
      <div
        className="flex flex-col h-[30vh] overflow-hidden"
        style={{ width: props.width }}
      >
        <div
          className="flex  h-full "
          ref={conRef}
          style={{
            width: children.length * 100 + "%",
            transition: "transform .5s ease-out",
            transform: `translateX(-${(itemIndex / children.length) * 100}%)`,
          }}
        >
          {children}
        </div>
        <div className="flex gap-4">
          <div
            className="p-4 bg-red-300"
            onClick={(e) => {
              if (itemIndex < 1) {
                return;
              }
              setItemIndex(itemIndex - 1);
            }}
          >
            {"<"}
          </div>
          <div
            className="p-4 bg-blue-300"
            onClick={(e) => {
              if (itemIndex == children.length - 1) {
                return;
              }
              setItemIndex(itemIndex + 1);
            }}
          >
            {" "}
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
}
