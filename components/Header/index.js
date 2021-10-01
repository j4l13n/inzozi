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
            <img src='/inzozi tours  karagwA.png' alt="Inzozi" width="195px" className="" height="80" />
          </a>
        </Link>
        <button className="navbar-toggler border-0 btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/#"><a className="nav-link px-3" aria-current="page" href="#">
                Home
              </a></Link>
            </li>
            <li className="nav-item">
              <Link href="/#about-us"><a className="nav-link px-3" aria-current="page" href="#about-us">About Us</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/#gallery"><a className="nav-link px-3" aria-current="page" href="#gallery">Gallery</a></Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Itineraries
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link href="/itinerary/rwanda-10-days"><a className="dropdown-item" href="#">Traveling Spectacular Rwanda in 10 days</a></Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/#footer"><a className="nav-link px-3" aria-current="page" href="#footer">Contact us</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/#bookings"><a className="nav-link bg-success text-light px-4 shadow border d-flex justify-content-center" aria-current="page" href="#bookings">Bookings</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;