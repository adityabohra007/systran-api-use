import React from "react";
import "./styles/HeadingView.css";

const HeadingView = (props) => {

    return(
        <div className="HeadingView">
            <h3 className="heading">{props.title}</h3>
            <p className="explainHeading">{props.explain}</p>
          </div>

    )
}
export default HeadingView;
