import { useEffect } from 'react'
import ImageComponent from './ImageComponent'

const Gallery = () => {
  const dataSource = [
    {
      id: 1,
      imgSource: '/IMG_0734.jpg',
      classNames: ''
    },
    {
      id: 2,
      imgSource: '/image_6483441 (12).JPG',
      classNames: ''
    },
    {
      id: 3,
      imgSource: '/image_6483441 (7).JPG',
      classNames: ''
    },
    {
      id: 4,
      imgSource: '/image_6483441 (9).JPG',
      classNames: ''
    },
    {
      id: 5,
      imgSource: '/image_6483441 (10).JPG',
      classNames: ''
    },
    {
      id: 6,
      imgSource: '/image_6483441 (14).JPG',
      classNames: ''
    },
    {
      id: 7,
      imgSource: '/image_6483441 (11).JPG',
      classNames: ''
    },
    {
      id: 8,
      imgSource: '/image_6483441 (13).JPG',
      classNames: ''
    }
  ]

  useEffect(() => {
    
  })

  return (
    <div id="gallery" className="container py-3">
      <div className="h4 p-3 d-flex justify-content-center">Gallery</div>
      <div className="shadow-sm row py-5">
        {
          dataSource?.map((el, i) => (
            <div key={i} className="col-md-3 col-lg-3 border-1" style={{height: "274px", overflow: 'hidden'}}>
              <ImageComponent
                imgSrc={el.imgSource}
                classNames={el.classNames}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery