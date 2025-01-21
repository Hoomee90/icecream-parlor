import React from "react";
import Bucket from "./Bucket";
import PropTypes from "prop-types";

function BucketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.bucketList.map((bucket) =>
        <Bucket
          whenBucketClicked={props.onBucketSelection}
          name={bucket.name}
          description={bucket.description}
          price={bucket.price}
          vegan={bucket.vegan}
          quantity={bucket.quantity}
          id={bucket.id}
          key={bucket.id} />
      )}
    </React.Fragment>
  );
}

BucketList.propTypes = {
  bucketList: PropTypes.array,
  onBucketSelection: PropTypes.func
};

export default BucketList;