import { Row } from "react-bootstrap";
import Home from "./Component/Home";
import "./App.css";

function App() {
  return (
    <>
      <Row className="m-0">NavBar</Row>
      <Row className="bg-light main-container">
        <Home />
      </Row>
    </>
  );
}

export default App;
