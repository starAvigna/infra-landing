import './index.css'
import 'animate.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Home6 from '../../assets/main-home.png'
import { useEffect, useState } from 'react'
export default function UpperBody() {
  const [classname1, setClassname1] = useState({
    mode: false,
    Classaccess1: 'chatBox-hide',
  })
  const [classname2, setClassname2] = useState({
    mode: false,
    Classaccess2: 'chatBox-hide',
  })
  const [classname3, setClassname3] = useState({
    mode: false,
    Classaccess3: 'chatBox-hide',
  })
  const [classname4, setClassname4] = useState({
    mode: false,
    Classaccess4: 'chatBox-hide',
  })
  const [classname5, setClassname5] = useState({
    mode: false,
    Classaccess5: 'chatBox-hide',
  })
  const [classname6, setClassname6] = useState({
    mode: false,
    Classaccess6: 'chatBox-hide',
  })

  // end state
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [modalShow, setModalShow] = useState(false)
  const showinfo1 = () => {
    setClassname1({
      mode: true,
      Classaccess1: 'chatBox1',
    })
    classname1.mode
      ? setClassname1({
          mode: false,
          Classaccess1: 'chatBox-hide',
        })
      : setClassname1({
          mode: true,
          Classaccess1: 'chatBox1',
        })
  }
  const showinfo2 = () => {
    setClassname2({
      mode: true,
      Classaccess2: 'chatBox2',
    })
    classname2.mode
      ? setClassname2({
          mode: false,
          Classaccess2: 'chatBox-hide',
        })
      : setClassname2({
          mode: true,
          Classaccess2: 'chatBox2',
        })
  }
  const showinfo3 = () => {
    setClassname3({
      mode: true,
      Classaccess3: 'chatBox3',
    })
    classname3.mode
      ? setClassname3({
          mode: false,
          Classaccess3: 'chatBox-hide',
        })
      : setClassname3({
          mode: true,
          Classaccess3: 'chatBox3',
        })
  }
  const showinfo4 = () => {
    setClassname4({
      mode: true,
      Classaccess4: 'chatBox4',
    })
    classname4.mode
      ? setClassname4({
          mode: false,
          Classaccess4: 'chatBox-hide',
        })
      : setClassname4({
          mode: true,
          Classaccess4: 'chatBox4',
        })
  }
  const showinfo5 = () => {
    setClassname5({
      mode: true,
      Classaccess5: 'chatBox5',
    })
    classname5.mode
      ? setClassname5({
          mode: false,
          Classaccess5: 'chatBox-hide',
        })
      : setClassname5({
          mode: true,
          Classaccess5: 'chatBox5',
        })
  }
  const showinfo6 = () => {
    setClassname6({
      mode: true,
      Classaccess6: 'chatBox6',
    })
    classname6.mode
      ? setClassname6({
          mode: false,
          Classaccess6: 'chatBox-hide',
        })
      : setClassname6({
          mode: true,
          Classaccess6: 'chatBox6',
        })
  }
  useEffect(() => {
    setClassname1({
      mode: true,
      Classaccess1: 'chatBox1',
    })
    setClassname2({
      mode: true,
      Classaccess2: 'chatBox2',
    })
    setClassname3({
      mode: true,
      Classaccess3: 'chatBox3',
    })
    setClassname4({
      mode: true,
      Classaccess4: 'chatBox4',
    })
    setClassname5({
      mode: true,
      Classaccess5: 'chatBox5',
    })
    setClassname6({
      mode: true,
      Classaccess6: 'chatBox6',
    })

    setTimeout(() => {
      setClassname1({
        mode: false,
        Classaccess1: 'chatBox-hide',
      })
      setClassname2({
        mode: false,
        Classaccess2: 'chatBox-hide',
      })
      setClassname3({
        mode: false,
        Classaccess3: 'chatBox-hide',
      })
      setClassname4({
        mode: false,
        Classaccess4: 'chatBox-hide',
      })
      setClassname5({
        mode: false,
        Classaccess5: 'chatBox-hide',
      })
      setClassname6({
        mode: false,
        Classaccess6: 'chatBox-hide',
      })
    }, 15000)
  }, [])

  return (
    <div className="container-fluid home_bg d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-12 col-sm-6 align-self-center">
            <h4 className="col-sm-12 sim-heading animate__animated animate__rubberBand  animate__delay-1s ">
              MULTITASKING <br />
              IS NOT THE SOLUTION
              <a
                className="upper-anchor"
                href="#"
                id="style-2"
                data-replace="INFRAGUARD"
              >
                <span className="infra-font">INFRAGUARD </span>
              </a>
              <span className="fs-is">is!</span>
            </h4>
            <div className="mb-4">
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

          <div className="col-12 col-sm-6">
            <div className="hl-container pull-right animate__animated animate__bounceInDown">
              <img
                src={Home6}
                className="hl-image"
                alt="A man with several hand to show what he can do for us like server management, patch management process, privileged user access, aws privileged access management, cloud privileged access management, server administration, server management services, cloud server management"
              />
              <ul>
                <li className="hl-point hl-point1">
                  <div className="trigger-wrap">
                    <a onClick={showinfo1} className="trigger"></a>
                  </div>

                  <div className={classname1.Classaccess1}>
                    <div className="d-flex justify-content-center">
                      <p className="fw-bold">SERVER ADMINISTRATION</p>
                    </div>
                  </div>
                </li>

                <li className="hl-point hl-point2">
                  <div className="trigger-wrap">
                    <a onClick={showinfo2} className="trigger"></a>
                  </div>
                  <div className={classname2.Classaccess2}>
                    <p className="fw-bold">CMDB</p>
                  </div>
                </li>

                <li className="hl-point hl-point3">
                  <div className="trigger-wrap">
                    <a onClick={showinfo3} className="trigger"></a>
                  </div>
                  <div className={classname3.Classaccess3}>
                    <p className="fw-bold">PATCH MANAGEMENT</p>
                  </div>
                </li>
                <li className="hl-point hl-point4">
                  <div className="trigger-wrap">
                    <a onClick={showinfo4} className="trigger"></a>
                  </div>
                  <div className={classname4.Classaccess4}>
                    <div className="d-flex justify-content-center">
                      <p className="fw-bold">SERVER ADMINISTRATION</p>
                    </div>
                  </div>
                </li>

                <li className="hl-point hl-point5">
                  <div className="trigger-wrap">
                    <a onClick={showinfo5} className="trigger pointer"></a>
                  </div>
                  <div className={classname5.Classaccess5}>
                    <p className="fw-bold">WAF</p>
                  </div>
                </li>

                <li className="hl-point hl-point6">
                  <div className="trigger-wrap">
                    <a onClick={showinfo6} className="trigger"></a>
                  </div>
                  <div className={classname6.Classaccess6}>
                    <p className="fw-bold">REPORTING</p>
                  </div>
                </li>
              </ul>
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
