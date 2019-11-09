import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';


class Containers extends React.Component{

      render(){
           return(
            <div>
          <Jumbotron>
          </Jumbotron>
               <Container>
               <Row>
                 <h1>{this.props.ctr}</h1>
                 <Col>
                 <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted" onChange={this.props.increaseCounter}>
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.KeyUpHandler} />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                 </Col>
               </Row>
             </Container>
            </div>
           );
      }
}


const mapStateToProps = state => {
  return {
        ctr: state.counter
  }
}

const mapDispatchToProps = dispatch =>{
   return {
       increaseCounter : () => dispatch({type:'INCRE'})
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Containers);