import SingleCard from "./SingleCard";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SingleEventAndNoticeCard( props) {
    return (
        <div className="relative  h-96 my-2 flex-col md:flex-row w-full  md:w-1/2 overflow-y-scroll   md:m-2  md:justify-center rounded-xl shadow-lg bg-white">
            <div className="flex sticky top-0
         justify-evenly  p-2 bg-red-500">
                <span className="text-3xl">{props.title}</span>
          <span className="text-3xl ">
            <FontAwesomeIcon icon={faArrowAltCircleRight} height='40' width='40' />
          </span>
        </div>

        <div className="flex flex-col">
          <SingleCard  hover='to-green-600' />
          <SingleCard  hover='to-green-600' />
          <SingleCard  hover='to-green-600' />
          <SingleCard  hover='to-green-600' />
          <SingleCard  hover='to-green-600' />
          <SingleCard  hover='to-green-600' />
          
         
        </div>
      </div>
    )
}

export default SingleEventAndNoticeCard
