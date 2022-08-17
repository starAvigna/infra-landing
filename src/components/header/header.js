import Container from "react-bootstrap/Container";
import axios from "axios";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Logo from "../../assets/Infraguard Logo.svg";
import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import swal from "sweetalert";
export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);
  const [inputstate, setInputstate] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const scrollToSection = (value) => {
    scroller.scrollTo(value, {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const formhandler = async (e) => {
    e.preventDefault();
    const body = JSON.parse(JSON.stringify(inputstate));
    await axios.post("http://54.179.100.202:8080/send-mail", body).then((res) => {
      console.log("res", res);
      swal("Thanks you!", "Our Team Will Contact You Shortly", "success");
    });
  };
  const inputhandler = (e) => {
    const { name, value } = e.target;
    setInputstate({ ...inputstate, [name]: value });
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <Navbar expand="lg" variant="light" className="nav-bg">
          <Container className="p-0">
            <Navbar.Brand href="#" className="upper-anchor">
              <img
                className="animate__animated animate__wobble animate__repeat-2"
                width="200px"
                src={Logo}
              />
            </Navbar.Brand>
            <div className="toggler-section">
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="link-wrapper">
                    <ul>
                      <li className="canvas-link">
                        {" "}
                        <Link
                          onClick={() => {
                            scrollToSection("benefits-scroll");
                            handleClose();
                          }}
                          className="upper-anchor"
                          to="#benefits"
                        >
                          Benefits
                        </Link>
                      </li>
                      <li className="canvas-link">
                        <Link
                          onClick={() => {
                            scrollToSection("about-scroll");
                            handleClose();
                          }}
                          className="upper-anchor"
                          to="#about"
                        >
                          About
                        </Link>
                      </li>
                      <li className="canvas-link">
                        <Link
                          onClick={() => {
                            scrollToSection("customer-scroll");
                            handleClose();
                          }}
                          className="upper-anchor"
                          to="#customer"
                        >
                          Customer
                        </Link>
                      </li>
                      <li className="canvas-link">
                        <Link
                          to="/"
                          onClick={() => {
                            handleClose();
                            setModalShow(true);
                          }}
                          className="upper-anchor"
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>

              <FontAwesomeIcon
                icon={faBars}
                onClick={handleShow}
                className="animate__animated animate__zoomIn hamburger-btn"
              ></FontAwesomeIcon>
            </div>
          </Container>
        </Navbar>
      </div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form onSubmit={formhandler}>
          <Modal.Header>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="modal_heading"
            >
              Schedule a Demo
            </Modal.Title>
            <div className="modal_close" onClick={() => setModalShow(false)}>
              &times;
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-6">
                <div></div>
                <input
                  type="text"
                  name="first_name"
                  onChange={inputhandler}
                  placeholder="First name"
                  className="modal-custom-input mb-2 ps-3"
                />
              </div>
              <div className="col-sm-6">
                <div></div>
                <input
                  type="text"
                  name="last_name"
                  onChange={inputhandler}
                  placeholder="Last name"
                  className="modal-custom-input mb-2 ps-3"
                />
              </div>
              <div className="col-sm-12">
                <div></div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  onChange={inputhandler}
                  className="modal-custom-input mb-2 ps-3"
                />
              </div>
              <div className="col-sm-12">
                <div></div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={inputhandler}
                  className="modal-custom-input mb-2 ps-3"
                />
              </div>
              <div className="col-sm-12">
                <div></div>
                <input
                  type="number"
                  name="phone_no"
                  placeholder="Phone Number"
                  onChange={inputhandler}
                  className="modal-custom-input mb-2 ps-3"
                />
              </div>
              <div className="col-sm-12">
                <div></div>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  onChange={inputhandler}
                  style={{ height: "110px" }}
                  className="modal-custom-input  ps-3"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)} type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
