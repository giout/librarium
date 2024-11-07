import PropTypes from 'prop-types'

function Modal(props) {
  return (
    <div className="card-container" onClick={props.clickMethod}>
        <div className="card-img-container">
          <img className="card-img" src={props.imgSrc} />
        </div>
        <span className="card-title text-overflow"><strong>{props.title || ''}</strong></span>
        {/* show year only */}
        <span className="card-date text-overflow">{props.date ? props.date.substring(0,4) : ''}</span>
    </div>
  )
}

Modal.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  clickMethod: PropTypes.func
};

export default Modal