import react, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { baseURL } from "../shared/baseURL";
import { Loading } from './LoadingComponent';
import { FadeTransform } from "react-animation-components";


function RenderItem({ item, isLoading, isError }) {

    if (isLoading) {
        return (
            <Loading />
        )
    }
    else if (isError) {
        return (
            <h4>{isError}</h4>
        )
    }
    else
        return (
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseURL + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle> {item.designation} </CardSubtitle> : null}
                        <CardText> {item.description} </CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )
}

function Home(props) {
    return (
        <div className="container" >
            <div className="row align-items-start" >
                <div className="col-12 col-md m-1" >
                    <RenderItem item={props.dish} isLoading={props.isLoadingDishes} isError={props.isErrorInDishes} />
                </div>
                <div className="col-12 col-md m-1" >
                    <RenderItem item={props.promotion} isLoading={props.isLoadingPromotions} isError={props.isErrorInPromotions} />
                </div>
                <div className="col-12 col-md m-1" >
                    <RenderItem item={props.leader} isLoading = {props.isLoadingLeaders} isError={props.isErrorInLeaders} />
                </div>

            </div>
        </div>
    )
}

export default Home;