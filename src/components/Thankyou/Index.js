import React from 'react'
import './Index.css'
import logo from '../../assets/Infraguard Logo White.svg'
import { Link } from 'react-router-dom'
const Thank = () => {
  return (
    <div className="container bg_main py-8 ">
      <div className="row thankyou m-auto ">
        <div className="col-sm-12 text-center">
          <div className=" pb-5">
            <div className='pt-3'>
              <img src={logo} width="25%" />
              <div className="py-3">
                <h1 className="thank_desc">
                  Thank You!
                  {/* <img src={shield} /> */}
                </h1>
              </div>
              <p className="text-white">Thanks For reaching out!</p>
              <p className="text-white">
                Youe message just showed up in my inbox.Talk to you soon.
              </p>
            </div>
          </div>
          <div className="col-sm-12 text-center">
            <Link to={'/'}>
              <button className="back p-2 my-3">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thank
