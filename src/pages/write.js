import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import pic from "../assets/images/pic.jpg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  return (
    <>
      <Navbar />
      <WriteText />
    </>
  );
};

const WriteText = () => {
  const [value, setValue] = useState("");
  return (
    <div className="row px-5">
      <div className="py-5">
        <div class="w-50">
          {" "}
          <input
            required
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="title"
            aria-describedby="emailHelp"
          />
          <div>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: "none" }}
            // required
            type="file"
            // class="form-control"
            id="file"
            name=""
            // placeholder="title"
            // aria-describedby="emailHelp"
          />
          <label htmlFor="file">Upload Image</label>
          <div>
            <a href="#" class="btn btn-primary">
              Save as a draft
            </a>
            <a href="#" class="btn btn-primary">
              Update
            </a>
          </div>
        </div>
        <div>i2</div>
      </div>
    </div>
  );
};
