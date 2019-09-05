import  React from  'react';

import TranslateView from "./TranslateView";
import DetectView from "./DetectView";
import AnonymousView from "./AnonymousView";
import TranscribeView from "./TranscribeView";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/NavigationView.css";

const  NavigationView = () =>{
   return(
        <Router>
            <nav className= "NavigationView">
                <ul>
                    <li><Link to="/">Translate </Link></li>
                    <li><Link to="/detect/">Detect</Link></li>
                    <li><Link to="/anonymouse/">Anonyomise</Link></li>
                    <li><Link to="/transcribe/">Transcribe</Link></li>
                    <li><Link to="/extract/">Extract</Link></li>

               </ul>
            </nav>
        <Route path="/" exact component ={ TranslateView } />
        <Route path = "/detect/" component = {DetectView} />
       <Route path = "/anonymouse/" component = {AnonymousView} />
       <Route path = "/transcribe/" component = {TranscribeView} />
        </Router>

    )
}


export default NavigationView;
