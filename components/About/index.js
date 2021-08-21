import { useState } from "react";

const AboutUs = () => {
  return (
    <div className="container" style={{
      marginTop: "40px",
      marginBottom: "20px"
    }}>
      <div className="h4 p-3 d-flex justify-content-center">About Us</div>
      <div className="row" style={{
        paddingTop: "20px"
      }}>
        <div className="col-md-6 d-flex justify-content-center py-5">
          <img src="/inzozi-logo.png" height="250" alt="" className="rounded shadow-sm"  />
        </div>
        <div className="col-md-6">
          <div className="row px-2">
            {/* <div className="h4 py-2">About Us</div> */}
            <p className="lead">
            <b>INZOZI Tours</b> offers an adventure of a lifetime, 
            through the rich environmental vicinity  vicinities of Rwanda, 
            from the intertwining forests of Volcano Mountains to the 
            spiritual plains of the savanna in Akagera National Park.<br /><br />

            <b>INZOZI Tours</b> makes a strong effort to produce a unique 
            experience of enjoying the vast wildlife that Rwanda has to offer.<br /><br />
            </p>
          </div>
          <div className="row py-2 px-2">
            <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="" style={{cursor: 'pointer', paddingTop: "20px", paddingBottom: "20px"}}>Read more</a>
          </div>
        </div>
      </div>
      <div className="modal fade" tabIndex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <div className="modal-header border-0">
             
            </div> */}
            <div className="modal-body">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="border-bottom">
                  <img src="/inzozi-logo.png" className="w-100" height="240" alt="" />
                </div>
                <div className="row py-2 border-bottom">
                  {/* <div className="h5 py-2">About Us</div> */}
                  <p className="font-weight-light fw-light">
                  <b>INZOZI Tours</b> offers an adventure of a lifetime, 
                  through the rich environmental vicinity  vicinities of Rwanda, 
                  from the intertwining forests of Volcano Mountains to the 
                  spiritual plains of the savanna in Akagera National Park.<br /><br />

                  <b>INZOZI Tours</b> makes a strong effort to produce a unique 
                  experience of enjoying the vast wildlife that Rwanda has to offer.<br /><br />
                  </p>
                </div>
                <div className="row py-2 border-bottom">
                  <div className="h5 py-2">Vision</div>
                  <p className="font-weight-light fw-light">
                  The vision of Inzozi Tours is to create awareness 
                  to of the stunning wildlife that Rwanda has, 
                  to offer while creating a professional atmosphere 
                  to give the clients an the very best experience like 
                  they have never had before. Inzozi Tours also seeks 
                  to promote tourism activities by involving the local communities. 
                  </p>
                </div>
                <div className="row py-2">
                  <div className="h5 py-2">Mission</div>
                  {/* <ul className="mx-4 me-auto"> */}
                  <p className="font-weight-light fw-light">
                    - Promoting the ecotourism in local communities by using 
                    the indigenous knowledge, skills and the basic resources 
                    especially around tourism attractions
                  </p>
                  <p className="font-weight-light fw-light">
                    - Bringing awareness to the importance of protecting the ecosystem
                  </p>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutUs