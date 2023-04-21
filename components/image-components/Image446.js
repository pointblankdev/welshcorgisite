import Image from 'next/image'
import imageSrc from '../../public/happywelsh/446.png'
import { animated } from '@react-spring/web'

const Img = animated(Image)

const Image446 = (props) => {
  return <Img src={imageSrc} width={160} height={160} {...props} />
}

export default Image446
