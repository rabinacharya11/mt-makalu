import GalleryImage from "../components/gallery/GalleryImage"

function Events() {
    return (
        <div>
            <div className='flex justify-center m-4'>

            <label labelForHtml='choose'></label>
            <select id="chooseEvent" className='text-black'>
                <option value="#" key="1">Choose a event</option>
                <option value="#" key="2">Silver Jubliee 2076</option>
                <option value="#" key="3">Expo</option>
</select>
            </div>

            <div className='grid m-2 grid-rows-1 md:grid-cols-2 xl:grid-cols-3 '>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
            </div>
        </div>
    )
}

export default Events
