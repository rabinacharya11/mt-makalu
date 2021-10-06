function ContactInfo() {
    return (
        <div className='flex flex-col py-2 items-justify'>
        <h1 className='font-bold text-green-500 text-lg'>Contact Info</h1>
        <span className='item-center inline w-20 h-0.5 bg-gradient-to-br from-red-200 to-blue-700'/>  
        <div className='flex flex-col'>
            <small className='pt-2'>Address: <strong className='px-1'>Sundaraincha-3, Gachhiya Morang</strong></small>
            <small className='pt-2'>Email: <strong className='px-1'>mountmakaluers@gmail.com</strong></small>
            <small className='pt-2'>Phone: <strong className='px-1'>+9779846843336</strong></small>
        </div>
    </div>
    )
}
export default ContactInfo
