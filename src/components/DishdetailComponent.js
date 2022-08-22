import react, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody
    , Label, Row, Col, Button, Form, FormGroup
} from 'reactstrap';
import { Link } from "react-router-dom";
import ComponentForm from './ComponentForm';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseURL';
import { FadeTransform, Fade, Stagger } from "react-animation-components";




function RenderDish({ dish }) {
    return (
        <FadeTransform in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card  >
                <CardImg width="100%" src={baseURL + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    )
}

function RenderComment({ commentsArray, addComment, dishId, postComment }) {


    const commentsList = commentsArray.map((eachComment) => {
        var tempDate = new Date(eachComment.date)

        return (
            <Fade in>
                <li key={eachComment.id} >
                    <p>{eachComment.comment}</p>
                    <p> --{eachComment.author} , {new Intl.DateTimeFormat('en-US', { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(eachComment.date)))} </p>
                </li>
                </Fade>
        )

    })



    return (
        <Stagger in>
            {commentsList}
        </Stagger>

    )

}

const DishDetail = (props) => {

    if (props.isLoading) {
        return (
            <div className="container" >
                <div className="row" >
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.isError) {
        return (
            <div className="container" >
                <div className="row" >
                    <h4> {props.isError} </h4>
                </div>
            </div>
        )
    }

    else
        if (props.dish != null) {
            return (
                <div className="container" >

                    <div className="row" >
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to="/menu" > Menu </Link> </BreadcrumbItem>
                            <BreadcrumbItem active > {props.dish.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12" >
                            <h3>{props.dish.name} </h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-12 col-md-5 m-1" >
                            <RenderDish dish={props.dish} />
                        </div>

                        <div className="col-12 col-md-5 m-1" >
                            <h4> Comments </h4>
                            <ul className="list-unstyled" >
                                <RenderComment commentsArray={props.comments} addComment={props.addComment} dishId={props.dish.id} postComment={props.postComment} />
                                <ComponentForm addComment={props.addComment} dishId={props.dish.id} postComment={props.postComment} />
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }


}



export default DishDetail;

