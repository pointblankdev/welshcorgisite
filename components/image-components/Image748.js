import Image from 'next/image'
import imageSrc from '../../public/happywelsh/748.png'
import { animated } from '@react-spring/web'

const Img = animated(Image)

const Image748 = (props) => {
  return <Img src={imageSrc} width={160} height={160} {...props} />
}

export default Image748
