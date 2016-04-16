import React, { Component, PropTypes } from 'react';
/*
const ToolBar = ({onSortUsers}) => {
  return (
    <div>
        <button onClick={() => onSortUsers('name', 'asc')} className="btn btn-default" href="#" role="button"><span className="glyphicon glyphicon-sort-by-alphabet"></span> Name</button>
        <button onClick={() => onSortUsers('age', 'desc')} className="btn btn-default" href="#" role="button"><span className="glyphicon glyphicon-sort-by-order-alt"></span> Age</button>
    </div>
  );
}

export default ToolBar;
*/

export default class ToolBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            sort: 'desc'
        };
    }

    sortUsers(field) {
        this.props.onSortUsers(field, this.state.sort);
        this.setState({
            sort: (this.state.sort=='desc') ? 'asc' : 'desc'
        });
    }

    render() {
        return (
          <div className="tool-bar">
              <button onClick={() => this.sortUsers('name')} className="btn btn-default" href="#" role="button"><span className="glyphicon glyphicon-sort-by-alphabet"></span> Name</button>
              <button onClick={() => this.sortUsers('age')} className="btn btn-default" href="#" role="button"><span className="glyphicon glyphicon-sort-by-order-alt"></span> Age</button>
          </div>
        );
    }
}
