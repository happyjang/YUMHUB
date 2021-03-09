//import { sign } from "jsonwebtoken";
//import { size } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import food from "../../img/food2.jpg";

const Landing = () => {

  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <div>
          <img
            src={food}
            style={{ width: "550px" }}
            className="responsive-img food"
            alt="Undraw"
          />
          </div>
          <h4>
            Safe Food Delivery by{" "}
            <span style={{ fontFamily: "monospace" , fontSize: 69 }}>YUMHUB</span>
          </h4>
          <br />
          <div className="col s6">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable teal lighten-1"
            >
              Register
              </Link>
          </div>
          <div className="col s6">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable red accent-2"
            >
              Log In
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Landing;
