import React from 'react';
import '../styles/Navbar.css'

import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class MyNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      value: ''
    }
  }

  
  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    console.log(this.state.value);
    if(this.state.value === '')
    {
      event.preventDefault();
      return;
    }  
  }
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Flickr</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/">
            Explore
        </NavItem>
          <NavItem eventKey={2} href="#">
            <div class="search-container">
              <form onSubmit={this.handleSubmit} action='/search'>
                <input style={{ color: '#000', width: '300px' }} type="text" placeholder="Search.." name="q" onChange={this.handleChange}/>
              </form>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
