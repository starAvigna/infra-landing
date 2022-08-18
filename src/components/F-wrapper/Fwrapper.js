import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import swal from "sweetalert";
import axios from "axios";
const Fwrapper = () => {
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
  const formhandler = async (e) => {
    e.preventDefault();
    const body = JSON.parse(JSON.stringify(inputstate));
    await axios.post("http://54.179.100.202:8081/send-mail", body).then((res) => {
      console.log("res", res);
      swal("Thanks you!", "Our Team Will Contact You Shortly", "success");
    });
  };
  const inputhandler = (e) => {
    const { name, value } = e.target;
    setInputstate({ ...inputstate, [name]: value });
  };
  return (
    <div className="fwrapper py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="head-f-text">Ready to Start?</p>
            <p className="head-fs-text">
              Contact our team for demo and free trial.
            </p>
          </div>
          <div className="col-md-6">
            <div className="btn-controll">
              <button
                onClick={() => {
                  setModalShow(true);
                }}
                className="custom-btn btn-12"
              >
                <span>Click!</span>
                <span>Schedule A Demo</span>
              </button>
            </div>
          </div>
        </div>
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
};

export default Fwrapper;
