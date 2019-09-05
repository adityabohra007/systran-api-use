import React,{ Component } from "react";
import "./styles/AnonymousView.css";
import HeadingView from "./HeadingView";
class AnonymousView extends Component{
    constructor(){
        super();
        this.state={};
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnClick(){
        let input = document.querySelector("section#Anonymous input").value;
        console.log(input);
    }
    render(){
        return(
       <div className="MainSectionView">

        <HeadingView title="Anonyomous Sentence " explain="Enter the Sentence to Anonyoumise  Sentence" />

          <section className="SectionView" id="Anonymous">
           <input type="text" placeholder="Enter Your Text" />
        <button onClick={this.handleOnClick}>Detect Language</button>
        </section>
        <section className="OutputView">
            <p>Here is Output</p>
           <p className="OutputPara">Bonjour! garcon</p>
        </section>
        </div>


        )
    }
}

export default AnonymousView;
