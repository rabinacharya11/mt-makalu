import Link from "next/link"
function QuickLinks() {
    return (
        <div className='flex flex-col  items-justify'>
        <h1 className='font-bold text-green-500 text-lg'>Quick Links</h1>
        <span className='item-center inline w-20 h-0.5 bg-gradient-to-br from-red-200 to-blue-700'/>  
        <div className='grid-flow-row grid-cols-2'>
        <Link href='/'>
<div className="p-2 hover:text-white">
<span>Home</span>

</div>
</Link>
        <Link href='/admission'>
<div className="p-2 hover:text-white">
<span>Take Admission</span>

</div>
</Link>
        <Link href='/educators'>
<div className="p-2 hover:text-white">
<span>Educators</span>

</div>
</Link>
        <Link href='/gallery'>
<div className="p-2 hover:text-white">
<span>Gallery</span>

</div>
</Link>
        <Link href='/events'>
<div className="p-2 hover:text-white">
<span>Events</span>

</div>
</Link>
        <Link href='/about'>
<div className="p-2 hover:text-white">
<span>About Us</span>

</div>
</Link>
    </div>

       
    </div>
    )
}

export default QuickLinks
