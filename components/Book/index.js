const Book = () => {
  return (
    <div className="container" id="bookings">
      <div className="h4 p-3 d-flex justify-content-center">Bookings</div>
      <div className="row">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center">
              <div className="col-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/Congo-Nile-Trail.jpeg" className="d-block w-100" height="240" alt="..." />
                  </div>
                  <div className="card-body">Card body description</div>
                  <div className="card-footer bg-dark text-light d-flex justify-content-center">
                    Biking tours
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/group@2x.png" className="d-block w-100" height="240" alt="..." />
                  </div>
                  <div className="card-body">Card body description</div>
                  <div className="card-footer bg-dark text-light d-flex justify-content-center">
                    Birds watching
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/group@2x.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="card-body">
                    We provide
                  </div>
                  <div className="card-footer bg-dark text-light d-flex justify-content-center">
                    Cultural Tours
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card shadow">
                  <div className="card-title">
                    <img src="/group@2x.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="card-body">Card body description</div>
                  <div className="card-footer bg-dark text-light d-flex justify-content-center">
                    Camping
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col">
                col1
              </div>
              <div className="col">
                col2
              </div>
              <div className="col">
                col3
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