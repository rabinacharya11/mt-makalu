import FacilitiesCard from "../components/facilities/FacilitiesCard"


function Facilities() {
    return (
        <>
            
            <h3 className='text-center p-4'>We believe in making the learning process much more easier and fun. All the facilities that plays a crucial role in making overall learning process fun, easy, interactive, practical based and smooth like butter!</h3>
             <h2 className='m-4 justify-center flex place-items-center  text-lg sm:text-xl md:text-4xl'>Our Facilities</h2>
        
            <div  className="flex flex-wrap justify-center mb-4">

            <FacilitiesCard />
        <FacilitiesCard/>
        <FacilitiesCard/>
        <FacilitiesCard/>
        <FacilitiesCard/>
        <FacilitiesCard/>
            </div>
        
        </>
    )
}

export default Facilities
