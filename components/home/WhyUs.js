import HomePageFacilitesCard from "../facilities/HomePageFacilitesCard"
import SingleCard from "./SingleCard"

function WhyUs() {
    return (
        <div className='flex flex-col  justify-center md:grid md:grid-cols-2 lg:grid-cols-3 place-self-center gap-2 m-4 '>
           <HomePageFacilitesCard/>
           <HomePageFacilitesCard/>
           <HomePageFacilitesCard/>
           <HomePageFacilitesCard/>
           <HomePageFacilitesCard/>
           <HomePageFacilitesCard/>
            
        </div>
    )
}

export default WhyUs
