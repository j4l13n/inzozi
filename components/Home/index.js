import styles from './Home.module.css'

const Home = () => {
  return (
    <div className="container">
      <div className="row shadow-sm" style={{paddingTop: "25px", paddingBottom: "25px"}}>
        <div className="col-md-6 p-2">
          <div className="m-5 p-2">
            <p className="lead font-weight-light text-muted"><span className="">We are</span> <b className="">INZOZI (An adventure Of a Lifetime)</b> 👋</p>
            <p className="lead font-weight-light text-muted">
            Inzozi is a private tourism company that  prides itself on its excellent 
            ability to produce a fantastic tour around different destination in Rwanda. 
            It is eco friendly and with breathtaking scenery.
            </p>
            <p className="lead font-weight-light">
              &quot;Life is either a daring adventure or nothing at all.&quot; <br />
              --Helen Keller
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