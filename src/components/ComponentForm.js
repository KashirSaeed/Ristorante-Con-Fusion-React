import react, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from "reactstrap";

const required = (value) => value && value.length;
const maximumLength = (len) => (value) => !(value) || (value.length <= len)
const minimumLength = (len) => (value) =>  (value) && (value.length >= len)


class ComponentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleOnSubmit(values) {
        this.toggleModal()
        this.props.postComment(this.props.dishId , values.rating , values.myName , values.comment)
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggleModal} outline type="submit" ><span className="fa fa-pencil fa-lg" ></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
                    <ModalBody  >
                        <LocalForm onSubmit={ (values)=> this.handleOnSubmit(values) } >
                            <Row className="form-group" >
                                <Label forhtml="rating" className="col-12" > <strong>Rating</strong></Label>
                                <Col className="col-12" >
                                    <Control.select id="rating" name="rating" model=".rating" className="form-control"
                                        >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Label className="col-12" forhtml="myName"  > <strong>Your name</strong></Label>
                                <Col className="col-12" >
                                    <Control.text id="myName" name="myName" model=".myName" className="form-control" placeholder="enter author name"
                                        validators={{ required , minimumLength: minimumLength(3) , maximumLength:maximumLength(15) }}>
                                    </Control.text>
                                    <Errors
                                        className="text-danger"
                                        model=".myName"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minimumLength: "Minimum length of name should be >= 3 characters",
                                            maximumLength:"Maximum length of name should be <= 15 characters",
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group" >
                                <Label className="col-12" forhtml="comment"  > <strong>Comment</strong></Label>
                                <Col className="col-12" >
                                    <Control.textarea id="comment" name="comment" model=".comment" className="form-control" rows="6" placeholder="enter your comment" >
                                    </Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-group" >
                                <Col className="col-12" >
                                  <Button type="submit" color="primary" >Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ComponentForm;