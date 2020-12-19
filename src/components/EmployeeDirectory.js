import React, { Component } from 'react';
import API from '../utils/API';
import SearchHeader from './SearchHeader';
import EmployeeList from './EmployeeList';
import SortBtns from './SortBtns';

class EmployeeDirectory extends Component {
  state = {
    search: '',
    employees: [],
    sorted: false,
  };

  componentDidMount() {
    this.getRandomRmployees();
  }

  getRandomRmployees = async () => {
    API.randomEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSortByName = () => {
    if (!this.state.sorted) {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        ),
        sorted: true,
      });
    } else {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          a.name.first > b.name.first ? -1 : 1
        ),
        sorted: false,
      });
    }
  };

  handleSortByCountry = () => {
    if (!this.state.sorted) {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          a.location.country > b.location.country ? 1 : -1
        ),
        sorted: true,
      });
    } else {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          a.location.country > b.location.country ? -1 : 1
        ),
        sorted: false,
      });
    }
  };

  render() {
    return (
      <div>
        <SearchHeader
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <div className='container'>
          <SortBtns
            handleSortByName={this.handleSortByName}
            handleSortByCountry={this.handleSortByCountry}
          />
          <EmployeeList
            search={this.state.search}
            employees={this.state.employees}
          />
        </div>
      </div>
    );
  }
}

export default EmployeeDirectory;
