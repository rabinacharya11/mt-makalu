import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SocialLInkGroup() {
    return (
        <div className="flex md:flex-row justify-evenly place-items-center m-2  text-center">

        <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
        <FontAwesomeIcon icon={faTwitter} />
        </span>
        
        <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
        <FontAwesomeIcon icon={faFacebook} />
        </span>
        
        <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
        <FontAwesomeIcon icon={faInstagram} />
        </span>
        
        <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
        <FontAwesomeIcon icon={faLinkedin} />
        </span>
        
        <span className = 'rounded-full transition transform duration-200 ease-in-out hover:scale-125  p-2'>
        <FontAwesomeIcon icon={faYoutube} />
        </span>
        
          

</div>
    )
}

export default SocialLInkGroup
