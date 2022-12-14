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
import swal from 'sweetalert'
import axios from 'axios'
// import { useForm } from '@formcarry/react'
import { PopupWidget } from 'react-calendly'

const Whyinf = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [modalShow, setModalShow] = useState(false)
  const [inputstate, setInputstate] = useState({
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    phone_no: '',
    message: '',
  })
  // const { state, submit } = useForm({
  //   id: '6O96DYpHn',
  // })
  //   if (state.submitting) {
  //   swal('Thank you!', 'Our Team Will Contact You Shortly', 'success')
  // }

  const inputhandler = (e) => {
    const { name, value } = e.target
    setInputstate({ ...inputstate, [name]: value })
  }
  return (
    <div className="py-5 about-scroll">
      <div className="container">
        <p className="text-center sim-heading animate__animated animate__pulse animate__infinite">
          Why InfraGuard?
        </p>
      </div>
      <div>
        <div className="col-md-8 m-auto ">
          <p className="text-center pb-4 px-2">
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
      <div className="text-center py-3  popupbutton">
        {/* <button
          className="custom-btn btn-12">
          <span>Click!</span>
          <span>Schedule A Demo</span>
        </button> */}
        <PopupWidget
          url="https://calendly.com/infraguard/infraguard-demo"
          rootElement={document.getElementById('root')}
          text="Schedule A Demo"
          className="custom-btn btn-12"
        />
      </div>
      {/* <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form>
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
                  id="first_name"
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
                  id="last_name"
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
                  id="company"
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
                  id="email"
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
                  id="phone_no"
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
                  id="message"
                  placeholder="Message"
                  onChange={inputhandler}
                  style={{ height: '110px' }}
                  className="modal-custom-input  ps-3"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={() => setModalShow(false)}>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal> */}
    </div>
  )
}

export default Whyinf

// import React from "react";
// import { useForm } from "@formcarry/react";

// function MyFormcarry() {
//   // Call the "useForm" hook in your function component
//   const { state, submit } = useForm({
//     id: "6O96DYpHn",
//   });

//   // Success message
//   if (state.submitted) {
//     return <div>Thank you! We received your submission.</div>;
//   }

//   return (
//     <form onSubmit={submit}>
//       <label htmlFor="email">Email</label>
//       <input id="email" type="email" name="email" />

//       <label htmlFor="message">Message</label>
//       <textarea id="message" name="message" />

//       <button type="submit">Send</button>
//     </form>
//   );
// }
