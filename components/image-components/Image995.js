import Image from 'next/image'
import imageSrc from '../../public/happywelsh/995.png'
import { animated } from '@react-spring/web'

const Img = animated(Image)

const Image995 = (props) => {
  return <Img src={imageSrc} width={160} height={160} {...props} />
}

export default Image995
