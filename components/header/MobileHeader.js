import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import navdata from "../../utils/navdata";
function MobileHeader() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="flex bg-blue-700 md:hidden w-screen justify-between px-auto p-2 items-center shadow-xl">
        <h1 className=" px-4">Mount Makalu</h1>
        <button onClick={() => setisOpen(!isOpen)}>
          <MenuIcon className="w-12 h-10 mx-3 " />
        </button>
      </div>

      {isOpen && (
        <div className="flex justify-center place-items-center md:hidden ">
          <nav className="relative flex justify-center place-items-center w-3/4 p-2 m-2 bg-red-400">
            <button onClick={() => setisOpen(!isOpen)}>
              <h2 className="absolute right-0 m-2 top-0">
                <FontAwesomeIcon icon={faTimesCircle} height="25" width="25" />
              </h2>
            </button>
            <ul >
              {navdata.data.map((data) => {
                return (
                  <div key={data.path} >
                    <button onClick={()=>setisOpen(!isOpen)}>
                      <Link href={data.path}>
                        <div className='text-center p-3'>
                        {data.title}
                        
                        </div>
                      
                      </Link>
                    </button>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
