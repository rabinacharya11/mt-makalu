import Link from 'next/link'
function NavigationItem(props) {
    return (
        <Link href={props.path}>
        <div className="p-2 hover:bg-[#1a0579] cursor-pointer rounded-md hover:text-white">
            <span>{props.title}</span>
            
        </div>
        </Link>
    )
}

export default NavigationItem
