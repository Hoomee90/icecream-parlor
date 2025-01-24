import React from "react";
import PropTypes from "prop-types";

function BucketDetail(props) {
  const { bucket } = props;
  const disabled = bucket.quantity <= 0
  const buttonStyles = {
    marginRight: "1em"
  }
  const priceStyle = {
    fontWeight: "bold",
    color: "#00a400"
  }

  return (
    <React.Fragment>
      <h2>{bucket.name}</h2>
      <p>{props.vegan &&
        <Badge pill bg="success">V</Badge>
      }</p>
      <p><span style={priceStyle}>{props.price}</span> - {bucket.description}</p>
      {disabled
        ? <p><strong>This bucket is empty!</strong></p>
        : <p>Scoops left: <strong>{props.quantity}</strong></p>
      }
      <button onClick={() => props.onClickingChangeStock()} disabled={disabled} style={buttonStyles}>Buy</button>
      <button onClick={() => props.onClickingDelete(item.id)} style={buttonStyles}>Remove Bucket</button>
      <hr />
    </React.Fragment>
  );
}

BucketDetail.propTypes = {
  bucket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingChangeStock: PropTypes.func
};

export default BucketDetail;