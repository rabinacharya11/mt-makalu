import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function StudentCard() {
    return (
        <div className="flex bg-gradient-to-tr rounded-xl from-blue-200 hover:to-red-300  flex-col justify-evenly place-items-center bg-white w-80 h-96 m-2">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="m-2 text-green-600"
            size="3x"
          />
          <p className="m-2 text-black text-center">
            In my experience, there is only one motivation, and that is desire.
            No reasons or principle contain it or stand against it.
          </p>

          <div className="flex border-4 border-purple-300 rounded-full w-32 h-32 m-2">
            <img src='/hello.jpeg' className='rounded-full'  alt="Hemanta Karki" layout='responsive' height="300" width="300" />
          </div>
          <p className='text-blue-400 font-bold text-center' >Hemanta Karki <br/><span className='text-gray-500'>Founder & Principal</span></p>
          
        </div>
    )
}

export default StudentCard
