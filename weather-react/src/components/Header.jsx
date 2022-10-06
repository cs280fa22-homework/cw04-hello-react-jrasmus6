import Search from "./Search";
import Container from 'react-bootstrap/Container';

function Header (props) {
  
  const { getForecast } = props;

  return (
    <div className="fixed-top mt-5">
      <Container>
        <h1>Weather App</h1>
        <Search getForecast={getForecast}/>
      </Container>
    </div>
  );
}

export default Header;