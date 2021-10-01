import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import BookForm from '../../components/BookForm'

const Booking = () => {
  return (
    <>
      <Layout />
      <div className="container py-5">
        <h3 className="h2 py-3">All bookings</h3>
        <div>
          <ul className="py-3">
            <li className="">
              <h5>Biking Tours</h5>
              <div className="row">
                <div className="col-md-3 py-4">
                  <img src="/biking.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
                </div>
              </div>
              <p className="text-muted font-weight-light py-2">
                <ol>
                  <li>Congo Nile Trail</li>
                  <li>Twin lake Burera and Ruhondo</li>
                  <li>Volcano Belt</li>
                </ol>
              </p>
            </li>
            <li className="">
              <h5>Birds Watching</h5>
              <div className="row">
                <div className="col-md-3 py-4">
                  <img src="/third-img.png" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
                </div>
              </div>
              <p className="text-muted font-weight-light py-2">
                <ol>
                  <li>Bugesera</li>
                  <li>Akagera national park</li>
                  <li>Nyungwe National Park </li>
                  <li>Volcano national park </li>
                  <li>Rugezi mash lands </li>
                  <li>North lakes</li>
                  <li>Twin lake Burera and Ruhondo</li>
                  <li>Karoga</li>
                  <li>Nyirakigugu</li>
                </ol>
              </p>
              <p>Mostly here we usually use Camping as accommodations especially on Twin lake.</p>
            </li>
            <li className="">
              <h5>Culture tours</h5>
              <div className="row">
                <div className="col-md-3 py-4">
                  <img src="/community-img.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
                </div>
              </div>
              <p className="text-muted font-weight-light py-2">
                <ol>
                  <li>Ethnographic Museum</li>
                  <li>King palace Museum</li>
                  <li>Richard Kanth Museum</li>
                  <li>Gorilla Guardian</li>
                </ol>
              </p>
            </li>
            <li className="">
              <h5>Adventure Tours</h5>
              <div className="row">
                <div className="col-md-3 py-4">
                  <img src="/biking.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
                </div>
              </div>
              <p className="text-muted font-weight-light py-2">
                <ol>
                  <li>Biking</li>
                  <li>Hiking where we hike the local Mountain and Volcano </li>
                  <li>Caving which located  Musanze District</li>
                </ol>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <BookForm />
      <Footer />
    </>
  )
}

export default Booking