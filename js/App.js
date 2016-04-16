import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';

var users_test = [
    {
        "id": 0,
        "name": "Chad Snyder",
        "age": 28,
        "phone": "(629) 653-9041",
        "image": "owl",
        "phrase": "Owmeco jen be tezpoksim vojuz..."
    },
    {
        "id": 1,
        "name": "Vasya",
        "age": 15,
        "phone": "(629) 78-987",
        "image": "owl",
        "phrase": "My be..."
    },
    {
        "id": 2,
        "name": "asha",
        "age": 20,
        "phone": "(629) 78-987",
        "image": "owl",
        "phrase": "My be..."
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersFilter: [],
            query: '',
            activeUserId: 0
        };
    }

    componentDidMount() {
        fetch('/data.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    users: responseJson,
                    usersFilter: responseJson
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    setActiveUser(id) {
        this.setState({
            activeUserId: id
        });
    }

    filterUsers(query) {
        var usersFilter = _.filter(this.state.users, function(user){ return user.name.indexOf(query) != -1; });
        var activeUserId = (!_.isEmpty(usersFilter)) ? usersFilter[0].id : 0;
        this.setState({
            query: query,
            usersFilter: usersFilter,
            activeUserId: activeUserId
        });
    }

    sortUsers(field, sort) {
        var usersFilter = _.orderBy(this.state.usersFilter, [field], [sort]);
        var activeUserId = (!_.isEmpty(usersFilter)) ? usersFilter[0].id : 0;
        this.setState({
            usersFilter: usersFilter,
            activeUserId: activeUserId
        });
    }

    render() {
        var activeUserModel = _.find(this.state.usersFilter, ['id', this.state.activeUserId]);
        if (activeUserModel) {
            var activeUserComponent = <ActiveUser user={activeUserModel} />;
        } else {
            var activeUserComponent = <div>Nothing found :(</div>;
        }
        return (
            <div className="container app">
                <SearchBar query={this.state.query} onFilterUsers={this.filterUsers.bind(this)} />
                <ToolBar onSortUsers={this.sortUsers.bind(this)} />
                <div className="row">
                    <div className="col-md-3">
                        {activeUserComponent}
                    </div>
                    <div className="col-md-9">
                        <UserList users={this.state.usersFilter} onActiveUser={this.setActiveUser.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}
