import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faScaleBalanced,
  faBolt,
  faMessage,
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './index.css'
const Whyinf = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [modalShow, setModalShow] = useState(false)
  return (
    <div className="py-5">
      <div className="container">
        <p className="text-center sim-heading animate__animated animate__pulse animate__infinite">
          Why InfraGuard?
        </p>
      </div>
      <div>
        <div className="col-md-8 m-auto ">
          <p className="text-center pb-4">
            The reasons to use InfraGuard are plenty. Here are some of the most
            common things our customers tell us
          </p>
        </div>
      </div>
      <div className="why-content-box">
        <div className="col-md-10 m-auto">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex ">
                  <div className="icon float-left ">
                    <FontAwesomeIcon
                      className="icon-box animate__animated animate__pulse animate__infinite"
                      icon={faGlobe}
                    />
                  </div>
                  <div className="text-box float-right ps-2">
                    <label>
                      <b className="">Lower Operating Costs</b>
                    </label>
                    <p className="py-1">
                      InfraGuard will increase the number of servers your
                      employees can manage, without sacrificing quality of work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="d-flex ">
                  <div className="icon float-left ">
                    <FontAwesomeIcon
                      className="icon-box animate__animated animate__pulse animate__infinite"
                      icon={faScaleBalanced}
                    />
                  </div>
                  <div className="text-box float-right ps-2">
                    <label>
                      <b className="">Faster Incident Resolution</b>
                    </label>
                    <p className="py-1">
                      InfraGuard provides "single pane" access to servers that
                      allows your team to manage them remotely.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="d-flex ">
                  <div className="icon float-left ">
                    <FontAwesomeIcon
                      className="icon-box animate__animated animate__pulse animate__infinite"
                      icon={faBolt}
                    />
                  </div>
                  <div className="text-box float-right ps-2">
                    <label>
                      <b className="">Scale to Greater Heights</b>
                    </label>
                    <p className="py-1">
                      Your company will be able to manage more servers with less
                      people. Automate all routine tasks and keep a lean
                      workforce.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="d-flex ">
                  <div className="icon float-left ">
                    <FontAwesomeIcon
                      className="icon-box animate__animated animate__pulse animate__infinite"
                      icon={faMessage}
                    />
                  </div>
                  <div className="text-box float-right ps-2">
                    <label>
                      <b className="">Improved Server Security</b>
                    </label>
                    <p className="py-1">
                      InfraGuard makes it really easy to manage employee access
                      to servers. Easily tie every server login to a work
                      ticket, and track all server activity for audit and
                      compliance reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
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

export default Whyinf
