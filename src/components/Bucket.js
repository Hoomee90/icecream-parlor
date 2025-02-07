import React from "react";
import PropTypes from "prop-types";
import Badge from "react-bootstrap/Badge";

function Bucket(props) {
  const priceStyle = {
    fontWeight: "bold",
    color: "#00a400"
  }

  return (
    <div onClick={() => props.whenBucketClicked(props.id)}>
      <h3>{props.name}
        {props.vegan &&
          <Badge pill bg="success" className="ms-2">V</Badge>
        }
      </h3>
      <p><span style={priceStyle}>${props.price}</span> - {props.description}</p>
      <hr />
    </div>
  );
}

Bucket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  vegan: PropTypes.bool,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenBucketClicked: PropTypes.func
};

export default Bucket;