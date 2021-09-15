// import './footer.css'

const Footer = () => {
  return (
    <>
       <footer id="footer" className="footer mt-5 align-items-end">
        <div className="footer-elements">
          <div className="footer-text">
            <h6>CONTACT US</h6>
            <a href="#" className="text-decoration-none text-dark">+250 788 340 540</a><br />
            <a href="#" className="text-decoration-none text-dark">inzozitour@gmail.com</a><br /><br />
            <a href="#" className="w-50 p-1"><i className="bi-facebook" style={{width: "100px", fontSize: "30px", color: "#3b5998"}}></i></a>
            <a href="#" className="w-50 p-1"><i className="bi-instagram" style={{width: "100px", fontSize: "30px", color: "#8a3ab9"}}></i></a>
            <a href="#" className="w-50 p-1"><i className="bi-twitter" style={{width: "100px", fontSize: "30px", color: "#00acee"}}></i></a>
          </div>
          <div className="footer-text">
            <h6>TOURS</h6>
            <li><a href="#" className="text-decoration-none text-dark">Biking tours</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Birds watching</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Cultural Tours</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Camping</a></li>
           
          </div>
          <div className="footer-text">
            <h6>INFORMATION</h6>
            {/* <ul>   */}
              <li><a href="#" className="text-decoration-none text-dark">Adventure Tours </a></li>
            {/* </ul> */}
          </div>
          <div className="footer-text">
            <h6>Talk to us via the email provided here!</h6>
            <p className="text-dark">We are a welcoming company, please contact us anytime for any question you have about <b>INZOZI Tours</b>.<br /><br /> Thank you</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
