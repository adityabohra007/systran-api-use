import React,{ Component } from "react";
import "./styles/MainView.css";
import HeadingView from "./HeadingView";

class TranscribeView extends Component{
    constructor(){
        super();
        this.state={};
        this.handleOnClick =this.handleOnClick.bind(this);

    }
     handleOnClick() {
       let input = document.querySelector("section#Transcribe input").value;
       let select = document.querySelector("section#Transcribe select").value;
       console.log(input,select);
    }
    render(){
        return(
      <div className="MainSectionView">
        <HeadingView title="Transcribe " explain="Enter The Text" />
          <section className="SectionView" id="Transcribe">
           <input type="text" placeholder="Enter Your Text" />
           <select>
             <option value="Japanese">Japanese</option>
             <option value="Chinese">Chinese</option>
          </select>
        <button onClick={ this.handleOnClick }>Transcribe</button>
        </section>
        <section className="OutputView">
            <p>Here is Output</p>
           <p className="OutputPara">Bonjour! garcon</p>
        </section>
        </div>

        )
    }

}

export default TranscribeView;

