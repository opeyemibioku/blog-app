import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import homehero from "../assets/images/homehero.jpg";
import pic from "../assets/images/pic.jpg";

const IndividualBlogPostTwo = () => {
  return (
    <>
      <Navbar />
      <BlogReadMoreTwo />
    </>
  );
};

const BlogReadMoreTwo = () => {
  return (
    <div className="container py-5 px-4">
      <img src={homehero} style={{ maxHeight: "50%", maxWidth: "100%" }}></img>
      <div className="mt-4">
        <div className="instructor_card d-flex align-items-md-center">
          <div>
            <img
              src={pic}
              alt=""
              width="100px"
              height="100px"
              className="rounded-circle ms-3 mb-3 border border-light border-5"
            />
          </div>
          <div className="ms-3">
            {" "}
            <h6>
              <b>Opeyemi</b>
            </h6>
            <p className="course-instructor">Posted two hours ago</p>
          </div>
          <div className="px-3">
            {" "}
            <Link to={`/write?edit=2`}>
              {" "}
              <i class="bi bi-pencil-square mx-2"></i>
            </Link>
            <i class="bi bi-trash3 mx-2"></i>
          </div>
        </div>
      </div>
      <div className="float-start float-end">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p className="pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="pb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default IndividualBlogPostTwo;