import React from 'react';
import NewBucketForm from './NewBucketForm.js';
import BucketList from './BucketList.js';
import BucketDetail from './BucketDetail.js';

class BucketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBucketList: [],
      selectedBucket: null
    };
  }

  handleChangingSelectedBucket = (id) => {
    const selectedBucket = this.state.mainBucketList.find(bucket => bucket.id === id);
    this.setState({ selectedBucket: selectedBucket });
  }

  handleChangingStock = (isRestock) => {
    const editedBucket = { ...this.state.selectedBucket, quantity: this.state.selectedBucket.quantity + (isRestock ? 1 : - 1) }
    const editedMainBucketList = this.state.mainBucketList
      .map(bucket => bucket = bucket.id === this.state.selectedBucket.id ? editedBucket : bucket);
    this.setState({
      selectedBucket: editedBucket,
      mainBucketList: editedMainBucketList
    })
  }

  handleDeletingBucket = (id) => {
    const newMainBucketList = this.state.mainBucketList.filter(bucket => bucket.id !== id);
    this.setState({
      mainBucketList: newMainBucketList,
      selectedBucket: null
    });
  }

  handleAddingNewBucketToList = (newBucket) => {
    const newMainBucketList = this.state.mainBucketList.concat(newBucket);
    this.setState({
      mainBucketList: newMainBucketList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.selectedBucket) {
      this.setState({
        formVisibleOnPage: false,
        selectedBucket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedBucket) {
      currentlyVisibleState = <BucketDetail
        bucket={this.state.selectedBucket}
        onClickingDelete={this.handleDeletingBucket}
        onClickingChangeStock={this.handleChangingStock} />
      buttonText = "Return to Ice Cream List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBucketForm onNewBucketCreation={this.handleAddingNewBucketToList} />
      buttonText = "Return to Ice Cream List";
    }
    else {
      currentlyVisibleState = <BucketList
        bucketList={this.state.mainBucketList}
        onBucketSelection={this.handleChangingSelectedBucket} />
      buttonText = "Add Bucket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BucketControl;