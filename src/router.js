import React from "react"
import {Route, IndexRoute} from "react-router"

import App from "./components/app"
import Content from "./containers/content"

const Green = () => {

    return (
        <div>Hello 123</div>
    )
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Content}/>
        <Route path="archive" component={Green}/>
        <Route path="livestream" component={Green}/>
        <Route path="faq" component={Green}/>
        <Route path="about" component={Content}/>
    </Route>
)
