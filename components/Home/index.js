import styles from './Home.module.css'

const Home = () => {
  return (
    <div className="container">
      <div className="row shadow-sm" style={{paddingTop: "25px", paddingBottom: "25px"}}>
        <div className="col-md-6 p-2">
          <div className="m-5 p-2">
            <p className="lead font-weight-light text-muted"><span className="">We are</span> <b className="">INZOZI (Adventure Of a Lifetime)</b> 👋</p>
            <p className="lead font-weight-light text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p className="lead font-weight-light">
              &quot;The best way out is always through.&quot; <br />
              --Robert Frost
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