import Link from 'next/link'

const Footer = () => {
  return (
    <>
       <footer id="footer" className="footer mt-5 align-items-end">
        <div className="footer-elements">
          <div className="footer-text">
            <h6>CONTACT US</h6>
            <a href="#" className="text-decoration-none text-dark">+250 788 340 540</a><br />
            <a href="mailto:inzozitours20@gmail.com" className="text-decoration-none text-dark">inzozitours20@gmail.com</a><br /><br />
            <a href="https://www.facebook.com/profile.php?id=100073475014166" target="_blank" rel='noreferrer'  className="w-50 p-1"><i className="bi-facebook" style={{width: "100px", fontSize: "30px", color: "#3b5998"}}></i></a>
            <a href="https://www.instagram.com/__inzozi_tours__official/" target="_blank" rel='noreferrer' className="w-50 p-1"><i className="bi-instagram" style={{width: "100px", fontSize: "30px", color: "#8a3ab9"}}></i></a>
            <a href="https://twitter.com/GasigwaTheogene" target="_blank" rel='noreferrer' className="w-50 p-1"><i className="bi-twitter" style={{width: "100px", fontSize: "30px", color: "#00acee"}}></i></a>
          </div>
          <div className="footer-text">
            <h6>TOURS</h6>
            <li><Link href="/booking"><a href="#" className="text-decoration-none text-dark">Biking tours</a></Link></li>
            <li><Link href="/booking"><a href="#" className="text-decoration-none text-dark">Birds watching</a></Link></li>
            <li><Link href="/booking"><a href="#" className="text-decoration-none text-dark">Cultural Tours</a></Link></li>
            <li><Link href="/booking"><a href="#" className="text-decoration-none text-dark">Camping</a></Link></li>
            <li><Link href="/booking"><a href="#" className="text-decoration-none text-dark">Community tourism</a></Link></li>
           
          </div>
          <div className="footer-text">
            <h6>INFORMATION</h6>
            {/* <ul>   */}
              <li><Link href="/booking"><a href="#" className="text-decoration-none text-dark">Adventure Tours </a></Link></li>
              <li><Link href="/booking"><a href="#" className="text-decoration-none text-dark">Inzozi Tours</a></Link></li>
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
