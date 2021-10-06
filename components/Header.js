
import DesktopHeader from "./header/DesktopHeader"
import MobileHeader from "./header/MobileHeader"

function Header() {
    return (
        <header >
            <nav className='min-w-full'>
                {/* Small Screens Headers */}                                 
                  <MobileHeader />            
               
                {/* Large Screens Navigation Bar */}
                <DesktopHeader/>
           </nav>
        </header>
    )
}

export default Header
