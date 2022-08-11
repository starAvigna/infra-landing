
import './index.css'
export default function PictureInfo(props) {
  return (
    <div className="text-center">
      <div className="picinfo">
        <div>
          <img className='simply-img py-4' src={props.image} alt={props.alt} />
        </div>
        <div className="img-box-info py-5" >
          <div>
            <div className="col-sm-11 m-auto">
              <h3 className="">{props.heading}</h3>
            </div>
            <div className="col-sm-11 m-auto">
              <p>{props.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
