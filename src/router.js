import React from "react"
import {Route, IndexRoute} from "react-router"

import App from "./components/app";
import About from "./containers/about";
import FAQ from "./containers/faq";
import Livestream from "./containers/livestream";
import Archive from "./containers/archive";
import Content from "./containers/content";
import SpeakersAll from './containers/all-speakers'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Content}/>
        <Route path="archive" component={Archive}/>
        <Route path="livestream" component={Livestream}/>
        <Route path="faq" component={FAQ}/>
        <Route path="about" component={About}/>
        <Route path="all-speakers" component={SpeakersAll}/>
    </Route>
)
