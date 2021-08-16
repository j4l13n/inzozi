import Image from 'next/image'

const Gallery = () => {
  return (
    <div id="gallery" className="container py-5">
      <div className="h4 p-3 d-flex justify-content-center">Gallery</div>
      <div className="shadow-sm row py-5">
        <div className="col-md-4 col-lg-4">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/inzozi-home-pic@2x.png" className="" style={{width: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/inzozi-home-pic@2x.png" className="rounded-circle" style={{width: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/inzozi-home-pic@2x.png" className="" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/inzozi-home-pic@2x.png" className="rounded-circle" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/inzozi-home-pic@2x.png" className="" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="card m-2 border-0">
            <div className="card-title">
              <img src="/inzozi-home-pic@2x.png" className="rounded-circle" style={{width: "100%", height: "100%"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery