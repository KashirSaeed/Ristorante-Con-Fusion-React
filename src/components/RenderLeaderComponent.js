import react, { Component } from "react";
import { Media } from "reactstrap";

function RenderLeader({ leaderName, leaderDesignation, leaderDescription , leaderImage }) {
    return (
        <Media tag="li">
            <div className="col-12 col-md-6" >
                <Media left middle>
                    <Media object src={leaderImage} alt={leaderName} />
                </Media>
            </div>
            <div className="col-12 col-md" >
                <Media body className="ml-5">
                    <Media heading>{leaderName}</Media>
                    <p> {leaderDesignation} </p>
                    <p>{leaderDescription}</p>
                </Media>
            </div>

        </Media>
    )
}

export default RenderLeader;