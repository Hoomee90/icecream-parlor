import React from "react";
import Container from 'react-bootstrap/Container';
import BucketControl from "./BucketControl";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header className="my-3" />
        <BucketControl />
      </Container>
    </React.Fragment>
  );
}

export default App;