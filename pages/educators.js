import EducatorCard from "../components/educator/EducatorCard"


function Educators() {
    return (
        <>
        <h2 className='m-4 justify-center flex place-items-center  text-lg sm:text-xl md:text-4xl'>Our Educators</h2>
        
        <div className="flex flex-wrap justify-center">
            
             <EducatorCard/>
             <EducatorCard/>
             <EducatorCard/>
             <EducatorCard/>
             <EducatorCard/>
             <EducatorCard/>
             <EducatorCard/>
             <EducatorCard/>
            </div>
            </>
    )
}

export default Educators
