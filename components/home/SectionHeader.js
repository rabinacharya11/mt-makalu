function SectionHeader(props) {
  return (
      <div>
      
        <h2 className='text-4xl font-bold flex text-center justify-center p-2 my-8'>
        | {props.title}<br />
      </h2>
        <span className='text-xs text-center flex justify-center py-2'>{props.subtitle}</span>
      </div>

    )
}

export default SectionHeader
