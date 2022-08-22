import react, { Component } from "react";
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink, withRouter } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.stateToggler = this.stateToggler.bind(this);
        this.modalToggler = this.modalToggler.bind(this);
        this.handleSubmittion = this.handleSubmittion.bind(this);

    }

    stateToggler() {
        this.setState({ isNavOpen: !this.state.isNavOpen })
    }

    modalToggler() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleSubmittion(event){
        this.modalToggler();
        alert("username is:--  "+this.username.value+ "password is:--  "+this.password.value+"remember me:-  "+this.remember.value )
        event.preventDefault();
    }




    render() {
        return (
            <react.Fragment>
                <div>
                <Navbar dark expand="md" >
                    <div className="container" >
                        <NavbarToggler onClick={this.stateToggler} />
                        <NavbarBrand href="/"  ><img width="41" height="30" src="assets/images/logo.png" alt="Ristorante con Fusion" /> </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar  >
                            <Nav navbar className="mr-auto" >
                                <NavItem  >
                                    <NavLink className="nav-link" to="/home" ><span className="fa fa-home fa-lg" ></span> Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus" ><span className="fa fa-info fa-lg" ></span> About Us</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu" ><span className="fa fa-list fa-lg" ></span> Menu</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus" ><span className="fa fa-address-card fa-lg" ></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar >
                                <NavItem> <Button outline onClick={this.modalToggler} > <span className="fa fa-sign-in fa-lg" ></span> Login </Button> </NavItem>
                            </Nav>

                        </Collapse>

                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container" >
                        <div className="row row-header" >
                            <div className="col-12 col-sm-6"     >
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                </div>

                <Modal  isOpen={this.state.isModalOpen} toggle={this.modalToggler} >
                    <ModalHeader toggle={this.modalToggler} > Login </ModalHeader>
                    <ModalBody  >
                        <Form onSubmit={this.handleSubmittion} >
                            <FormGroup>
                                <Label htmlFor="username" >Username</Label>
                                <Input 
                                    type="text" 
                                    name="username" 
                                    id="username"
                                    innerRef={ (input)=> this.username = input }  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password" >Password</Label>
                                <Input type="password" 
                                    name="password" 
                                    id="password"
                                    innerRef={ (input)=> this.password = input }  />
                            </FormGroup>
                            <FormGroup check >
                                <Label check >
                                    <Input 
                                        type="checkbox"
                                        name="remember"
                                        value="false"
                                        innerRef={ (input)=> this.remember = input }  /> Remember me
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit" value="submit" color="primary" >Login</Button>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                </Modal>
            </react.Fragment>
        )
    }
}

export default Header;