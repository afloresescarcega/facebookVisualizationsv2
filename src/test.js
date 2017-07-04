import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar.js';
import CardInfo from './CardInfo.js';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facebookGroupName: ""
        };
    }

    componentDidMount() {
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default'
        }

        var myRequest = new Request("https://vfb-b.herokuapp.com/api?access_token=" + "EAACEdEose0cBACYZAjeXN3M9hB9kZBNhNWbG9ERGVZANEHxnna5l5K12YGfQ37hAnBgYsZBEcZAf8KdwOeyHm6E4B7b2rCxyUXWlcFADqdVae4ogpJzPfxyaxCBValGA0kbqj10gBnd125FZBzsLBVfN5AZBbPGdRJZBHCv9AiccDK5FKroCVPdZAchm7qKZCZB2SkZD", myInit);
        var secondRequest = new Request("https://vfb-b.herokuapp.com/api/id/" + "1218486471522469");
        
        fetch(myRequest).then(function (response) {
            return response;
        })
        .then(function (res) {
            fetch(secondRequest).then(function(res){
                res.json().then(function(json){
                    this.setState({facebookGroupName: json['data']['group']['name']})
                }.bind(this))
            }.bind(this))            
        }.bind(this));
    }

    render() {
        return (
            <div className="Root">

                <MenuBar />
                <CardInfo />
                {console.log(this.state.facebookGroupName)}

            </div>
        );
    }
}





export default Root;
