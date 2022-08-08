import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './index.css'
const Fwrapper = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [modalShow, setModalShow] = useState(false)
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
                  setModalShow(true)
                }}
                class="custom-btn btn-12"
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
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modal_heading"
          >
            Schedule a Demo
          </Modal.Title>
          <div className='modal_close' onClick={() => setModalShow(false)}>&times;</div>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-6">
              <div></div>
              <input
                placeholder="First name"
                className="modal-custom-input mb-2 ps-3"
              />
            </div>
            <div className="col-sm-6">
              <div></div>
              <input
                placeholder="Last name"
                className="modal-custom-input mb-2 ps-3"
              />
            </div>
            <div className="col-sm-12">
              <div></div>
              <input
                placeholder="Company"
                className="modal-custom-input mb-2 ps-3"
              />
            </div>
            <div className="col-sm-12">
              <div></div>
              <input
                placeholder="Email"
                className="modal-custom-input mb-2 ps-3"
              />
            </div>
            <div className="col-sm-12">
              <div></div>
              <input
                placeholder="Phone Number"
                className="modal-custom-input mb-2 ps-3"
              />
            </div>
            <div className="col-sm-12">
              <div></div>
              <textarea
                placeholder="Message"
                style={{ height: '110px' }}
                className="modal-custom-input  ps-3"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Fwrapper
