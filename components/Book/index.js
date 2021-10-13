import Link from 'next/link'

const Book = () => {
  return (
    <div className="container py-5" id="bookings">
      <div className="h4 py-5 d-flex justify-content-center">Bookings</div>
      <div className="row">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center">
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/image1.jpeg" style={{width: "100%", objectFit: 'cover'}} className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    The Land of a Thousand Hills is a biking dream for mountain or road cyclists.
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Biking tours</a></Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/inyoni2.jpeg" style={{width: "100%", objectFit: 'cover'}} className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    Rwanda’s an amazing bird watching destination with over 700 species to see.
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Bird watching</a></Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/sixth-img@2x.png" style={{width: "100%", objectFit: 'cover'}}  className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    Experience the colorful culture of Rwanda and its welcoming hospitality. 
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Community tourism</a></Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/image12.jpeg" style={{width: "100%", objectFit: 'cover'}}  className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    Camping on hillsides or lake shores, where every view is always stunning.  
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Camping</a></Link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/inyoni2.jpeg" style={{width: "100%", objectFit: 'cover'}}  className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    Rwanda’s an amazing bird watching destination with over 700 species to see.
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Bird watching</a></Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/image1.jpeg" style={{width: "100%", objectFit: 'cover'}}  className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    The Land of a Thousand Hills is a biking dream for mountain or road cyclists.
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Biking tours</a></Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/image12.jpeg" style={{width: "100%", objectFit: 'cover'}}  className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    Camping on hillsides or lake shores, where every view is always stunning.
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Camping</a></Link></h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/community.jpeg" style={{width: "100%", objectFit: 'cover'}}  className="d-block w-100" width="100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    Experience the colorful culture of Rwanda and its welcoming hospitality.
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5><Link href="/booking"><a href="#" className="text-decoration-none text-white">Community tourism</a></Link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
            <img src="/group@2x.png" className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
      </div>
    </div>
  )
}

export default Book