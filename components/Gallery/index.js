import Image from 'next/image'

const Gallery = () => {
  return (
    <div id="gallery" className="container py-3">
      <div className="h4 p-3 d-flex justify-content-center">Gallery</div>
      <div className="shadow-sm row py-5">
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/group@2x.png" className="" style={{width: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/gorilla@2x.png" className="rounded-circle" style={{width: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/first-img.png" className="" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/second-img.png" className="rounded-circle" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/third-img.png" className="rounded-circle" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/fourth-img.png" className="" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/fifth-img.png" className="rounded-circle" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/sixth-img@2x.png" className="" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery