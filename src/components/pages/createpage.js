import React, { Component } from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
import { Button,} from 'reactstrap';


class Createpage extends Component{
  
    render() {
        return (
            <div className="Create">
            
            <Form>
            <FormGroup>
              <Label form="exampleFirstName">First Name</Label>
              <Input type="text" name="first Name" id="exampleFirstName" placeholder=" " />
            </FormGroup>
            <FormGroup>
              <Label form="exampleFirstName">Last Name</Label>
              <Input type="text" name="last Name" id="exampleLastName" placeholder=" " />
            </FormGroup>
            <FormGroup>
              <Label form="exampleFirstName">Address</Label>
              <Input type="text" name="address" id="exampleAddress" placeholder=" " />
            </FormGroup>
            <FormGroup>
            <Label form="examplesex">Sex</Label>
            <select>
	           <option value ="Male">male</option>
	           <option value ="female">female</option>
            	</select>
           </FormGroup>  
           <FormGroup>
              <Label form="exampleAddhobbies">Add hobbies</Label>
              <Input type="text" name="Addhobbies" id="exampleAddhobbies" placeholder=" " />
            </FormGroup>
            <FormGroup>
              <Label form="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder=" " />
            </FormGroup>
              <FormGroup>
              <Label form="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder=" " />
            </FormGroup>
             </Form>
             <center>
               <Link to="/loginpage">
               <Button outline color="primary">Create</Button>{' '}
             </Link>
             </center>
             </div>

     );    
   }
}
export default Createpage;