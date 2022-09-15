import React, { useState } from 'react';
import { Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
            axios.post(`/user`, {
                firstName,
                lastName,
                checkbox
            })
        }
    
    return (
        <div className='main'>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Link to='/read'>
                <Button onClick={postData} type='submit'>Submit</Button>
                </Link>
            </Form>
        </div>
    )
}