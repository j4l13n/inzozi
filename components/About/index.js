const AboutUs = () => {
  return (
    <div className="container" style={{
      marginTop: "80px",
      marginBottom: "20px"
    }}>
      <div className="h4 p-3 d-flex justify-content-center">About Us</div>
      <div className="row" style={{
        paddingTop: "40px"
      }}>
        <div className="col d-flex justify-content-center py-5">
          <img src="/inzozi-logo.png" alt="" className="rounded shadow-sm"  />
        </div>
        <div className="col d-flex justify-content-center align-self-center font-weight-light">
          <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  )
};

export default AboutUs