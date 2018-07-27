import React, { Component } from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import { Button,} from 'reactstrap';


class Loginpage extends Component{
  
    render() {
        return (
            <div className="New">
            <Form>
            <FormGroup>
              <Label form="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder=" " />
            </FormGroup>
              <FormGroup>
              <Label form="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder=" " />
            </FormGroup>
            <FormGroup>
              <Label form="exampleAddhobbies">Add hobbies</Label>
              <Input type="text" name="Addhobbies" id="exampleAddhobbies" placeholder=" " />
            </FormGroup>
             </Form>
             <center>
               
               <Button outline color="success">Login</Button>{' '}
            
             </center>
             </div>

     );    
   }
}
export default  Loginpage;