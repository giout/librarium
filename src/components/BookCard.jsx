import PropTypes from 'prop-types'

function BookCard(props) {
  return (
    <div className="card-container" onClick={props.clickMethod}>
        <div className="card-img-container">
          <img className="card-img" src={props.imgSrc || './src/assets/book-default.png'} />
        </div>
        <span className="card-title text-overflow"><strong>{props.title || ''}</strong></span>
        <span className="card-date text-overflow">{props.date || ''}</span>
    </div>
  )
}

BookCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.number,
  clickMethod: PropTypes.func
};

export default BookCard