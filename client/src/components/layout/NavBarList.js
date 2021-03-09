import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import React from "react";

export const NavBarList = (props) => {
  return (
    <>
      <li>
        <Link to="/restaurants/create">Business Partner</Link>
      </li>

      <li>
        <Link to="/restaurants">Restaurant List</Link>
      </li>
      <li>
        <Link to="/orders">Your Order</Link>
      </li>
      <li>
        <b>Hello! </b> {(props.user.name || "").split(" ")[0]}
      </li>
      <li>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={props.onClick}>Logout</a>
      </li>
    </>
  );
}

NavBarList.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};
