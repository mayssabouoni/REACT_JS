
import {Form ,Button,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <div className=" App test">
      <Form>
  <Form.Group className="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control className="E1" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group  className="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="E2"type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
 < Image src="image.png" fluid />
  <Button className="B" variant="outline-primary">Primary</Button>{' '}
  <Button  className="B"variant="outline-secondary">Secondary</Button>{' '}
  <Button  className="B"variant="outline-success">Success</Button>{' '}
  <Button className="B" variant="outline-warning">Warning</Button>{' '}
  <Button  className="B"variant="outline-danger">Danger</Button>{' '}
  <Button className="B" variant="outline-info">Info</Button>{' '}
  <Button  className="B"variant="outline-light">Light</Button>{' '}
  <Button className="B" variant="outline-dark">Dark</Button>
      
    </div>
  );
}

export default App;
