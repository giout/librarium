import PropTypes from 'prop-types';

function Fetch(props) {
  return (
    <h1>{props.section}</h1>
  )
}

Fetch.propTypes = {
  section: PropTypes.string
};

export default Fetch;