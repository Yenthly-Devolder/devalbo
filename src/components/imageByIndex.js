import image3 from '../assets/jumbislides/3.jpg'
import image4 from '../assets/jumbislides/4.jpg'
import image5 from '../assets/jumbislides/5.jpg'

export const images = [ image3, image4, image5]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
