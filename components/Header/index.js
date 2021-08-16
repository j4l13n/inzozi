import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/inzozi-logo-xs.png'

const Header = () => {
  return (
    <nav className="navbar shadow navbar-expand-lg navbar-light bg-light sticky-top" 
      style={{
        border: 'none', 
        padding: '25px 25px',
        borderBottom: "5px solid green"
      }
    }>
      <div className="container-fluid">
        <Link href="/">
          <a href="#" className="navbar-brand" style={{marginTop: "-15px", marginBottom: "-15px"}}>
            <Image src='/inzozi-logo-xs.png' alt="Inzozi" width="195px" className="" height="80" />
          </a>
        </Link>
        {/* <div className="collapse navbar-collapse"> */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" ariaCurrent="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ariaCurrent="page" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ariaCurrent="page" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ariaCurrent="page" href="#footer">Contact us</a>
            </li>
            <li className="nav-item bg-dark px-5 mx-5">
              <a className="nav-link text-white" ariaCurrent="page" href="#">Book</a>
            </li>
          </ul>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;