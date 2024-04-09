import image from '../../../image/regulation.image.jpg'
import styles from './ImageRegulation.module.scss'

export default function Image() {
    return (
        <div className={styles.imageContainer}>
        <img src={image} alt="Not found" />
      </div>
    )
}