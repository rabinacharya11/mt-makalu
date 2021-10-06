import MessageCard from "./MessageCard"

function MessageSection() {
    return (
        <div>
      <ul className="flex flex-col md:flex-row  md:flex-wrap md:gap-2 lg:flex-wrap justify-center place-items-center  ">
            <MessageCard/>
            <MessageCard/>
            <MessageCard/>      
                 
            
            </ul>
        </div>
    )
}

export default MessageSection
