import Image from 'next/image'
import imageSrc from '../../public/happywelsh/896.png'
import { animated } from '@react-spring/web'

const Img = animated(Image)

const Image896 = (props) => {
  return <Img src={imageSrc} width={160} height={160} {...props} />
}

export default Image896
