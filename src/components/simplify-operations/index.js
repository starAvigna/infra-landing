import PictureInfo from '../img-info/index'
import Sim2 from '../../assets/pic-info-2.gif'
import Sim1 from '../../assets/pic-info-1.gif'
import Sim3 from '../../assets/pic-info-3.gif'
import Sim4 from '../../assets/pic-info-4.gif'
import './index.css'
export default function SimplifyOperation() {
  return (
    <div 
      className="container-fluid py-5 benefits-scroll"
      style={{ backgroundColor: '#f9fafb' }}
    >
      <div className="col-sm-10 m-auto text-center">
        <h3 className="sim-heading "> We Help You Simplify Your Server Operations</h3>
        <p>
          Manage all of your servers from one tool, no matter what cloud they're
          on.
        </p>
      </div>
      <div className="col-sm-11 m-auto">
        <div className="row">
          <div className="col-md-3">
            <PictureInfo
              image={Sim1}
              heading="Patch Management"
              message="Supercharge your patch management operations with powerful automation."
            />
          </div>
          <div className="col-md-3">
            <PictureInfo
              image={Sim2}
              heading="Privileged Access Management"
              message="Take complete control of who has access to cloud servers"
            />
          </div>
          <div className="col-md-3">
            <PictureInfo
              image={Sim3}
              heading="Audit & Compliance"
              message="Securely track and report on all server commands and operations."
            />
          </div>
          <div className="col-md-3">
            <PictureInfo
              image={Sim4}
              heading="Server Administration"
              message="Easily manage your server fleets through a single pane console."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
