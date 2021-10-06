import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

function SocialLinksGroup() {
    return (
        <div className="flex md:flex-row justify-evenly m-2  text-center">

                <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
                <FontAwesomeIcon icon={faTwitter} height='30' width='30'/>
                </span>
                
                <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
                <FontAwesomeIcon icon={faFacebook} height='30' width='30'/>
                </span>
                
                <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
                <FontAwesomeIcon  icon={faInstagram}  height='30' width='30'/>
                </span>
                
                <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
                <FontAwesomeIcon icon={faLinkedin} height='30' width='30' />
                </span>
                
                <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
                <FontAwesomeIcon icon={faYoutube} height='30' width='30' />
                </span>
                
                  

</div>
    )
}

export default SocialLinksGroup
