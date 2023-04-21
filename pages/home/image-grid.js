import { animated, config, useTrail } from '@react-spring/web'
import dynamic from 'next/dynamic'
import g from './image-grid.module.scss'

const imageList = []
for (let index = 1; index <= 250; index++) {
  imageList.push(
    dynamic(() => import(`../../components/image-components/Image${index}`), {
      ssr: false,
    })
  )
}

const ImageGrid = () => {
  const trails = useTrail(imageList.length, {
    from: { opacity: 0, 'border-radius': 0 },
    to: { opacity: 1, 'border-radius': 30 },
    config: config.wobbly,
  })

  return (
    <div className={g.grid}>
      {trails.map((style, index) => {
        const ImageComponent = imageList[index]
        const randomOrder = Math.floor(Math.random() * 500)
        return (
          <animated.div
            key={index}
            style={{ ...style, order: randomOrder }}
            className={g.gridItem}
          >
            <ImageComponent
              loading="lazy"
              alt={`Image ${index}`}
              blurDataURL=""
              className={g.image}
              style={{ ...style }}
            />
          </animated.div>
        )
      })}
    </div>
  )
}

export default ImageGrid
