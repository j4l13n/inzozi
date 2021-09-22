import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import BookForm from '../../components/BookForm'

const Rwanda10Days = () => {
  return (
    <>
      <Layout />
      <div className="container py-5">
        <h5 className="h4 py-3">The Itinerary of traveling whole country Rwanda in 10 days.</h5>
        <p>
          Welcome to a thousand hills country where you are going to have a lifetime journey of 
          exploring Rwanda in 10 Days. You will have remarkable 
          memories for the adventure, where you will visit different destinations 
          like Akagera national park, here you find big five animals, 
          in Volcano national park where we will enjoying with Tracking 
          silverback Gorillas and life time of local citizens, and enjoying 
          Nyungwe national parks where we will enjoying Canopy walk way the 
          highest bridge in National park  and different primates animals 
          like chimpanzees and Golden Monkeys. 
        </p>
        <ul className="py-3">
          <li className="">
            <small>The First Day</small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Kigali-Airport.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted font-weight-light py-2">
              Arrival day  packed at Airport  and brought to hotel take little 
              rest the we visit our  Genocide Memorial in Kigali. 
              After visiting head to Akagera National parks  where 
              we are going to Enjoy the big Five animals . 
            </p>
          </li>
          <li className="">
            <small>The Second Day</small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Game-Drives-in-Akagera-National-Parks-750x374.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              We are reached at Akagera national parks we have already handled registration 
              process and then  we gonna have different activities in 3 Days .  like : 
              - half Game drive  
              - Night Game drive 
              Planning the third days.
            </p>
          </li>
          <li className="">
            <small>The Third Day</small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/akagera-img-1.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              We will have a lovely day and also a long one, where we are going to have fun in 
              the whole Day of Game drive in Akagera national park. 
              After Game drive we will have to rest as we had the funniest and full of memories of our game drive.
            </p>
          </li>
          <li className="">
            <small>The Fourth Day </small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/kayonza-district.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              We gonna have more experience for lifestyle of local life for 
              community Based tourism  in Kayonza Woman cooperative where the 
              parks change the lifestyle of local people of  Akagera national parks. 
              Which will head us to Musanze. 
            </p>
          </li>
          <li className="">
            <small>The Fifth Day </small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Rwanda-of-Volcanoes-National.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">Volcano National parks</p>
            <p className="text-muted">
                Where we going to enjoying Gorilla tracking Visit Gorilla Guardian village 
                those who were poaching the parks help them in they cooperative. 
                Now they are among they one who protects the Gorillas.
            </p>
          </li>
          <li className="">
            <small>The Sixth Day </small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/image_6483441 (9).JPG" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              - Golden Monkey Tracking  while head us in Nyungwe National park. 
            </p>
          </li>
          <li className="">
            <small>The Seventh Day </small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/water_fall_isumo_hike_nyungwe.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              We are going to enjoy the different activities like such as:<br />

              - Kamiranzovu  Water Fall for 5hours  
            </p>
          </li>
          <li className="">
            <small>The Eighth Day </small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/nyungwe_forest_chimp-rwanda.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              We are going for :<br />

              - Chimpanzees tracking <br />
              - Tea plantation experience
            </p>
          </li>
          <li className="">
            <small>The Ninth Days </small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/Rwanda Canopy.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              Where we are going to have memorable experience of highest bridge in Rwanda <br />

              - canopy walkway <br />
              - Afternoon activities will head us to Kigali . 
            </p>
          </li>
          <li className="">
            <small>The Tenth Day as is the last day of Thousand hills (RWANDA) tour </small>
            <div className="row">
              <div className="col-md-3 py-4">
                <img src="/local-market.jpeg" style={{ width: "100%", height: "174px", objectFit: "cover"}} alt="itinerary image" />
              </div>
            </div>
            <p className="text-muted">
              We are going to have more experience for  <br />

              - local Market  <br />
              - Shopping Gifts  <br />
              - Historic Richard Kanth  former of Kigali city  after this activity we have 
                to says Bye which is not easy  head us to Airport for departure  ending our 
                lovely Adventures in Thousands hills.
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