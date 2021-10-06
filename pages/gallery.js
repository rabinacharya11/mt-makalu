import GalleryImage from "../components/gallery/GalleryImage"

function Gallery() {
    return (
        <div>
            <div className='grid m-2 grid-rows-1 md:grid-cols-2 xl:grid-cols-3 '>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
<GalleryImage/>
            </div>
        </div>
    )
}

export default Gallery
