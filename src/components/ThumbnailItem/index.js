// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, thumbnailImage, isActivate} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbnail
  const onImage = () => {
    thumbnailImage(id)
  }
  const opacityThumbnail = isActivate ? '' : 'thumbnail-image'
  return (
    <li>
    <button>
    <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={opacityThumbnail}
        onClick={onImage}
      />
    </button>
      
    </li>
  )
}
export default ThumbnailItem
