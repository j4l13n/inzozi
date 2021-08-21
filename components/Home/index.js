import styles from './Home.module.css'

const Home = () => {
  return (
    <div className="container">
      <div className="row shadow-sm" style={{paddingTop: "25px", paddingBottom: "25px"}}>
        <div className="col-md-6 p-2">
          <div className="m-5 p-2">
            <p className="lead font-weight-light text-muted"><span className="">We are</span> <b className="">INZOZI Tours (Adventure Of a Lifetime)</b> 👋</p>
            <p className="lead font-weight-light text-muted">
            We present to you, Rwanda, also known as “the Land of a thousand hills”, 
            is a beautiful eco-friendly country located in east Africa. 
            </p>
            <p className="lead font-weight-light text-muted">
              {/* &quot;Life is either a daring adventure or nothing at all.&quot; <br />
              --Helen Keller */}
              It is possesses amazing scenery with breathtaking ecosystems 
              that can be toured in forms of four major national parks 
              (Volcanoes, Nyungwe, Akagera, and Gishwati-Mukura) and it&apos;s 
              other natural assets include six volcanoes, 23 lakes and numerous
              rivers, 5 the big 5 animals (lions, elephants, buffalo, rhino 
              and leopard) as well as rare species such as mountain gorillas.
            </p>
          </div>
        </div>
        <div className={`col-md-6 d-flex`}>
          <div className="justify-content-center p-3">
            <img src="/inzozi-home-pic@2x.png" className="rounded-circle shadow-lg z-depth-2 w-100" alt="vercel test" data-holder-rendered="true" />
          </div>
        </div>
        <div id="about-us"></div>
      </div>
    </div>
  );
};

export default Home;