import react, { Component } from "react";
import { Media } from "reactstrap";

function RenderLeader({ leaderName, leaderDesignation, leaderDescription , leaderImage }) {
    return (
        <Media tag="li">
                <Media left middle>
                    <Media object src={leaderImage} alt={leaderName} />
                </Media>
                <Media body className="ml-5 contentHider">
                    <Media heading>{leaderName}</Media>
                    <p> {leaderDesignation} </p>
                    <p>{leaderDescription}</p>
                </Media>

        </Media>
    )
}

export default RenderLeader;