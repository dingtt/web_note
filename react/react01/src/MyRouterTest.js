import React, { Component } from 'react'
import  {createBrowserHistory } from 'history'

class  BrowserRouter extends Comment {
    constructor (props){
        super(props)
        this.history = createBrowserHistory(this.props)
        this.state = {
            location : this.history.location
        }
    }

    componentWillUnmout(){
        
    }
}