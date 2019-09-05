import React,{ Component } from "react";
import "./styles/MainView.css";
import HeadingView from "./HeadingView";

class TranslateView extends Component{
    constructor(){
        super();
        this.state={};
        this.handleOnClick = this.handleOnClick.bind(this);
        this.fetchSupportedLanguages()


    }

    fetchSupportedLanguages(){
        fetch("https://api-platform.systran.net/translation/supportedLanguages?key=cd0a8c75-2107-43c7-801a-421edeadb008")
        .then(resp =>resp.json())
            .then(data =>{
                console.log(data);
            }).catch(err =>{ console.log(err); })
    }

    render(){
        return(
      <div className="MainSectionView">
        <HeadingView title="Translate To Other Language" explain="Enter The Text and Select Language to translate to" />
          <section className="SectionView" id="Translate">
            <p>Translate</p>
           <input type="text" placeholder="Enter Your Text" />
           <select>
             <option value="fr">French</option>
             <option value="gr">German</option>
          </select>
        <button onClick={this.handleOnClick}>Translate</button>
        </section>
        <section className="OutputView" id="Translate">
            <p>Here is Output</p>
           <p className="OutputPara">Bonjour! garcon</p>
        </section>
        </div>

        )
    }
    handleOnClick(){
        let input = document.querySelector("section#Translate input").value;
        let target = document.querySelector("section#Translate select").value;
        console.log(input)
        let source = "auto"
        this.fetchFunction(input,source,target)
    }


    fetchFunction(input,source,target){
         fetch(
        "https://api-platform.systran.net/translation/text/translate?key=cd0a8c75-2107-43c7-801a-421edeadb008&input="+input+"&        source="+source+"&target="+target+"")
.then(response => response.json())
.then(data =>{
	console.log(data['outputs'][0].output);
    let output = data['outputs'][0].output;
    let outputElement = document.querySelector(".OutputView#Translate .OutputPara");
    outputElement.innerHTML = output;
})
.catch(err => {
	console.log(err);
});
    }
}

export default TranslateView;

