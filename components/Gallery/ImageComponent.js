const ImageComponent = ({classNames, imgSrc}) => {
  return (
    <>
      <img src={imgSrc} className={`p-1 ${classNames}`} style={{width: "100%", height: "100%", objectFit: 'cover'}}/>
    </>
  )
}

export default ImageComponent