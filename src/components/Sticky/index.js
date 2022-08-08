import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const StickyBox = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [modalShow, setModalShow] = useState(false)
  return (
    <div className="sticky text-center">
      <FontAwesomeIcon
        onClick={() => {
          setModalShow(true)
        }}
        icon={faMessage}
      />
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
          <div className="modal_close" onClick={() => setModalShow(false)}>
            &times;
          </div>
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
          <Button
            style={{ borderRadius: '0px' }}
            onClick={() => setModalShow(false)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default StickyBox
