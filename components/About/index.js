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
           Inzozi is a private tourism company that  prides itself on its excellent ability
           to produce a fantastic tour around different destination in Rwanda. 
           It is eco friendly and with breathtaking scenery..<br /><br />

           It&apos;s main objectives is to set a precedence in providing exciting adventure 
           through the help of professionalism tourism as well as amazing destination.<br /><br />
          </p>
        </div>
      </div>
    </div>
  )
};

export default AboutUs