import styles from './Home.module.css'

const Home = () => {
  return (
    <div className="container">
      <div className="row shadow-sm" style={{paddingTop: "25px", paddingBottom: "25px"}}>
        <div className="col-md-6 p-2">
          <div className="m-5 p-2">
            <p className="lead font-weight-light text-muted"><span className="">We are</span> <b className="">INZOZI Tours (Adventure of a Lifetime)</b></p>
            <p className="lead font-weight-light text-muted">
              We present to you, Rwanda, also known as “the Land of a Thousand Hills”, 
              a beautiful eco-friendly country located in East Africa. 
            </p>
            <p className="lead font-weight-light text-muted">
              Rwanda possesses amazing scenery with breath- taking ecosystems that can be 
              experienced through tours of our four major National Parks: Virunga, 
              Nyungwe, Akagera, and Gishwati-Mukura.
            </p>
            <p className="lead font-weight-light text-muted">
              Other natural wonders include six volcanoes, 23 lakes and numerous rivers, 
              the big 5 (lions, elephants, buffalo, rhino and leopard), 
              as well as rare species including our famous mountain gorillas.
            </p>
          </div>
        </div>
        <div className={`col-md-6 d-flex`}>
          <div className="justify-content-center p-3">
            <img src="/home-img.png" className="rounded-circle shadow-lg z-depth-2 w-100" alt="vercel test" data-holder-rendered="true" />
          </div>
        </div>
        <div id="about-us"></div>
      </div>
    </div>
  );
};

export default Home;