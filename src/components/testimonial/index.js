import './index.css'
export default function Testimonials(props) {
  return (
    <div>
      <div className="container-fluid testimonaial-bg">
        <div className="container  testimonaial-content ">
          <div className="row mt-5">
            <div className="col-sm-4">
              <div className="d-flex justify-content-center">
                <img src={props.img_path} />
              </div>
            </div>
            <div className="col-sm-8 text-white">
              <h2>Why Global Leaders Love INFRAGUARD? </h2>
              <p>{props.content}</p>
              <h4>{props.author}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
