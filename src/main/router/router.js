import React,{Component} from "react"
import{Switch, Route, Redirect} from "react-router-dom"

import Index from "../index/index"

export default class Router extends Component{
    render(){
        return(
            <Switch>
                {/* <Route path='/' exact render={() =>(<Redirect to = '/index'></Redirect>)} /> */}
                <Route path='/' component = {Index}></Route>
            </Switch>
        )
    }
}