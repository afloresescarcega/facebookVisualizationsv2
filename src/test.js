import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar.js';
import CardInfo from './CardInfo.js';
import { Card, Icon } from 'semantic-ui-react'


class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facebookGroupName: "",
            facebookGroupId: "",
        };
    }


    // checkout www.open-austin.org/
    componentDidMount() {
        var myHeaders = new Headers();

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default'
        }

        // var myRequest = new Request("https://vfb-b.herokuapp.com/api?access_token=" + "EAACEdEose0cBAJrW0Aty6mZA8JUS177NMhe6OnZCGsSFmyJCCJtqxcw6jatptc21ZAAMxgI9hwupOuKpncRy9XsZAV9IOcHhZCnlJHyXydJEzFvf6aJUrXZCTZAyfWRZA4oE1xelLdRWoZAH1n7xDpnTmwdmzjDWzwg1p6iEVVBkeUMihuK5l6CFmLXZBNmZCJIbQ8ZD", myInit);
        var myRequest = new Request("http://localhost:5000/api?access_token=" + "EAACEdEose0cBAJrW0Aty6mZA8JUS177NMhe6OnZCGsSFmyJCCJtqxcw6jatptc21ZAAMxgI9hwupOuKpncRy9XsZAV9IOcHhZCnlJHyXydJEzFvf6aJUrXZCTZAyfWRZA4oE1xelLdRWoZAH1n7xDpnTmwdmzjDWzwg1p6iEVVBkeUMihuK5l6CFmLXZBNmZCJIbQ8ZD", myInit);
        // var secondRequest = new Request("https://vfb-b.herokuapp.com/api/id/" + "1218486471522469");
        var secondRequest = new Request("http://localhost:5000/api/id/" + "155607091223285");

        fetch(myRequest).then(function (response) {
            return response;
        })
            .then(function (res) {
                fetch(secondRequest).then(function (res) {
                    res.json().then(function (json) {
                        this.setState({ facebookGroupName: json['data']['group']['name'] })
                        console.log(json['data'])
                    }.bind(this))
                }.bind(this))
            }.bind(this));
    }

    render() {
        return (
            <div className="Root">

                <MenuBar />
                <CardInfo {this.props.facebookGroupName} />
                {console.log(this.state.facebookGroupName)}

            </div>
        );
    }
}





export default Root;
