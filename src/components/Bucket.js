import React from "react";
import PropTypes from "prop-types";

function Bucket(props) {
  const scoopsLeft = props.quantity > 0;
  const priceStyle = {
    fontWeight: "bold",
    color: "#00a400"
  }

  return (
    <div onClick={() => props.whenBucketClicked(props.id)}>
      <h3>{props.name}</h3>
      <p><span style={priceStyle}>{props.price}</span> - {props.description}</p>
      {scoopsLeft
        ? <p>Scoops left: <strong>{props.quantity}</strong></p>
        : <p><strong>This bucket is empty!</strong></p>
      }
      <hr />
    </div>
  );
}

Bucket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  vegan: PropTypes.bool,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenBucketClicked: PropTypes.func
};

export default Bucket;