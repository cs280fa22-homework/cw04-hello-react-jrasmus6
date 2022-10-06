import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Search (props) {

  const { getForecast } = props;
  const [query, setQuery] = useState("");

  const handleOnChange = (event) => {
    setQuery(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // make an api call get weather forcast and update the UI
    getForecast(query);
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Control
        size="lg"
        name="city"
        type="text"
        placeholder="Enter a location to get weather forecast"
        value={query}
        onChange={handleOnChange}
      />
    </Form>
  )
}

export default Search;