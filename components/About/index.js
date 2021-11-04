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
        <div className="col-md-6 d-flex justify-content-center py-2">
          <img src="/seventh-img.JPG" height="250" style={{width: "100%", height: "100%", objectFit: 'fill'}} alt="" className="shadow-sm" />
        </div>
        <div className="col-md-6">
          <div className="row px-2">
            {/* <div className="h4 py-2">About Us</div> */}
            <p className="lead">
            <b>INZOZI </b>means ‘dream’ in our language and we like to make your dreams come true.<br /><br />

            <b>INZOZI Tours </b>offers adventures of a lifetime through the richly varied environments of Rwanda, 
            from the intertwining forests of Volcanoes Mountains to the spiritual plains of the savanna in 
            Akagera National Park.<br /><br />
            <b>INZOZI Tours </b>are proud to produce a unique and personal experience, where you can enjoy 
              discovering this beautiful country and the vast wildlife that Rwanda has to offer.
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
                  <img src="/inzozi tours  karagwA.png" className="w-100" style={{width: "100%", height: "240px", objectFit: 'cover'}} alt="" />
                </div>
                <div className="row py-2 border-bottom">
                  <div className="h5 py-2">Vision</div>
                  <p className="font-weight-light fw-light">
                  The vision of Inzozi Tours is to create awareness of the stunning wildlife that Rwanda has to offer, 
                  whilst creating a professional atmosphere to give our clients the best experience they have ever had. 
                  </p>
                  <p className="font-weight-light fw-light">
                    Inzozi Tours also seeks to promote tourism activities by involving the local communities. 
                  </p>
                </div>
                <div className="row py-2">
                  <div className="h5 py-2">Mission</div>
                  {/* <ul className="mx-4 me-auto"> */}
                  <p className="font-weight-light fw-light">
                  - Giving our clients excellent personal attention, listening to their needs and 
                    providing them with unforgettable opportunities to enjoy Rwanda’s culture and hospitality.
                  </p>
                  <p className="font-weight-light fw-light">
                    - Promoting the ecotourism in local communities by using the indigenous knowledge, 
                    skills and the basic resources especially around tourism attractions.
                  </p>
                  <p className="font-weight-light fw-light">
                    - Bringing awareness to the importance of conservation and protecting the ecosystem.
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