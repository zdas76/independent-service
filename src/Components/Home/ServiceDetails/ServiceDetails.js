import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    
    return (
        <div className='text-center my-5'>
            <h1>Service ID: {serviceId}</h1>
            <h1>conformed your booking</h1>

            <div className='container'>
                
                <Form>
                    <fieldset disabled>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Disabled select</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                label="Can't check this"
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </fieldset>
                </Form>
            </div>
        </div>
    );
};

export default ServiceDetails;