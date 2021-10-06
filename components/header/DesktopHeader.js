
import navdata from "../../utils/navdata"
import NavigationItem from "./NavigationItem"
function DesktopHeader() {
    return (
        <div className='hidden  md:block px-4 py-1 bg-blue-700 item-center shadow-xl '>
        <div className='flex   justify-between item-center'>
        <div className='my-auto  w-12 h-12 bg-gradient-to-r from-red-600 to-blue-700 rounded-full'>
  
                </div>
                
        
        <div className='flex justify-between lg:last:mr-20 m-2 min-w-2xl items-center'>
                
                {
                    navdata.data.map((data, index) => {
                        
                       return <NavigationItem key={index} title={data.title} path={data.path} />
       
                    })
                }
       
        
            
        </div>
        </div>

  </div>
    )
}

export default DesktopHeader
