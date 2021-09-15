const Book = () => {
  return (
    <div className="container" id="bookings">
      <div className="h4 py-5 d-flex justify-content-center">Bookings</div>
      <div className="row">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center">
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/Congo-Nile-Trail.jpeg" className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    We plan for Biking tours in the Volcanoes Mountains, 
                    Cities and other places within Rwanda
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Biking tours</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/third-img.png" className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    It&apos;s amazing watching birds, and touring the thousand hills,
                    Trees around you to make a great journey
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Birds watching</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/sixth-img@2x.png" className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    We make you see the life Rwanda live, lived 
                    and the future, since we started to get some insights
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Cultural Tours</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/camping.jpg" className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    We make you see, the best view of the thousand hills, that brings joy and happiness to your sight  
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Camping</h5>
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
                    <img src="/third-img.png" className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    It&apos;s amazing watching birds, and touring the thousand hills,
                    Trees around you to make a great journey
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Birds watching</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/Congo-Nile-Trail.jpeg" className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    We plan for Biking tours in the Volcanoes Mountains, 
                    Cities and other places within Rwanda
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Biking tours</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/camping.jpg" className="d-block w-100" height="280" alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    We make you see, the best view of the thousand hills, that brings joy and happiness to your sight  
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Camping</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/sixth-img@2x.png" className="d-block w-100" width="100" height="280" style={{width: "100%"}} alt="..." />
                  </div>
                  <div className="card-body font-weight-light py-2">
                    We make you see the life Rwanda live, lived 
                    and the future, since we started to get some insights
                  </div>
                  <div className="card-footer bg-success text-light d-flex justify-content-center">
                    <h5>Cultural Tours</h5>
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