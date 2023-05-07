import { Link } from "react-router-dom";
import homehero from "../assets/images/homehero.jpg";

export const HomeHero = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center px-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h2 className=" d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Lorem ipsum dolor sit amet
            <br />
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none">
            Lorem ipsum dolor sit amet
            <br />
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Link to="/blogReadMoreOne" class="btn btn-primary">
            Read More
          </Link>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={homehero}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};
