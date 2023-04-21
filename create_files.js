const fs = require('fs')
const path = require('path')

const imageComponentsDir = path.join(
  __dirname,
  'components',
  'image-components'
)

// Create the image-components directory if it doesn't exist
if (!fs.existsSync(imageComponentsDir)) {
  fs.mkdirSync(imageComponentsDir)
}

// Generate and write the image component files
for (let i = 1; i <= 2000; i++) {
  const imageComponentContent = `import Image from 'next/image';
import imageSrc from '../../public/happywelsh/${i}.png';
import { animated } from '@react-spring/web';

const Img = animated(Image);

const Image${i} = (props) => {
  return <Img src={imageSrc} width={160} height={160} {...props} />;
};

export default Image${i};
`

  fs.writeFileSync(
    path.join(imageComponentsDir, `Image${i}.js`),
    imageComponentContent
  )
}
