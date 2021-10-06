
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
function HeroSection() {
    return (
          
        <div className='px-5 py-10'> 
        <div className=' flex flex-col-reverse md:flex-row justify-evenly items-center '>
             <div className='max-w-2xl p-5 flex items-center text-center tracking-wide'>
               <div className='flex '>
               <div className='flex items-start'>
                   
                   <FontAwesomeIcon size='3x' width='40' className='mx-3 hidden sm:block' icon={faQuoteLeft} />
                   <FontAwesomeIcon size='2x' width='40' className='mx-3 sm:hidden' icon={faQuoteLeft} />
                 </div>
               <h1 className='font-semibold mt-2 md:mt-0 text-gray-300 text-lg sm:text-2xl  lg:text-3xl'> Education is what remains after one has forgotten what one has learned in school.</h1>
                 <div className='flex items-end'>
           <FontAwesomeIcon size='3x' width='40' className='mx-3  hidden sm:block  ' icon={faQuoteRight} />
           <FontAwesomeIcon size='2x' width='40' className='mx-3 sm:hidden  ' icon={faQuoteRight} />
               </div>
               </div> 
             </div>
             
           <div className='text-center'>
           <img className='w-60 sm:block sm:max-w-2xl my-2 sm:w-96' src='/heroImage.svg' layout='responsive' height={1080} width={1920} />
           </div>
          </div>
           </div>

    )
}

export default HeroSection
