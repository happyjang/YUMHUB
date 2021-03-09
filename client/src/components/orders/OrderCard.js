import * as PropTypes from "prop-types";
import React from "react";

export const OrderCard = (props) => {
  const { description, _restaurant, status, total_amount } = props.order;

  const statChange = (stat) => {
    props.onStatusChange(stat)
    //console.log(props.order)
    if (stat == "cancelled") {
    props.order.total_amount = 0
    }
    //console.log(stat)
  }

  return (
    <div className="col s4 m4">
      <div className="card grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{_restaurant.name}</span>
          <p>{description}</p>
        </div>
        <div className="card-panel  red lighten-2">
          {[
            "placed",
            "cancelled"
          ].map(stat => (
            <div
              style={{
                cursor: "pointer",
                color: status === stat ? "green" : "unset",
                fontWeight: status === stat ? 800 : "unset"
              }}
              className="chip"
              //onClick={() => props.onStatusChange(stat)}
              onClick={() => statChange(stat)}

            >
              {stat}
            </div>
          ))}
          <div style={{ fontWeight: 700 }}>Total Price: $ {total_amount}</div>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = { order: PropTypes.any };
