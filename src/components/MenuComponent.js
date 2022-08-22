import react, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseURL } from "../shared/baseURL";


function MenuItemRender({ dish }) {
    return (

        <Card  >
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={ baseURL + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle> {dish.name} </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}




const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1" >
                <MenuItemRender dish={dish} />
            </div>
        )
    });

    if (props.dishes.isLoading) {
        return (
            <div className="container" >
                <div className="row" >
                    <Loading />
                </div>
            </div>
        )
    }

    else if (props.dishes.errorMessage) {
        return (
            <div className="container" >
                <div className="row" >
                    <h4>{props.dishes.errorMessage}</h4>
                </div>
            </div>
        )
    }
    else
        return (
            <div className="container" >
                <div className="row" >
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to="/home" > Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem active > Menu </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12" >
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row" >
                    {menu}
                </div>
            </div>
        )
}



export default Menu;