import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Logo from '../../assets/Infraguard Logo.svg'
import { Link } from 'react-router-dom'
import './index.css'
import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
export default function Header() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [modalShow, setModalShow] = useState(false)
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
                        {' '}
                        <Link className="upper-anchor" to="/">
                          About
                        </Link>
                      </li>
                      <li className="canvas-link">
                        <Link className="upper-anchor" to="/">
                          Benefits
                        </Link>
                      </li>
                      <li className="canvas-link">
                        <Link className="upper-anchor" to="/">
                          Customer
                        </Link>
                      </li>
                      <li className="canvas-link">
                        <Link
                          to="/"
                          onClick={() => {
                            handleClose()
                            setModalShow(true)
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
          <Button onClick={() => setModalShow(false)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
