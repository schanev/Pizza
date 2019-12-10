import React from 'react'
import './Header.css'

class Header extends React.Component {
  state = {
    searchValue: ""
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    const { searchValue } = this.state
    return (
      <div className="header-container">
        <span><h1>Pizza Place</h1></span>
        
        <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
      </div>
    )
  }

}

export default Header