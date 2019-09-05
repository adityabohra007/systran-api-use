import React,{ Component } from "react";

import "./styles/DetectView.css";
import "./styles/MainView.css";

import HeadingView from "./HeadingView";
class DetectView extends Component{

    constructor(){
        super();
        this.state={}
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    render(){
        return(
       <div className="MainSectionView">

        <HeadingView title="Detect Language " explain="Enter the Sentence to Detect Language" />

          <section className="SectionView" id="Detect">
           <input type="text" placeholder="Enter Your Text" />
        <button onClick={ this.handleOnClick }>Detect Language</button>
        </section>
        <section className="OutputView">
            <p>Here is Output</p>
           <p className="OutputPara">Bonjour! garcon</p>
        </section>
        </div>

        )
    }
    handleOnClick(){
         let input = document.querySelector("section#Detect input").value;
        console.log(input);
    }
}
export default DetectView;
