import {MenuIcon} from '@heroicons/react/outline'
function MobileHeader() {
    return (
        <div className='flex bg-blue-700 md:hidden w-screen justify-between px-auto p-2 items-center shadow-xl'>
            
            <h1 className=' px-4'>Mount Makalu</h1>
            <MenuIcon className='w-12 h-10 mx-3 ' />

            
            
        </div>
    )
}

export default MobileHeader
