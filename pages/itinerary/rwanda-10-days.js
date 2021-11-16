import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import BookForm from '../../components/BookForm'

const Rwanda10Days = () => {
  return (
    <>
      <Layout />
      <div className="container py-5">
        <h5 className="h4 py-3">The Itinerary of traveling the whole country of Rwanda in 10 days.</h5>
        <p>
          Welcome to The Land of a Thousand Hills,
          where you are going to have the journey of 
          a lifetime exploring Rwanda in 10 Days. 
          You will make remarkable memories on this adventure, 
          visiting different destinations like Akagera National Park, 
          with the big five animals, and Volcano National 
          Park where you can enjoy tracking Silverback Gorillas and 
          see the lifestyle of local citizens. At Nyungwe National 
          Parks you can experience the Canopy Walk, the highest bridge 
          in the National Park and encounter the different primates 
          living there like Chimpanzees and Golden Monkeys. 
        </p>
        <ul className="py-3 list-unstyled">
          <li className="">
            <h4>The First Day</h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Kigali-Airport.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted font-weight-light py-2">
            Arrival day begins with a welcome at Kigali Airport and being driven to your hotel. 
            Here you can rest before visiting our Genocide Against Tutsi Memorial in Kigali. 
            After this you will head to Akagera National Park to enjoy thrilling safaris seeing the Big Five and many other wild animals and birdlife. 
            </p>
          </li>
          <li className="">
            <h4>The Second Day</h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Game-Drives-in-Akagera-National-Parks-750x374.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              At Akagera (where we have already handled your registration process) you can choose many different activities, such as half Game Drives, Boat Trip and Night Game Drives.
            </p>
          </li>
          <li className="">
            <h4>The Third Day</h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/akagera-img-1.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              This will be an exciting and long one, where you can spend a whole day of Game Driving in the National Park. In the evening you can rest and enjoy memories of the day, relaxing around a campfire.
            </p>
          </li>
          <li className="">
            <h4>The Fourth Day </h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/image5.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
              <div className="col-md-3 py-4">
                <img src="/image6.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              You will have the chance to experience the way Community Based Tourism has changed lives at Kayonza Women’s Cooperative, and how the National Park has improved the welfare of local communities around Akagera. We then head to Musanze.
            </p>
          </li>
          <li className="">
            <h4>The Fifth Day </h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Rwanda-of-Volcanoes-National.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
              <div className="col-md-3 py-4">
                <img src="/image10.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">Exploring the Volcano National Parks </p>
            <p className="text-muted">
            An opportunity to enjoy Gorilla tracking and visiting the Gorilla Guardian Village, where those who were once poachers in  the parks have reformed and created a cooperative. Now they are ones who protect the Gorillas.
            </p>
          </li>
          <li className="">
            <h4>The Sixth Day </h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/image_6483441 (9).JPG" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
              <div className="col-md-3 py-4">
                <img src="/image0.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
              <div className="col-md-3 py-4">
                <img src="/image3.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
              <div className="col-md-3 py-4">
                <img src="/image4.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              - Golden Monkey Tracking in the magical rainforests of Nyungwe National park.
            </p>
          </li>
          <li className="">
            <h4>The Seventh Day </h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/water_fall_isumo_hike_nyungwe.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              This is a day to enjoy different activities viewing the countryside, such as visiting the breath-taking Kamiranzovu Waterfall. 
            </p>
          </li>
          <li className="">
            <h4>The Eighth Day </h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/nyungwe_forest_chimp-rwanda.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
              <div className="col-md-3 py-4">
                <img src="/image11.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              You will have the chance to explore the forests while Chimpanzee tracking as well as visiting a Tea Plantation.
            </p>
          </li>
          <li className="">
            <h4>The Ninth Day </h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Rwanda Canopy.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
            Today will provide you with a memorable experience of walking the highest bridge in Rwanda.
            This famous canopy walkway stetches high above the trees giving stunning views of Rwanda’s forests and mountains.
            Afternoon activities will be included on the journey back to Kigali. 
            </p>
          </li>
          <li className="">
            <h4>The Tenth Day</h4>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/local-market.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
              <div className="col-md-3 py-4">
                <img src="/image9.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
            Your last day in the Land of a Thousand Hills will include visiting a local Market and shopping for gifts, plus a  memorable tour of the historic House of Kandt - Richard Kandt was the founder of Kigali City. Finally, we will drive you to the airport to depart and sadly bid you farewell, and hope you will always dream about your Thousand Hills Adventure.
            </p>
          </li>
        </ul>
      </div>
      <BookForm />
      <Footer />
    </>
  )
}

export default Rwanda10Days