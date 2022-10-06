import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

function Footer (props) {

  const {city, condition, temp} = props;

  return (
    <div className="fixed-bottom mb-5">
      <Container>
        <Row>
          <Col sm className="h3 my-2 align-self-start text-start">
            {city}
          </Col>
          <Col sm className="h3 my-2 align-self-center text-center">
            {condition}
          </Col>
          <Col sm className="h3 my-2 align-self-end text-end">
            {temp}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;

Footer.PropTypes = {
  city: PropTypes.string,
  condition: PropTypes.string,
  temp: PropTypes.number
}