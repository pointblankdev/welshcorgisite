import Image from 'next/image'
import imageSrc from '../../public/happywelsh/1869.png'
import { animated } from '@react-spring/web'

const Img = animated(Image)

const Image1869 = (props) => {
  return <Img src={imageSrc} width={160} height={160} {...props} />
}

export default Image1869
