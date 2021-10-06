import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noticeStyle from '../../styles/Notice.module.css'

function Notice() {
  return (
    <div className="relative h-10 w-full  justify-center  bg-green-400 ">
      <div className="absolute flex left-0 bg-yellow-400 h-10 w-2/5 md:w-1/6  justify-center z-10">
        <div className="flex flex-row justify-evenly h-10 w-36 text-center  place-items-center ">
          <h1 className="flex text-center text-black ">
            NOTICE           </h1>
        </div>
          </div>
          {/* TODO Every Notice and events short info will be here */}

      <div className="h-10 flex  text-center place-content-center z-1">
        <div className=" flex items-center justify-center overflow-hidden ">
          <ul className={`${noticeStyle.ul} p-36 flex justify-center items-center`}>
            <li  className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice1</li>
            <li className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice2</li>
            <li className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice3</li>
            <li className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice4</li>
            <li className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice5</li>
            <li className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice6</li>
            <li className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice7</li>
            <li className="hover:cursor-pointer px-3 " ><span className=" rounded-full text-yellow-400  font-bold">*</span>Notice8</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notice;
