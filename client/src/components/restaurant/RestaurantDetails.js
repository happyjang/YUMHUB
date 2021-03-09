import * as PropTypes from "prop-types";
import React from "react";
import food from "../../img/food5.jpg";

export const RestaurantDetails = (props) => {
  return (
    <>
      <div>
        <img
          src={food}
          style={{ width: "200px" }}
          className="responsive-img food"
          alt="Undraw"
        />
      </div>
      <h4>
        <b>Tell Customer About Your Restaurant!</b>
        </h4>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.name}
          id="name"
          type="text"
        />
        <label htmlFor="name">Restaurant Name</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.type}
          id="type"
          type="text"
        />
        <label htmlFor="type">Restaurant Type</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={props.onChange}
          value={props.description}
          id="description"
          type="text"
        />
        <label htmlFor="description">Restaurant Description</label>
      </div>
    </>
  );
}

RestaurantDetails.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.any,
  type: PropTypes.any,
  description: PropTypes.any
};
