import React, { Component } from 'react';

/*const SearchBar = ({query, onFilterUsers}) => {
  return (
    <div className="form-group">
        <input type="text" className="form-control" name="query" placeholder="Search in here" value={query} />
    </div>
  );
}

export default SearchBar;*/

export default class SearchBar extends Component {

    /*constructor (props) {
        super(props);
        this.state = {
            sort: 'desc'
        };
    }*/

    handleChange(event) {
        console.log('s');
        this.props.onFilterUsers(event.target.value);
    }

    render() {
        const {query} = this.props;
        return (
          <div className="form-group">
              <input onChange={this.handleChange.bind(this)} type="text" className="form-control" name="query" placeholder="Search in here" value={query} />
          </div>
        );
    }
}
