import ContactForm from "../components/contact/contactForm"

function Contact() {
    return (
        <div>
            <div className="flex flex-col text-center m-4">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Share with us your experience, feedback and suggestions</p>
    </div>
            <div className='flex flex-col sm:flex-row  justify-center place-items-center  mx-auto  w-11/12 h-11/12'>
          <ContactForm/>
          <iframe className='p-4 w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.7666080534104!2d87.31495021442001!3d26.655954177514516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6ebf6aaaaaab%3A0x35d4560527c65759!2sMt.%20Makalu%20Secondary%20Boarding%20school!5e0!3m2!1sen!2snp!4v1633486254618!5m2!1sen!2snp"  allowFullScreen="" height="200" width="200" loading="lazy"></iframe>
            </div>
                
        </div>
    )
}

export default Contact
