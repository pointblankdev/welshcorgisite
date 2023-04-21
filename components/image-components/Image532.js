import Image from 'next/image'
import imageSrc from '../../public/happywelsh/532.png'
import { animated } from '@react-spring/web'

const Img = animated(Image)

const Image532 = (props) => {
  return <Img src={imageSrc} width={160} height={160} {...props} />
}

export default Image532
