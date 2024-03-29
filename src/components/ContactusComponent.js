import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button,  Label,  Col,Row } from 'reactstrap';
import { Link } from "react-router-dom";
import { Control, Form, Errors , actions } from 'react-redux-form';

const required =  (value) => value && value.length;
const maximumLength = (len) => (value) => !(value) || (value.length <= len)
const minimumLength = (len) => (value) => value && (value.length >= len)
const isNumber = (value) => !(isNaN(Number(value)))
const validEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)


class Contact extends Component {

    constructor(props) {
        super(props);
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert("Thanks for your feedback!\n" + JSON.stringify(values))
        this.props.resetFeedbackForm();
        this.props.postFeedback( values.firstname , values.lastname , values.telNumber , values.email , values.agree , values.controlType , values.message )
    }




    render() {

        return (
            <div className="container">
                <div className="row" >
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to="/home" > Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem active > Contact Us </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12" >
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12" >
                        <h3> Send us your feedback </h3>
                    </div>

                    <div className="col-12 col-md-9" >
                        <Form model='feedback' onSubmit={ (values)=> this.handleSubmit(values) } >
                            <Row className="form-group" >
                                <Label htmlFor="firstname" md={2} >First Name: </Label>
                                <Col md={10} >
                                    <Control.text model=".firstname" name="firstname" id="firstname" placeholder="enter your firstname" 
                                    className="form-control"
                                    validators = {{ required , minimumLength: minimumLength(4) , maximumLength: maximumLength(16) }}
                                     />
                                     <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minimumLength: "Minimum length of firstname should be >= 4 characters",
                                            maximumLength: "Maximum length of firstname should be <= 16 characters"
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Label htmlFor="lastname" md={2} >Last Name: </Label>
                                <Col md={10} >
                                    <Control.text model=".lastname" name="lastname" id="lastname" placeholder="enter your lastname" 
                                    className="form-control"
                                    validators = {{ required , minimumLength: minimumLength(4) , maximumLength: maximumLength(16) }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minimumLength: "Minimum length of lastname should be >= 4 characters",
                                            maximumLength: "Maximum length of lastname should be <= 16 characters"
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Label htmlFor="telNum" md={2} >Contact no.</Label>
                                <Col md={10} >
                                    <Control.text model=".telNumber" name="telNum" id="telNum" placeholder="enter your contact no. " 
                                    className="form-control"
                                    validators = {{ required , minimumLength: minimumLength(4) , maximumLength: maximumLength(16) , isNumber }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telNumber"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minimumLength: "Minimum length of telNumber should be >= 4 numbers",
                                            maximumLength: "Maximum length of telNumber should be <= 16 numbers",
                                            isNumber: "Please enter the number........."
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Label htmlFor="email" md={2} >Email : </Label>
                                <Col md={10} >
                                    <Control.text model=".email" name="email" id="email" placeholder="enter your email" 
                                    className="form-control"
                                    validators = {{ required , validEmail }}
                                     />
                                     <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            validEmail: "Please enter valid email............"
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Col md={{ size: 6, offset: 2 }} >
                                    <div className="form-check" >
                                        <Label check >
                                            <Control.checkbox model=".agree" name="agree" 
                                            className="form-check-input"
                                             /> {'  '} <strong> May we contact you?? </strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }} >
                                    <Control.select model=".controlType" name="contactType" 
                                    className="form-control"

                                     >
                                        <option>tel.</option>
                                        <option>email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Label htmlFor="message" md={2} >Your feedback: </Label>
                                <Col md={10} >
                                    <Control.textarea model=".message" name="message" id="message" placeholder="enter your feedback" 
                                    className="form-control"
                                    rows="12" 
                                     ></Control.textarea>
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Col md={{ size: 10, offset: 2 }} >
                                    <Button type="submit" color="primary" > Send feedback </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;